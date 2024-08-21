import { stateInfo } from "../data/state_info";
import PictureCarousel from "../elements/PictureCarousel";
import AlaskaHawaii from "../maps/AlaskaHawaii";
import Usa from "../maps/Usa";
import React, { useState } from "react";

const locations = [
    {
        id: 0,
        name: "Lower 48",
        links: [1, null, null, null],
        elem: Usa
    },
    {
        id: 1,
        name: "Alaska/Hawaii",
        links: [null, 0, null, null],
        elem: AlaskaHawaii
    }
]

const DIRECTIONS = {
    LEFT: 0,
    RIGHT: 1,
    UP: 2,
    DOWN: 3
};

function AdventurePage() {
    const [currentState, setCurrentState] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const [fromDirection, setFromDirection] = useState(0);

    function setNextLoc(index, direction) {
        setCurrentState("");
        setLastIndex(currentIndex);
        setCurrentIndex(index);
        setFromDirection(direction);
    }

    function PrintLinks(a) {
        return (
            <div>
                {a.a[DIRECTIONS.LEFT] != null
                    ? <button className="absolute left-10 top-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.LEFT], DIRECTIONS.LEFT)}>
                        <i className="fa-solid fa-4x fa-chevron-left"></i>
                    </button>
                    : <div />}

                {a.a[DIRECTIONS.RIGHT] != null
                    ? <button className="absolute right-10 top-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.RIGHT], DIRECTIONS.RIGHT)}>
                        <i className="fa-solid fa-4x fa-chevron-right"></i>

                    </button> : <div />}

                {a.a[DIRECTIONS.UP] != null
                    ? <button className="absolute top-10 right-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.UP], DIRECTIONS.UP)}>
                        <i className="fa-solid fa-4x fa-chevron-up"></i>
                    </button>
                    : <div />}

                {a.a[DIRECTIONS.DOWN] != null
                    ? <button className="absolute bottom-10 right-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.DOWN], DIRECTIONS.DOWN)}>
                        <i className="fa-solid fa-4x fa-chevron-down"></i>
                    </button>
                    : <div />}
            </div>
        )
    }

    function getLocationClass(index) {
        var directionClass = "";
        var arivingClass = "";
        switch (fromDirection) {
            case DIRECTIONS.LEFT:
                directionClass = "left"
                break;
            case DIRECTIONS.RIGHT:
                directionClass = "right"
                break;
            case DIRECTIONS.UP:
                directionClass = "up"
                break;
            case DIRECTIONS.DOWN:
                directionClass = "down"
                break;
            default:
                directionClass = "";
        }
        if (index === currentIndex) {
            arivingClass = "ariving"
        }
        else if (index === lastIndex) {
            arivingClass = "departing"
        }
        else {
            arivingClass = "hiddenLoc"
        }
        return "location " + arivingClass + " " + directionClass;
    }

    function PrintDescription() {
        if (currentState === "") {
            return (<div className="text-center">Click on a state to get more information</div>);
        }

        const iconColors = [" text-mint-200 dark:text-mint-700 ", " text-red-500 ", " text-yellow-500 ", " text-green-500 "];

        const currentStateInfo = stateInfo[currentState];

        if (currentStateInfo.visited === false) {
            return (
                <div className="flex flex-col text-center">
                    <div className="text-4xl m-5">{currentState}</div>
                    <div className="text-lg">I have never visited {currentState}</div>
                </div>
            )
        }

        const favoriteSpots = currentStateInfo.favoriteLoc.sort().map((loc, idx) => {
            return (<li key={idx} className="p-2 text-lg">{loc}</li>);
        });



        return (
            <div className="z-0 mb-10 flex flex-col 2xl:w-1/2 text-center 2xl:h-80vh">
                <div className="text-4xl m-5 font-bold">{currentState}</div>
                <div className="flex flex-col items-center" >
                    <div className="w-full md:w-1/2 m-3 text-2xl text-center font-semibold">
                        <div className="mb-2">
                            Activities:
                        </div>
                        <div className="p-4 bg-mint-100 dark:bg-mint-800 rounded-lg shadow-md dark:shadow-lg dark:shadow-green-950">
                            <i className={"fas fa-2x md:fa-4x fa-walking m-3" + iconColors[currentStateInfo.hiking]}></i>
                            <i className={"fas fa-2x md:fa-4x fa-campground m-3" + iconColors[currentStateInfo.camping]}></i>
                            <i className={"fas fa-2x md:fa-4x fa-hiking m-3" + iconColors[currentStateInfo.backpacking]}></i>
                            <i className={"fas fa-2x md:fa-4x fa-biking m-3" + iconColors[currentStateInfo.biking]}></i>
                            <i className={"fas fa-2x md:fa-4x fa-snowboarding m-3 mt-4" + iconColors[currentStateInfo.snowboarding]}></i>
                            <i className={"fas fa-2x md:fa-4x fa-mountain m-3 mb-1 mt-4" + iconColors[currentStateInfo.climbing]}></i>
                        </div>
                    </div>

                    {
                        currentStateInfo.favoriteLoc.length !== 0
                            ? <div className="w-full md:w-1/2 m-3 text-2xl text-center font-semibold">
                                <div className="mb-2">
                                    Visited locations:
                                </div>
                                <ul className="grid md:grid-cols-2 p-4 bg-mint-100 dark:bg-mint-800 rounded-lg shadow-md dark:shadow-lg dark:shadow-green-950">
                                    {favoriteSpots}
                                </ul>
                            </div>
                            : <div />
                    }

                    {
                        currentStateInfo.pictures.length !== 0
                            ? <div className="w-full m-3 text-2xl text-center font-semibold">
                                <div className="mb-2">
                                    Favorite Pictures:
                                </div>
                                <PictureCarousel imgObj={currentStateInfo.pictures} />
                            </div>
                            : <div />
                    }

                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col 2xl:flex-row">
            <div className="w-full 2xl:w-1/2 text-center">
                <div className="my-5 text-3xl font-bold">{locations[currentIndex].name}</div>
                <div className="mb-5 carouselContainer">
                    <div className="carousel text-gray-400 dark:text-gray-500">
                        {locations.map((loc, index) => (
                            <div className={getLocationClass(index)} >
                                {loc.elem(setCurrentState)}
                            </div>
                        ))}
                    </div>
                    <PrintLinks a={locations[currentIndex].links} />
                </div>
            </div>
            <PrintDescription />
        </div>


    );

}

export default AdventurePage;