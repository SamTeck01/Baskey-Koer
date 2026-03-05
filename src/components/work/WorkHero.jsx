import { Briefcase01Icon, Task01Icon, Award01Icon } from "hugeicons-react";
import aboutBg from "../../assets/about hero on mobile.svg";
import portfolioLogo from "../../assets/Hero content.svg";

export function WorkHero() {

    const stats = [
        {
            value: "2+",
            label: "Years of designing",
            circleBg: "bg-[#c8c6d4]",
            icon: <Briefcase01Icon size={30} color="#2d2b3d" variant="soft" />,
        },
        {
            value: "20+",
            label: "Projects complete",
            circleBg: "bg-[#c5dcf5]",
            icon: <Task01Icon size={28} color="#4a9fd4" variant="soft" />,
        },
        {
            value: "3+",
            label: "Hackathon won",
            circleBg: "bg-[#f5c8bc]",
            icon: <Award01Icon size={28} color="#d4614a" variant="soft" />,
        },
    ];

    return (
        <section className="relative w-full min-h-fit lg:min-h-[1252px]">
            {/* Split Background */}
            <div className="absolute inset-0 flex flex-col pointer-events-none">
                <div
                    className="h-[480px] lg:h-[70%] min-w-full bg-bottom"
                    style={{ backgroundImage: `url("${aboutBg}")` }}
                />
                <div className="h-[40%] lg:h-[30%] w-full bg-portfolio-cream" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pb-12 md:pb-16 flex flex-col justify-between min-h-screen lg:min-h-[1252px] gap-10 md:gap-auto">
                <div className="relative w-full min-h-[480px] lg:min-h-[902px] flex items-center justify-center overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center select-none w-full max-w-[841px] ">
                        {/* Figma Exported SVG Content */}
                        <img
                            src={portfolioLogo}
                            alt="Hero Content"
                            className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] lg:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-90 lg:scale-100"
                        />
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="w-full rounded-[22px] border-[1.5px] border-[#DBBCAC] bg-transparent mt-8 lg:mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y-[1.5px] md:divide-y-0 md:divide-x-[1.5px] divide-[#DBBCAC]">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between px-[45px] py-[48px] gap-4"
                            >
                                {/* Text */}
                                <div>
                                    <p
                                        className="font-extrabold text-[36px] text-portfolio-dark leading-none tracking-tight"
                                        style={{ fontFamily: "'Epilogue', sans-serif" }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p
                                        className="text-[15px] text-portfolio-dark/80 mt-2 font-normal whitespace-nowrap"
                                        style={{ fontFamily: "'Epilogue', sans-serif" }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Icon circle */}
                                <div
                                    className={`w-14 h-14 md:w-[76px] md:h-[76px] rounded-full flex items-center justify-center shrink-0 ${stat.circleBg}`}
                                >
                                    <div className="scale-75 md:scale-100">
                                        {stat.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
