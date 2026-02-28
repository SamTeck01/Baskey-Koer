import contactBg from "../../assets/Contact us bg.svg";

export function DeyWithMeCTA() {
    return (
        <section className="relative w-full mb-[-120px] overflow-hidden z-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto w-full">
                {/* Contact Card */}
                <div
                    className="relative w-full min-h-[350px] md:min-h-[450px] lg:min-h-[500px] rounded-[40px] overflow-hidden bg-portfolio-blue flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-12 shadow-xl transform hover:scale-[1.01] transition-transform duration-500 group"
                >
                    {/* Heading Side */}
                    <div className="relative z-10 flex flex-col items-start gap-2">
                        <h2 className="text-white font-nerko text-[64px] md:text-8xl lg:text-[140px] leading-[0.85] group-hover:translate-x-2 transition-transform duration-700">
                            <div>Dey</div>
                            <div>with Me</div>
                        </h2>
                    </div>

                    {/* Buttons Side */}
                    <div className="relative z-10 flex flex-col gap-4 mt-12 md:mt-0 w-full md:w-auto">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="bg-[#D4614A] text-white px-10 py-5 rounded-2xl font-nerko text-2xl md:text-4xl flex items-center justify-between gap-8 hover:scale-105 transition-transform shadow-lg shadow-black/10 group/btn"
                        >
                            <span>LinkedIn</span>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a
                            href="https://behance.net"
                            target="_blank"
                            className="bg-[#1C1D34] text-white px-10 py-5 rounded-2xl font-nerko text-2xl md:text-4xl flex items-center justify-between gap-8 hover:scale-105 transition-transform shadow-lg shadow-black/10 group/btn"
                        >
                            <span>Behance</span>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Subtle grain effect on the card */}
                    <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>
            </div>
        </section>
    );
}
