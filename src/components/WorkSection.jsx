export function WorkSection() {
    return (
        <section className="w-full bg-portfolio-cream py-32 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-portfolio-dark font-nerko text-7xl text-center mb-32">
                    My Work
                </h2>

                {/* Project 1: Cloudora */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-start">
                    {/* Project Info */}
                    <div className="flex flex-col gap-12">
                        <div className="space-y-2">
                            <h3 className="text-portfolio-dark font-poppins text-4xl font-medium">
                                Cloudora
                            </h3>
                            <p className="text-portfolio-dark text-opacity-70 font-poppins text-base italic">
                                Published: October 2025.
                            </p>
                        </div>

                        <p className="text-portfolio-dark text-opacity-70 font-poppins text-lg leading-relaxed">
                            A cloud storage platform designed to solve cluttered and inefficient file management
                            by creating a clean, accessible cloud storage experience with intuitive organization flows.
                        </p>

                        <button className="h-12 px-6 rounded-lg border border-portfolio-dark border-opacity-30 hover:bg-portfolio-dark hover:bg-opacity-5 transition-all text-portfolio-dark font-poppins font-medium inline-flex items-center gap-3 self-start">
                            <span>View Case Study</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                                <path
                                    d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8925 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Project Images Grid */}
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/ca29adb1498818c09087d1a3e59f605ba2641582?width=788"
                                alt="Cloudora 1"
                                className="w-full h-56 object-cover rounded-lg"
                            />
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/73b2f52b611cb6d702c4b725af551a220e3fe386?width=788"
                                alt="Cloudora 2"
                                className="w-full h-56 object-cover rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-3 h-40">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/452e9a3b6a2a501d4b910d44ad6f3bd31c893c21?width=588"
                                alt="Cloudora 3"
                                className="col-span-1 w-full h-full object-cover rounded-lg"
                            />
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/6ab16e4afd8baaebd90c2ce5e5744208751af708?width=988"
                                alt="Cloudora 4"
                                className="col-span-2 w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-3 h-40">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/50e7a8cb6a72e0d796a7ca0e90e0d65b5eea9187?width=517"
                                alt="Cloudora 5"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/02ed94d89a85eb573de2d4e9e43bce8d372206f3?width=517"
                                alt="Cloudora 6"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/f9f06284238eb5787ace70db8cb871105a763f33?width=517"
                                alt="Cloudora 7"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Project 2: BilleyPay */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Project Info */}
                    <div className="flex flex-col gap-12">
                        <div className="space-y-2">
                            <h3 className="text-portfolio-dark font-poppins text-4xl font-medium">
                                BilleyPay
                            </h3>
                            <p className="text-portfolio-dark text-opacity-70 font-poppins text-base italic">
                                Created: December 2025.
                            </p>
                        </div>

                        <p className="text-portfolio-dark text-opacity-70 font-poppins text-lg leading-relaxed">
                            A fintech platform built to reduce financial stress by helping users manage bills, save ahead,
                            join group contributions, and create virtual dollar cards within one seamless platform.
                        </p>

                        <button className="h-12 px-6 rounded-lg border border-portfolio-dark border-opacity-30 hover:bg-portfolio-dark hover:bg-opacity-5 transition-all text-portfolio-dark font-poppins font-medium inline-flex items-center gap-3 self-start">
                            <span>View Figma File</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                                <path
                                    d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8925 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Project Images */}
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-portfolio-green rounded-lg h-56 flex items-center justify-center">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/c5b398f1735fa1e72a0df2d6df1827d6ffca7d44?width=320"
                                    alt="BilleyPay Phone"
                                    className="h-64 object-contain"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="bg-gray-900 rounded-lg h-20 flex items-center justify-center">
                                    <span className="text-white font-poppins text-lg font-semibold">BilleyPay</span>
                                </div>
                                <div className="bg-gray-100 rounded-lg h-32" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 h-40">
                            <div className="bg-portfolio-green rounded-lg" />
                            <div className="bg-gray-100 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
