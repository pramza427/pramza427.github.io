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
    dark = dark === "true" ? true : false
    setDisplayMode(dark);
  }, []);

  function setDisplayMode(bool) {
    if (bool) {
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



  return (
    <div className="bg-gray-100 dark:bg-mint-950 text-sm md:text-xl">
      <main className='App-main text-black dark:text-white flex flex-col'>
        <nav id="navbar" className='z-10 w-full h-min text-xs sm:text-base md:text-xl text-center bg-mint-800 text-mint-100 fixed bottom-0 sm:top-0 md:bg-opacity-70 backdrop-blur-[18px] duration-300'>
          <div className='flex justify-between items-center container m-auto'>
            <div className='px-5 py-3 font-bold hidden md:block'>Portfolio</div>
            <div className='flex w-full lg:w-2/3 items-center'>
              <div className={page === Pages.ABOUT
                ? "flex-1 p-1 md:p-3 text-mint-400 border-b-4 border-mint-500"
                : "flex-1 p-1 md:p-3 cursor-pointer hover:text-mint-500"}
                onClick={() => setPage(Pages.ABOUT)}>
                <i className='fas fa-user' />
                <div className=''>About Me</div>
              </div>
              <div className={page === Pages.PROJECTS
                ? "flex-1 p-1 md:p-3 text-mint-400 border-b-4 border-mint-500 "
                : "flex-1 p-1 md:p-3 cursor-pointer hover:text-mint-500"}
                onClick={() => setPage(Pages.PROJECTS)}>
                <i className='fas fa-code' />
                <div className=''>Projects</div>
              </div>
              <div className={page === Pages.EXPERIENCE
                ? "flex-1 p-1 md:p-3 text-mint-400 border-b-4 border-mint-500 "
                : "flex-1 p-1 md:p-3 cursor-pointer hover:text-mint-500"}
                onClick={() => setPage(Pages.EXPERIENCE)}>
                <i className='fas fa-file-lines' />
                <div className=''>Experience</div>
              </div>
              <div className={page === Pages.ADVENTURES
                ? "flex-1 p-1 md:p-3 text-mint-400 border-b-4 border-mint-500 "
                : "flex-1 p-1 md:p-3 cursor-pointer hover:text-mint-500"}
                onClick={() => setPage(Pages.ADVENTURES)}>
                <i className='fas fa-earth-americas' />
                <div className=''>Adventures</div>
              </div>
              <div className='flex-1 p-1 md:p-3 right-10 top-10 md:block cursor-pointer hover:text-mint-500'
                onClick={() => setDisplayMode(!isDark)}>
                {isDark === true ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
              </div>
            </div>
          </div>
        </nav>

        <div className='sm:pt-16 flex-grow'>
          {mainContent}
        </div>

        <footer className='mb-10 sm:mb-0 p-2 text-white text-center justify-center bg-mint-700 dark:bg-mint-900'>
          <span className='select-none'>
            Contact me at:
          </span>
          <span className='px-3'>
            pramza427@gmail.com
          </span>
        </footer>
      </main>
    </div>
  );
}

export default App;