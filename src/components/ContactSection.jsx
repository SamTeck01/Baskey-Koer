export function ContactSection() {
    return (
        <section className="relative w-full bg-portfolio-cream py-32">
            <div className="max-w-7xl mx-auto px-8 w-full">
                {/* Contact Box */}
                <div className="bg-portfolio-blue rounded-4xl overflow-hidden relative h-96 flex items-end">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 bottom-0 w-1/3 overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none">
                            <path
                                d="M300 0C380 50 450 150 450 250C450 350 380 400 300 400V0Z"
                                fill="#EF6D58"
                                opacity="0.8"
                            />
                        </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-12 max-w-2xl">
                        <h2 className="text-portfolio-cream font-nerko text-6xl mb-8 leading-tight">
                            Contact Me
                        </h2>
                        <p className="text-portfolio-cream text-lg font-poppins mb-8 opacity-90">
                            Have a project in mind? Let's create something amazing together.
                        </p>
                        <button className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-portfolio-cream font-poppins font-semibold rounded-full hover:bg-opacity-30 transition-all inline-flex items-center gap-3 border border-white border-opacity-20">
                            <span>Reach out</span>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="flex-shrink-0">
                                <path
                                    d="M18.7502 13.8547C18.7502 13.8547 33.205 12.724 35.2406 14.7595C37.2761 16.795 36.1452 31.2498 36.1452 31.2498M34.3752 15.6248L13.5418 36.4582"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Decorative face/mascot on right */}
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-portfolio-coral rounded-full opacity-80 flex items-center justify-center">
                        <div className="text-6xl">😊</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
