import { useState } from "react";
import heroBg from "../../assets/about hero on mobile.svg";
import { ContactInfo } from "./ContactInfo";

export function ContactHero() {
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        projectInfo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add submission logic here
    };

    return (
        <section className="relative w-full min-h-fit lg:min-h-[1252px] pt-[50px] pb-[100px]">
            {/* Split Background */}
            <div className="absolute inset-0 flex flex-col pointer-events-none">
                <div
                    className="h-[70%] lg:h-[70%] min-w-full bg-bottom"
                    style={{ backgroundImage: `url("${heroBg}")` }}
                />
                <div className="h-[40%] lg:h-[30%] w-full bg-portfolio-cream" />
            </div>

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pt-16 md:pt-40 pb-10 md:pb-16 flex flex-col justify-between min-h-screen lg:min-h-[1252px] gap-10 md:gap-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
                    {/* Left Content: Title & Subtitle */}
                    <div className="flex flex-col gap-6 md:gap-8 mt-12 lg:-mt-20">
                        <h1 className="text-white font-nerko text-[60px] lg:text-[100px] leading-[1.1] uppercase">
                            Let's Work<br />Together !
                        </h1>
                        <p className="text-white/80 font-epilogue text-[16px] md:text-xl lg:text-2xl max-w-lg leading-relaxed">
                            Interested in working together or just want to say hello? I'd love to hear from you.
                        </p>
                    </div>

                    {/* Right Content: Form Card */}
                    <div className="w-full lg:w-[480px] bg-white rounded-[7px] p-[40px] shadow-2xl relative z-10 mt-12 lg:mt-0 ">
                        <h2 className="text-portfolio-dark font-poppins text-[32px] mb-8 uppercase tracking-tight">
                            Get In Touch
                        </h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="space-y-1.5">
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    className="w-full h-[48px] px-6 rounded-xl border border-portfolio-dark/10 focus:border-portfolio-coral focus:outline-none font-epilogue text-portfolio-dark transition-colors bg-white"
                                    required
                                />
                            </div>
                            <div className="space-y-1.5">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-[48px] px-6 rounded-xl border border-portfolio-dark/10 focus:border-portfolio-coral focus:outline-none font-epilogue text-portfolio-dark transition-colors bg-white"
                                    required
                                />
                            </div>
                            <div className="space-y-1.5">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-[48px] px-6 rounded-xl border border-portfolio-dark/10 focus:border-portfolio-coral focus:outline-none font-epilogue text-portfolio-dark transition-colors bg-white"
                                    required
                                />
                            </div>
                            <div className="space-y-1.5">
                                <textarea
                                    name="projectInfo"
                                    placeholder="Project info"
                                    value={formData.projectInfo}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-6 py-4 h-[119px] rounded-xl border border-portfolio-dark/10 focus:border-portfolio-coral focus:outline-none font-epilogue text-portfolio-dark transition-colors resize-none bg-white"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="h-[50px] mt-2 w-full md:w-[210px] rounded-full bg-portfolio-coral text-white font-epilogue text-lg hover:bg-portfolio-coral/90 transition-all shadow-lg shadow-portfolio-coral/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                            >
                                <span>Send Message</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    <path
                                        d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8925 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <ContactInfo />
            </div>

        </section>
    );
}
