import PictureCarousel from "../elements/PictureCarousel";
import AlaskaHawaii from "../maps/AlaskaHawaii";
import Canada from "../maps/Canada";
import Europe from "../maps/Europe";
import Usa from "../maps/Usa";
import React, { useState } from "react";

const locations = [
    {
        id: 0,
        name: "Lower 48",
        links: [1, 3, 2, null],
        elem: Usa
    },
    {
        id: 1,
        name: "Alaska/Hawaii",
        links: [3, 0, null, null],
        elem: AlaskaHawaii
    },
    {
        id: 2,
        name: "Canada",
        links: [1, 3, null, 0],
        elem: Canada
    },
    {
        id: 3,
        name: "Europe",
        links: [0, 1, null, null],
        elem: Europe
    }
]

const DIRECTIONS = {
    LEFT: 0,
    RIGHT: 1,
    UP: 2,
    DOWN: 3
};

function AdventurePage() {
    const [currentState, setCurrentState] = useState("")
    const [currentStateInfo, setCurrentStateInfo] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const [fromDirection, setFromDirection] = useState(0);

    function setLocation(id, info) {
        setCurrentState(id);
        setCurrentStateInfo(info);
    }

    function setNextLoc(index, direction) {
        setCurrentState("");
        setCurrentStateInfo({});
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
                    ? <button className="absolute top-0 right-1/2"
                        onClick={() => setNextLoc(a.a[DIRECTIONS.UP], DIRECTIONS.UP)}>
                        <i className="fa-solid fa-4x fa-chevron-up"></i>
                    </button>
                    : <div />}

                {a.a[DIRECTIONS.DOWN] != null
                    ? <button className="absolute bottom-0 right-1/2"
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
                directionClass = "left";
                break;
            case DIRECTIONS.RIGHT:
                directionClass = "right";
                break;
            case DIRECTIONS.UP:
                directionClass = "up";
                break;
            case DIRECTIONS.DOWN:
                directionClass = "down";
                break;
            default:
                directionClass = "";
        }
        if (index === currentIndex) {
            arivingClass = "ariving" + "-" + directionClass;
        }
        else if (index === lastIndex) {
            arivingClass = "departing" + "-" + directionClass;
        }
        else {
            arivingClass = "hiddenLoc"
        }
        return "location " + arivingClass;
    }

    function PrintDescription() {
        if (Object.keys(currentStateInfo).length === 0) {
            return (<div className="flex flex-col flex-grow justify-center items-center">
                Click on a state to get more information
            </div>);
        }

        const iconColors = [" text-mint-200 dark:text-mint-700 ", " text-red-500 ", " text-yellow-500 ", " text-green-500 "];

        if (currentStateInfo.visited === false) {
            return (
                <div className="z-0 mb-10 flex flex-col 2xl:w-1/2 text-center">
                    <div className="text-4xl m-5 font-bold">{currentState}</div>
                    <div className="m-3 text-2xl">I have never visited {currentState}</div>
                </div>
            )
        }

        const favoriteSpots = currentStateInfo.favoriteLoc?.sort().map((loc, idx) => {
            return (<li key={idx} className="p-2 text-lg">{loc}</li>);
        });

        return (
            <div className="z-0 mb-10 flex flex-col 2xl:w-1/2 text-center">
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
        <div className="flex flex-grow flex-col 2xl:flex-row overflow-hidden">
            <div className="w-full 2xl:w-1/2 text-center">
                <div className="my-5 text-3xl font-bold">{locations[currentIndex].name}</div>
                <div className="mb-5 carouselContainer py-20">
                    <div className="carousel text-gray-400 dark:text-gray-500">
                        {locations.map((loc, index) => (
                            <div className={getLocationClass(index)} >
                                {loc.elem(setLocation)}
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