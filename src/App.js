import './App.css';
import { useEffect, useState } from 'react';
import AboutPage from './pages/AboutPage.js';
import ProjectPage from './pages/ProjectPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import AdventurePage from './pages/AdventurePage.js';

function App() {
  const [page, setPage] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // set isDark when loading browser
  useEffect(() => {
    var dark = localStorage.getItem("isDark");
    dark = dark ?? true;
    if (dark === true) {
      document.getElementById("root").classList.add("dark");
    }
    else {
      document.getElementById("root").classList.remove("dark");
    }
    setIsDark(dark)
  }, []);

  function setDisplayMode(bool) {
    if (bool === true) {
      document.getElementById("root").classList.add("dark");
    }
    else {
      document.getElementById("root").classList.remove("dark");
    }
    localStorage.setItem("isDark", bool)
    setIsDark(bool);
  }

  // Page enum
  const Pages = Object.freeze({
    ABOUT: 0,
    PROJECTS: 1,
    EXPERIENCE: 2,
    ADVENTURES: 3
  });

  // Change page
  let mainContent = <AboutPage />;
  switch (page) {
    case Pages.ABOUT:
      mainContent = <AboutPage />;
      break;
    case Pages.PROJECTS:
      mainContent = <ProjectPage />;
      break;
    case Pages.EXPERIENCE:
      mainContent = <ExperiencePage />;
      break;
    case Pages.ADVENTURES:
      mainContent = <AdventurePage />;
      break;
    default:
      mainContent = <AboutPage />;
  }

  var prevScrollpos = window.scrollY;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    var currentSize = window.outerWidth;
    if (currentSize <= 640) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }
    else {
      document.getElementById("navbar").style.top = "0";
    }

  }

  return (
    <div className="bg-gray-100 dark:bg-mint-950 text-sm md:text-xl ">
      <main className='App-main text-black dark:text-white flex flex-col'>
        <nav id="navbar" className='z-10 w-full text-xs md:text-2xl text-center bg-mint-800 text-mint-100 sticky top-0 md:bg-opacity-70 backdrop-blur-[18px] duration-300'>
          <div className='flex justify-center items-center '>
            <div className='px-5 py-3 font-bold hidden md:block'>Portfolio</div>
            <div className='flex-grow' />
            <div className={page === Pages.ABOUT
              ? "p-1 md:p-3 text-mint-400 border-b-4 border-mint-500 "
              : "p-1 md:p-3 cursor-pointer hover:text-mint-500"}
              onClick={() => setPage(Pages.ABOUT)}>
              <i className='fas fa-user' />
              <div className='text-base'>About Me</div>
            </div>
            <div className={page === Pages.PROJECTS
              ? "p-1 md:p-3 text-mint-400 border-b-4 border-mint-500 "
              : "p-1 md:p-3 cursor-pointer hover:text-mint-500"}
              onClick={() => setPage(Pages.PROJECTS)}>
              <i className='fas fa-code' />
              <div className='text-base'>Projects</div>
            </div>
            <div className={page === Pages.EXPERIENCE
              ? "p-1 md:p-3 text-mint-400 border-b-4 border-mint-500 "
              : "p-1 md:p-3 cursor-pointer hover:text-mint-500"}
              onClick={() => setPage(Pages.EXPERIENCE)}>
              <i className='fas fa-file-lines' />
              <div className='text-base'>Experience</div>
            </div>
            <div className={page === Pages.ADVENTURES
              ? "p-1 md:p-3 text-mint-400 border-b-4 border-mint-500 "
              : "p-1 md:p-3 cursor-pointer hover:text-mint-500"}
              onClick={() => setPage(Pages.ADVENTURES)}>
              <i className='fas fa-earth-americas' />
              <div className='text-base'>Adventures</div>
            </div>
            <div className='flex-grow' />
            <div className='mx-5 p-1 md:p-3 right-10 top-10 md:block cursor-pointer hover:text-mint-500'
              onClick={() => setDisplayMode(!isDark)}>
              {isDark === true ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </div>
          </div>
        </nav>

        {mainContent}

        <div className='flex-grow' />

        <footer className='flex p-2 text-white items-center justify-center bg-mint-700 dark:bg-mint-900'>
          <div className='select-none'>
            Contact me at:
          </div>
          <div className='px-3'>
            pramza427@gmail.com
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;