import { ArrowUpRight01Icon, Briefcase01Icon, Task01Icon, Award01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";
import aboutBgMobile from "../assets/about hero on mobile.svg";
import aboutBg from "../assets/About section First part bg.svg"
import profileImg from "../assets/Baskey Hola Image.svg";

export function AboutSection() {

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
        <section className="relative w-full min-h-screen lg:min-h-[1252px] pt-[80px]">
            {/* Split Background */}
            <div className="absolute inset-0 flex flex-col pointer-events-none">
                <div
                    className="h-[50%] lg:h-[70%] w-full bg-cover bg-bottom"
                    style={{ backgroundImage: `url("${aboutBg}")`}}
                />
                <div className="h-[50%] lg:h-[30%] w-full bg-portfolio-cream" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pt-16 md:pt-40 pb-12 md:pb-16 flex flex-col justify-between min-h-screen lg:min-h-[1252px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <h2 className="text-portfolio-cream font-fruktur text-[40px] md:text-6xl lg:text-7xl leading-[130%]">
                            This is<br />Baskey Koer
                        </h2>

                        <p className="text-portfolio-cream opacity-80 font-epilogue text-lg md:text-xl lg:text-2xl leading-[130%] max-w-lg">
                            I'm also <strong className="font-semibold text-white">Abdulbassit Abdullahi,</strong>{" "}
                            A passionate <strong className="font-semibold text-white">Product Designer</strong> crafting intuitive{" "}
                            <strong className="font-semibold text-white">digital experiences</strong> that blend strategy, aesthetics, and
                            functionality to <strong className="font-semibold text-white">solve</strong>{" "}
                            <strong className="font-semibold text-white">real-world problems.</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mt-4 w-full">
                            <Link
                                to="/about"
                                className="w-full sm:w-auto px-10 py-4 rounded-full bg-transparent text-white transition-all font-poppins font-medium text-lg flex items-center justify-center gap-3 group shadow-xl ring-1 ring-portfolio-cream/80"
                            >
                                <span>Know me</span>
                                <ArrowUpRight01Icon size={20} className="transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/contact"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 text-portfolio-cream hover:text-white transition-colors group py-2"
                            >
                                <span className="font-poppins font-semibold text-lg underline underline-offset-8 decoration-portfolio-coral/30 group-hover:decoration-portfolio-coral transition-all">Contact me</span>
                                <ArrowUpRight01Icon size={20} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Profile Image with Stickers */}
                    <div className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="relative z-10">
                            <img
                                src={profileImg}
                                alt="Baskey Koer"
                                className="w-full max-w-[450px] md:max-w-[500px] lg:max-w-[586px] object-cover"
                            />
                        </div>
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
