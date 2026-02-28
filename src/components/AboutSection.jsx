import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import aboutBg from "../assets/About section First part bg.svg";
import profileImg from "../assets/Baskey Hola Image.svg";

export function AboutSection() {

    const stats = [
        {
            value: "2+",
            label: "Years of designing",
            circleBg: "bg-[#c8c6d4]",
            icon: (
                <svg width="30" height="26" viewBox="0 0 35 30" fill="none">
                    <path
                        d="M10.7143 3.21429C10.7143 1.43908 12.1534 0 13.9286 0H20.3571C22.1323 0 23.5714 1.43908 23.5714 3.21429V4.28571H31.0714C32.8466 4.28571 34.2857 5.7248 34.2857 7.5V10.4657L17.97 14.8157C17.428 14.96 16.8577 14.96 16.3157 14.8157L0 10.4657V7.5C0 5.7248 1.43908 4.28571 3.21429 4.28571H10.7143V3.21429ZM20.3571 2.14286H13.9286C13.3368 2.14286 12.8571 2.62255 12.8571 3.21429V4.28571H21.4286V3.21429C21.4286 2.62255 20.9489 2.14286 20.3571 2.14286Z"
                        fill="#2d2b3d"
                    />
                    <path
                        d="M0 12.1071C0 13.8823 1.43908 15.3214 3.21429 15.3214H31.0714C32.8466 15.3214 34.2857 13.8823 34.2857 12.1071V0L17.4193 4.49357C17.2382 4.54194 17.0475 4.54194 16.8664 4.49357L0 0V12.1071Z"
                        fill="#2d2b3d"
                    />
                </svg>
            ),
        },
        {
            value: "20+",
            label: "Projects complete",
            circleBg: "bg-[#c5dcf5]",
            icon: (
                <svg width="28" height="28" viewBox="0 0 35 35" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 0C8.09173 0 8.57143 0.479695 8.57143 1.07143V2.14286H25.7143V1.07143C25.7143 0.479695 26.194 0 26.7857 0C27.3774 0 27.8571 0.479695 27.8571 1.07143V2.14286H30C32.3669 2.14286 34.2857 4.06164 34.2857 6.42857V30C34.2857 32.3669 32.3669 34.2857 30 34.2857H4.28571C1.91878 34.2857 0 32.3669 0 30V6.42857C0 4.06164 1.91878 2.14286 4.28571 2.14286H6.42857V1.07143C6.42857 0.479695 6.90827 0 7.5 0ZM28.83 6.42857H5.45357C4.81071 6.42857 4.28571 6.90857 4.28571 7.5V9.64286C4.28571 10.2343 4.80857 10.7143 5.45357 10.7143H28.8321C29.475 10.7143 30 10.2343 30 9.64286V7.5C30 6.90857 29.4771 6.42857 28.83 6.42857ZM23.2586 17.4557C23.6775 17.8746 23.6775 18.5539 23.2586 18.9728L16.83 25.4014C16.629 25.6029 16.356 25.7162 16.0714 25.7162C15.7868 25.7162 15.5138 25.6029 15.3128 25.4014L12.0986 22.1871C11.8275 21.9161 11.7217 21.5211 11.8209 21.1509C11.9201 20.7807 12.2093 20.4915 12.5795 20.3923C12.9497 20.2931 13.3447 20.3989 13.6157 20.67L16.0714 23.1278L21.7414 17.4557C22.1604 17.0367 22.8396 17.0367 23.2586 17.4557Z"
                        fill="#4a9fd4"
                    />
                </svg>
            ),
        },
        {
            value: "3+",
            label: "Hackathon won",
            circleBg: "bg-[#f5c8bc]",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M6.5 2H17.5V13C17.5 15.9853 15.0376 18.4167 12 18.4167C8.96243 18.4167 6.5 15.9853 6.5 13V2Z" fill="#d4614a" />
                    <path d="M6.5 5H4C4 5 3 6.5 3.5 8.5C4 10 6.5 11 6.5 11V5Z" fill="#d4614a" />
                    <path d="M17.5 5H20C20 5 21 6.5 20.5 8.5C20 10 17.5 11 17.5 11V5Z" fill="#d4614a" />
                    <rect x="10.5" y="18.4" width="3" height="2.8" fill="#d4614a" />
                    <rect x="8" y="21" width="8" height="2" rx="1" fill="#d4614a" />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative w-full min-h-screen lg:min-h-[1252px]">
            {/* Split Background */}
            <div className="absolute inset-0 flex flex-col pointer-events-none">
                <div
                    className="h-[50%] lg:h-[70%] w-full bg-cover bg-bottom"
                    style={{ backgroundImage: `url("${aboutBg}")` }}
                />
                <div className="h-[50%] lg:h-[30%] w-full bg-portfolio-cream" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pt-16 md:pt-40 pb-12 md:pb-16 flex flex-col justify-between min-h-screen lg:min-h-[1252px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        <h2 className="text-portfolio-cream font-fruktur text-4xl md:text-6xl lg:text-7xl leading-[60px]">
                            This is<br />Baskey Koer
                        </h2>

                        <p className="text-portfolio-cream opacity-80 font-epilogue text-lg md:text-xl lg:text-2xl leading-7 max-w-lg">
                            I'm also <strong className="font-semibold text-white">Abdulbassit Abdullahi,</strong>{" "}
                            A passionate <strong className="font-semibold text-white">Product Designer</strong> crafting intuitive{" "}
                            <strong className="font-semibold text-white">digital experiences</strong> that blend strategy, aesthetics, and
                            functionality to <strong className="font-semibold text-white">solve</strong>{" "}
                            <strong className="font-semibold text-white">real-world problems.</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 w-full">
                            <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-portfolio-dark text-white hover:bg-portfolio-dark/90 transition-all font-poppins font-medium text-lg flex items-center justify-center gap-3 group shadow-xl ring-1 ring-portfolio-cream/80">
                                <span>Know me</span>
                                <ArrowUpRight className="transition-transform group-hover:translate-x-1"/>
                            </button>

                            <button className="w-full sm:w-auto flex items-center justify-center gap-3 text-portfolio-cream hover:text-white transition-colors group py-2">
                                <span className="font-poppins font-semibold text-lg underline underline-offset-8 decoration-portfolio-coral/30 group-hover:decoration-portfolio-coral transition-all">Contact me</span>
                                <ArrowUpRight className="transition-transform group-hover:translate-x-1"/>
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Profile Image with Stickers */}
                    <div className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="relative group">
                            {/* Main Image */}
                            <div className="relative z-10">
                                <img
                                    src={profileImg}
                                    alt="Baskey Koer"
                                    className="w-full max-w-[340px] md:max-w-[500px] lg:max-w-[586px] object-cover"
                                />
                            </div>

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
                                    className={`w-14 h-14 md:w-[76px] md:h-[76px] rounded-full flex items-center justify-center flex-shrink-0 ${stat.circleBg}`}
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
