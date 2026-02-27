import contactBg from "../assets/Contact us bg.svg";

export function ContactSection() {
    return (
        <section className="relative w-full mb-[-106px] overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                {/* Contact Card */}
                <div
                    className="relative w-full aspect-1212/500 min-h-[300px] md:min-h-[450px] lg:min-h-[500px] rounded-[40px] overflow-hidden bg-portfolio-blue flex items-center shadow-xl transform hover:scale-[1.01] transition-transform duration-500 group"
                    style={{
                        backgroundImage: `url("${contactBg}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Content Overlay */}
                    <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col items-start gap-4 md:gap-8">
                        <p className="text-white font-epilogue text-sm md:text-2xl lg:text-3xl font-medium tracking-tight opacity-90 group-hover:translate-x-1 transition-transform duration-500">
                            Have a project in mind?
                        </p>

                        <h2 className="text-white font-nerko text-[64px] md:text-8xl lg:text-[120px] leading-[0.8] group-hover:translate-x-2 transition-transform duration-700 delay-75 mt-1">
                            <div>Contact</div>
                            <div>Me</div>
                        </h2>

                        <button className="mt-4 px-4 py-1.5 bg-white/10 backdrop-blur-md text-white/90 font-epilogue text-xs md:text-xl font-medium rounded-full hover:bg-white/20 transition-all flex items-center gap-2 border border-white/20 group/btn">
                            <span>Reach out</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300">
                                <path
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Subtle grain effect on the card */}
                    <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>
            </div>
        </section>
    );
}
