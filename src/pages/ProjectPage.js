import { projects } from "../data/projects";

function ProjectPage() {

    const projectBlocks = projects.map((p, i) => {
        return (
            <div key={i} className="m-4 h-min break-inside-avoid-column rounded-lg border border-mint-100 bg-mint-100 dark:border-mint-900 dark:bg-mint-900 shadow-md dark:shadow-lg dark:shadow-black">
                <img className="rounded-t-lg w-full" alt="" src={p.img_src} />
                <section id="cardBody" className="p-2">
                    <div className="flex">
                        <div className="text-2xl text-mint-800 dark:text-mint-100">{p.name}</div>
                        <div className="flex-grow" />
                        <div className="text-gray-400">{p.language}</div>
                    </div>
                    <div className="py-3">{p.description}</div>
                    <div className="flex justify-between">
                        <a className="px-2 py-1 m-2 rounded bg-mint-500 dark:bg-mint-700 shadow-md ease-in duration-100 hover:shadow-lg hover:shadow-mint-400 dark:hover:bg-mint-800 dark:hover:shadow-black"
                            href={p.repo_link}>
                            Code
                        </a>
                        {
                            p.web_link !== null
                                ? <a className="px-2 py-1 m-2 rounded bg-mint-500 dark:bg-mint-700 shadow-md ease-in duration-100 hover:shadow-lg hover:shadow-mint-400 dark:hover:bg-mint-800 dark:hover:shadow-black"
                                    href={p.web_link}>
                                    Demo
                                </a>
                                : <div />
                        }
                    </div>
                </section>
            </div>
        )
    })

    return (
        <div className="container sm:py-10 mx-auto columns-1 lg:columns-2 2xl:columns-3">
            {projectBlocks}
        </div>
    );
}

export default ProjectPage;