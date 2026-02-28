import { Figma, MonitorPlay, Code } from "lucide-react"; // Fallback icons for tools
import StudiesCard from "../../assets/Studies Card.svg";
import ExperienceCard from "../../assets/Experience Card.svg";
import CompetenciesCard from "../../assets/Competencies Card.svg";
import ToolsCard from "../../assets/Tools Card.svg";
import DeyWithMeCard from "../../assets/Dey With Me Card.svg";

export function AboutDetails() {
    return (
        <section className="w-full bg-portfolio-cream py-8 lg:py-20 lg:pb-0 relative overflow-hidden">
            {/* Dashed vertical guidelines for mobile layout continuity */}
            <div className="absolute inset-y-0 left-6 border-l-[1.5px] border-dashed border-[#DBBCAC] lg:hidden"></div>
            <div className="absolute inset-y-0 right-6 border-r-[1.5px] border-dashed border-[#DBBCAC] lg:hidden"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">

                    {/* Column 1: Studies */}
                    <div className="relative w-full flex justify-center">
                        <img src={StudiesCard} alt="Studies Card" className="w-full max-w-md lg:max-w-none h-auto object-cover" />
                    </div>

                    {/* Column 2: Experience */}
                    <div className="relative w-full flex justify-center">
                        <img src={ExperienceCard} alt="Experience Card" className="w-full max-w-md lg:max-w-none h-auto object-cover" />
                    </div>

                    {/* Column 3: Competencies & Tools */}
                    <div className="flex flex-col justify-start w-full items-start">
                        <div className="flex flex-col items-center gap-4 w-full scale-85 ">
                            {/* Competencies */}
                            <div className="relative w-full flex justify-center">
                                <img src={CompetenciesCard} alt="Competencies Card" className="w-full h-auto object-cover" />
                            </div>

                            {/* Tools */}
                            <div className="relative w-full flex justify-center">
                                <img src={ToolsCard} alt="Tools Card" className="w-full h-auto object-cover -mt-2" />
                            </div>

                            {/* Dey With Me */}
                            <div className="relative w-full @container mt-2 flex justify-center">
                                <img src={DeyWithMeCard} alt="Dey With Me Card" className="w-full h-auto block" />

                                <div className="absolute inset-0 flex items-center justify-end pr-[12%] pb-[3%]">
                                    <div className="flex flex-col items-center gap-[1.5cqw]">
                                        <a
                                            href="#"
                                            className="bg-[#F76C54] text-white font-epilogue font-medium flex items-center justify-center gap-[1cqw] transform -rotate-[4deg] translate-x-[15%] hover:scale-105 transition-transform z-10 shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                                            style={{
                                                fontSize: 'clamp(10px, 3.5cqw, 22px)',
                                                padding: 'clamp(4px, 1cqw, 10px) clamp(12px, 3cqw, 26px)',
                                                borderRadius: 'clamp(6px, 1.5cqw, 12px)'
                                            }}
                                        >
                                            LinkedIn
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </a>

                                        <a
                                            href="#"
                                            className="bg-[#47A7FE] text-white font-epilogue font-medium flex items-center justify-center gap-[1cqw] transform rotate-[4deg] -translate-x-[5%] hover:scale-105 transition-transform z-20 shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                                            style={{
                                                fontSize: 'clamp(10px, 3.5cqw, 22px)',
                                                padding: 'clamp(4px, 1cqw, 10px) clamp(12px, 3cqw, 26px)',
                                                borderRadius: 'clamp(6px, 1.5cqw, 12px)'
                                            }}
                                        >
                                            Behance
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
