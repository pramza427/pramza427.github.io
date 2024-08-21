function Hobbies() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                // Optional: remove class when element goes out of view
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    document.querySelectorAll('.hobby-item').forEach(item => {
        observer.observe(item);
    });

    const hobbies = [
        { name: "Hiking", iconClass: "fa-walking" },
        { name: "Backpacking", iconClass: "fa-hiking" },
        { name: "Camping", iconClass: "fa-campground" },
        { name: "Climbing", iconClass: "h-[1em] w-[1.2em] fa-climber" },
        { name: "Biking", iconClass: "fa-biking" },
        { name: "Fishing", iconClass: "fa-fish" },
        { name: "Snowboarding", iconClass: "fa-person-snowboarding" },
        { name: "Sewing", iconClass: "fa-pen-ruler" },
        { name: "Woodworking", iconClass: "fa-hammer" },
        { name: "Baking", iconClass: "fa-cake" },
        { name: "Coding", iconClass: "fa-code" },
        { name: "Photography", iconClass: "fa-camera" }
    ]

    return (
        <div id="hobbies" className="">
            <div className="m-3 text-2xl text-center font-bold">
                Hobbies
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {hobbies.map((h, idx) => {
                    return (
                        <div className="p-2 text-center bg-mint-100 dark:bg-mint-800 rounded shadow-md dark:shadow-lg dark:shadow-green-950">
                            <i className={"fas fa-2x md:fa-4x m-3 text-mint-800 dark:text-mint-300 "+ h.iconClass} />
                            <div className="font-semibold">{h.name}</div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Hobbies;