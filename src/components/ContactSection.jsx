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
                        <p className="text-white font-epilogue text-lg md:text-2xl lg:text-3xl font-medium tracking-tight opacity-90 group-hover:translate-x-1 transition-transform duration-500">
                            Have a project in mind?
                        </p>

                        <h2 className="text-white font-nerko text-6xl md:text-8xl lg:text-[120px] leading-[0.9] group-hover:translate-x-2 transition-transform duration-700 delay-75">
                            <div>Contact</div>
                            <div>Me</div>
                        </h2>

                        <button className="mt-4 px-8 py-4 md:px-10 md:py-5 bg-white/10 backdrop-blur-md text-white font-epilogue text-lg md:text-xl font-semibold rounded-full hover:bg-white/20 transition-all flex items-center gap-4 border border-white/30 group/btn">
                            <span>Reach out</span>
                            <div className="bg-white rounded-full p-2 group-hover/btn:rotate-45 transition-transform duration-300">
                                <svg width="24" height="24" viewBox="0 0 50 50" fill="none">
                                    <path
                                        d="M18.7502 13.8547C18.7502 13.8547 33.205 12.724 35.2406 14.7595C37.2761 16.795 36.1452 31.2498 36.1452 31.2498M34.3752 15.6248L13.5418 36.4582"
                                        stroke="#47A7FE"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>

                    {/* Subtle grain effect on the card */}
                    <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>
            </div>
        </section>
    );
}
