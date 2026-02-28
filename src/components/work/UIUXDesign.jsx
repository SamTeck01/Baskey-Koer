import cloudinaryImg from "../../assets/Cloudora.png";
import billyPayImg from "../../assets/Billy Pay.png";
import uxScaleImg from "../../assets/Ux Scale.png";

export function UIUXDesign() {
    const projects = [
        {
            title: "Cloudora",
            date: "Published: October 2025.",
            description: "A cloud storage platform designed to solve cluttered and inefficient file management by creating a clean, accessible cloud storage experience with intuitive organization flows.",
            image: cloudinaryImg,
            buttonText: "View Case Study",
            buttonIcon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path
                        d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8925 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            title: "Billy Pay",
            date: "Created: December 2025.",
            description: "A fintech platform built to reduce financial stress by helping users manage bills, save ahead, join group contributions, and create virtual dollar cards within one seamless platform.",
            image: billyPayImg,
            buttonText: "View Figma File",
            buttonIcon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path
                        d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8925 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        },
        {
            title: "Lanfriq",
            date: "Created: November 2025.",
            description: "A fintech land tokenization platform created to democratize real estate investment by enabling users to tokenize, fractionate, and invest in land assets through a secure web3 experience.",
            image: uxScaleImg,
            buttonText: "View Figma File",
            buttonIcon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path
                        d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8925 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full bg-portfolio-cream py-16 md:py-32 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-portfolio-dark font-nerko text-5xl md:text-7xl text-center mb-16 md:mb-32">
                    UI-UX Design
                </h2>

                <div className="flex flex-col gap-16 md:gap-32">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-20 items-start"
                        >
                            <div className="lg:col-span-4 flex flex-col gap-8 md:gap-10">
                                <div className="space-y-3">
                                    <h3 className="text-portfolio-dark font-poppins text-[32px]">
                                        {project.title}
                                    </h3>
                                    <p className="text-portfolio-dark/60 font-poppins text-base italic">
                                        {project.date}
                                    </p>
                                </div>

                                <p className="text-portfolio-dark/80 font-poppins text-lg leading-relaxed max-w-xl">
                                    {project.description}
                                </p>

                                <button className="h-12 px-7 rounded-full border border-portfolio-dark/20 hover:bg-portfolio-dark hover:text-white hover:border-portfolio-dark transition-all duration-300 text-portfolio-dark font-poppins font-medium inline-flex items-center gap-3 self-start group">
                                    <span>{project.buttonText}</span>
                                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                                        {project.buttonIcon}
                                    </span>
                                </button>
                            </div>

                            <div className="lg:col-span-6 relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-portfolio-coral/20 to-portfolio-green/20 rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative overflow-hidden aspect-auto shadow-xl shadow-portfolio-dark/5">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
