import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/about_me.js';

gsap.registerPlugin(ScrollTrigger);

const SkillBar = () => {
  const maxProficiency = 3;

  const skillContainerRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP ScrollTrigger for each skill bar
    skills.forEach((skill, index) => {
      const skillBarRef = skillContainerRef.current.children[index].children[0].children[1].children[0];
      gsap.to(skillBarRef, {
        width: `${skill.proficiency / maxProficiency * 100}%`,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: skillBarRef,
          end: 'top 80%',
          start: 'top 100%',
          scrub: false,
        },
      });
    });
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="m-3 text-2xl text-center font-bold">Development Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" ref={skillContainerRef}>
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-mint-100 dark:bg-mint-800 rounded-lg shadow-md dark:shadow-lg dark:shadow-green-950">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium">{skill.name}</h4>
              <div className="w-1/2 h-4 bg-white dark:bg-mint-950 rounded-full" aria-label={`${skill.name} proficiency`}>
                <div className="bg-mint-700 dark:bg-mint-600 h-4 rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
            <div className="text-sm mt-2">{skill.proficiency} years of experience</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBar;