import logo from "../assets/Hero content.svg";
import footerBg from "../assets/Footer bg.svg";
import { Linkedin, Instagram, Youtube, Facebook, ShoppingBag, Dribbble } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative w-full pt-32 lg:pt-48 pb-12 px-6 overflow-hidden min-h-[1084px] lg:min-h-[696px] flex flex-col justify-end">
            {/* Wavy Top Background (Inverted About Section SVG) */}
            <div
                className="absolute top-0 left-0 right-0 w-full h-full bg-no-repeat bg-top bg-cover pointer-events-none"
                style={{ backgroundImage: `url("${footerBg}")` }}
            />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Main Content */}
                <div className="mb-12 md:mb-16 flex flex-col-reverse lg:flex-row justify-between items-start gap-12 lg:gap-24 pl-2">
                    {/* Logo Section */}
                    <div className="shrink-0 relative w-full self-start pt-6 lg:mt-0 lg:max-w-[320px]">
                        <img
                            src={logo}
                            alt="Port Folio Logo"
                            className="w-[85%] h-auto hover:scale-105 transition-transform duration-500 cursor-pointer"
                        />
                    </div>

                    {/* Navigation Columns */}
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-10 lg:gap-20 w-full mt-4">
                        {/* Menu Column */}
                        <div className="space-y-5">
                            <h3 className="text-white/50 font-epilogue text-[14px] uppercase tracking-[0.25em] font-medium">
                                Menu
                            </h3>
                            <ul className="space-y-4">
                                {["Home", "About", "Portfolio"].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="text-white/90 font-epilogue text-[15px] hover:text-portfolio-coral transition-colors duration-300">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Profile Column */}
                        <div className="space-y-5">
                            <h3 className="text-white/50 font-epilogue text-[14px] uppercase tracking-[0.25em] font-medium">
                                Profile
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="flex items-center gap-3 text-white/90 font-epilogue text-[15px] hover:text-portfolio-coral transition-colors duration-300">
                                        <ShoppingBag size={20} className="text-white/80" strokeWidth={1.5} /> Get my CV
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-3 text-white/90 font-epilogue text-[15px] hover:text-portfolio-coral transition-colors duration-300">
                                        <span className="text-white/80 font-bold inline-block w-[20px] text-center text-[18px]">Bē</span> /baskeykoer
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-3 text-white/90 font-epilogue text-[15px] hover:text-portfolio-coral transition-colors duration-300">
                                        <Dribbble size={20} className="text-white/80" strokeWidth={1.5} /> /baskeykoer
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Column */}
                        <div className="space-y-5">
                            <h3 className="text-white/50 font-epilogue text-[14px] uppercase tracking-[0.25em] font-medium">
                                Social
                            </h3>
                            <div className="grid grid-cols-3 gap-3 w-max">
                                {[
                                    { icon: <Linkedin size={20} strokeWidth={1.5} />, label: "LinkedIn" },
                                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 6L6 18M6 6l12 12" /></svg>, label: "X" },
                                    { icon: <Instagram size={20} strokeWidth={1.5} />, label: "Instagram" },
                                    { icon: <Youtube size={20} strokeWidth={1.5} />, label: "Youtube" },
                                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>, label: "TikTok" },
                                    { icon: <Facebook size={20} strokeWidth={1.5} />, label: "Facebook" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        aria-label={social.label}
                                        className="w-[54px] h-[54px] rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                                    >
                                        <span className="group-hover:scale-110 transition-transform duration-300">
                                            {social.icon}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 font-epilogue text-sm">
                        © 2026 Baskey Koer. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
