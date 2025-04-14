import ProjectCarousel from "./ProjectCarousel";

export default function ListProject() {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center px-10 py-20">
            <div className="max-w-md mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Experienced<br />Web & Mobile<br />Developer
                </h1>
                <button className="mt-5 py-2 px-4 bg-white text-black rounded font-medium hover:bg-gray-200">
                    View My Projects Online
                </button>
            </div>
            <div className="w-full md:w-1/2">
                <ProjectCarousel />
            </div>
        </section>
    );
}
