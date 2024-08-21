import { experience } from "../data/experience";

function ExperiencePage() {

    const experiencesBlocks = experience.map((e, i) => {

        const bulletpoints = e.bulletpoints.map((b, j) => {
            return (
                <li key={j}>{b}</li>
            )
        })
        return (
            <div key={i} className="text-base md:text-xl my-10 p-5 rounded border border-mint-100 bg-mint-100 dark:border-mint-900 dark:bg-mint-900 shadow-md dark:shadow-lg dark:shadow-black">
                <div className="flex items-baseline mb-2">
                    <div className="text-lg md:text-3xl">{e.position}</div>
                    {e.company !== "" ? <div className="mx-3 text-lg md:text-3xl">|</div> : <div/>}
                    <div className="text-md ">{e.company}</div>
                    <div className="flex-grow"></div>
                    <div className="text-sm md:text-lg">{e.date}</div>
                </div>
                <div className="flex border-b border-mint-800 mb-4 pb-2 text-gray-600 dark:text-gray-300">
                    <div className="">{e.using.join(", ")}</div>
                    <div className="flex-grow" />
                    <div className="text-sm md:text-lg">{e.location}</div>
                </div>


                <div>{e.summary}</div>
                <ul className="pl-5 list-disc text-gray-800 dark:text-gray-200">{bulletpoints}</ul>
            </div>
        )
    })

    return (
        <div className="container mx-auto flex flex-col items-center">
            <div className="p-2 ">
                {experiencesBlocks}
            </div>
        </div>


    );
}

export default ExperiencePage;