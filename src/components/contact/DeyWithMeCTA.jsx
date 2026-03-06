import contactBg from "../../assets/Contact us bg.svg";
import { ArrowUpRight01Icon } from "hugeicons-react";

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
                            href="https://www.linkedin.com/in/baskeykoer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#D4614A] text-white px-10 py-5 rounded-2xl font-nerko text-2xl md:text-4xl flex items-center justify-between gap-8 hover:scale-105 transition-transform shadow-lg shadow-black/10 group/btn"
                        >
                            <span>LinkedIn</span>
                            <ArrowUpRight01Icon size={32} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                        <a
                            href="https://www.behance.net/baskeykoer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#1C1D34] text-white px-10 py-5 rounded-2xl font-nerko text-2xl md:text-4xl flex items-center justify-between gap-8 hover:scale-105 transition-transform shadow-lg shadow-black/10 group/btn"
                        >
                            <span>Behance</span>
                            <ArrowUpRight01Icon size={32} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                    </div>

                    {/* Subtle grain effect on the card */}
                    <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>
            </div>
        </section>
    );
}
