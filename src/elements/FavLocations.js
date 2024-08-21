function FavLocations() {

    return (
        <div id="favLocs" className="">
            <div className="m-3 text-2xl text-center font-bold">
                Favorite Destinations
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="p-2 text-center bg-mint-100 dark:bg-mint-800 rounded shadow-md dark:shadow-lg dark:shadow-green-950">
                    <i className="fas fa-2x md:fa-4x fa-walking m-3 text-mint-800 dark:text-mint-300" />
                    <div>Black Canyon, CO</div>
                    <div>Great Sand Dunes National Park, CO</div>
                    <div>Mammoth Cave, KY</div>
                    <div>Redwood National Park, CA</div>
                    <div>Yosemite National Park, CA</div>
                    <div>Petrified Foreset National Park, AZ</div>
                </div>

                <div className="p-2 text-center bg-mint-100 dark:bg-mint-800 rounded shadow-md dark:shadow-lg dark:shadow-green-950">
                    <i className="fas fa-2x md:fa-4x fa-person-snowboarding m-3 text-mint-800 dark:text-mint-300" />
                    <div>Aspen Snowmass, CO</div>
                    <div>Breckenridge, CO</div>
                    <div>Copper Mountain, CO</div>
                    <div>Tamarack Resort, ID</div>
                    <div>Vail, CO</div>
                    <div>Wolf Creek, CO</div>
                </div>

                <div className="p-2 text-center bg-mint-100 dark:bg-mint-800 rounded shadow-md dark:shadow-lg dark:shadow-green-950">
                    <i className="fas fa-2x md:fa-4x fa-hiking m-3 text-mint-800 dark:text-mint-300" />
                    <div>Eagle Rock Loop, AR</div>
                    <div>Four Pass Loop, CO</div>
                    <div>Wind River Range, WY</div>
                </div>

                <div className="p-2 text-center bg-mint-100 dark:bg-mint-800 rounded shadow-md dark:shadow-lg dark:shadow-green-950">
                    <i className="fas fa-2x md:fa-4x h-[1em] w-[1.2em] fa-climber m-3 text-mint-800 dark:text-mint-300" />
                    <div>Red River Gorge, KY</div>
                    <div>Shelf Road, CO</div>
                    <div>Ten Sleep Canyon, WY</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default FavLocations;