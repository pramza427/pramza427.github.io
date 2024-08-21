import SkillBar from "../elements/Skillbar";
import Hobbies from "../elements/Hobbies";
import FavLocations from "../elements/FavLocations";
import PictureCarousel from "../elements/PictureCarousel";
import { favoritePictures } from "../data/about_me";

function AboutPage() {

    return (
        <div>
            <div className="py-10 flex flex-col bg-mint-100 dark:bg-mint-900">
                <div className="mb-4 container mx-auto text-center lg:text-left">
                    <div className="text-6xl roboto-regular text-mint-900 dark:text-white">Piotr Ramza</div>
                    <div className="text-3xl text-mint-800 dark:text-gray-300">Software Engineer</div>
                    <div className="text-2xl text-mint-600 dark:text-gray-500">Photographer and Maker</div>
                </div>
                <div className="flex flex-col container mx-auto lg:flex-row items-center">
                    <div className="inline-block">
                        <div className="flex items-center justify-center rounded-full bg-mint-700 min-w-[320px] h-[320px] md:min-w-[420px] md:h-[420px] xl:min-w-[520px] xl:h-[520px]">
                            <img alt="Me" className="rounded-full min-w-[300px] h-[300px] md:min-w-[400px] md:h-[400px] xl:min-w-[500px] xl:h-[500px]" src="imgs/Me.jpg" />
                        </div>
                        <div className="mt-3 flex justify-evenly text-mint-800 dark:text-mint-100">
                            <a href="https://www.linkedin.com/in/piotrramza/">
                                <i className="fa-brands fa-3x fa-linkedin hover:text-mint-600"></i>
                            </a>
                            <a href="https://github.com/pramza427">
                                <i className="fa-brands fa-3x fa-github  hover:text-mint-600"></i>
                            </a>
                            <a href="https://www.instagram.com/p_ramza/">
                                <i className="fa-brands fa-3x fa-instagram  hover:text-mint-600"></i>
                            </a>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col items-center">
                        <div className="pb-5 md:pb-10 text-base md:text-2xl">
                            I’m a software developer with two years professional experience and a passion for making, whether that be physical or virtual. I enjoy tackling problems with creative solutions through exploration of new technologies. I have worked on a multitude of projects ranging in scale from individual to working on a team with dozens of people. I love sitting down, coding, and making something new.
                        </div>
                        <div id="favorites" className="w-full m-3 rounded">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 md:gap-y-10">
                                <div className="">
                                    <i className="fas fa-lg md:fa-3x fa-palette m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Color</div>
                                    <div className="">Purple</div>
                                </div>

                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-burger m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Food</div>
                                    <div className="">Pierogi</div>
                                </div>
                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-ticket m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Movie</div>
                                    <div className="">Into the Spiderverse</div>
                                </div>

                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-earth-americas m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Trip</div>
                                    <div className="">Black Canyon, Colorado</div>
                                </div>
                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-trophy m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Sport</div>
                                    <div className="">Snowboarding</div>
                                </div>

                                <div className="">
                                    <i className="fas fa-lg md:fa-2x fa-book m-3 text-mint-600" />
                                    <div className="font-bold text-mint-900 dark:text-mint-100">Favorite Book</div>
                                    <div className="">Murderbot diaries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="skillBar">
                <SkillBar />
            </div>

            <div className="container mx-auto mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <Hobbies />
                    <FavLocations />
                </div>
            </div>


            <div id="strengths" className="">

            </div>


            <div className="">
                <div className="m-3 text-2xl text-center font-bold">Favorite Pictures</div>
                <PictureCarousel imgObj={favoritePictures} />
            </div>


        </div >
    );
}

export default AboutPage;