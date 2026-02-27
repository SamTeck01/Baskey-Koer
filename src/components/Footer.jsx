import logo from "../assets/Hero content.svg";
import footerBg from "../assets/About section First part bg.svg";
import { Linkedin, Twitter, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative w-full pt-48 pb-12 px-8 overflow-hidden min-h-[696px] flex flex-col justify-end">
            {/* Wavy Top Background (Inverted About Section SVG) */}
            <div
                className="absolute top-0 left-0 right-0 w-full h-full bg-no-repeat bg-bottom bg-cover pointer-events-none scale-y-[-1]"
                style={{ backgroundImage: `url("${footerBg}")` }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Content */}
                <div className="mb-16 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
                    {/* Logo Section */}
                    <div className="shrink-0">
                        <img
                            src={logo}
                            alt="Port Folio Logo"
                            className="h-32 md:h-40 w-auto hover:scale-105 transition-transform duration-500 cursor-pointer"
                        />
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20 grow">
                        {/* Menu Column */}
                        <div className="space-y-6">
                            <h3 className="text-white/40 font-epilogue text-sm uppercase tracking-[0.2em] font-semibold">
                                Menu
                            </h3>
                            <ul className="space-y-4">
                                {["Home", "About", "Portfolio"].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="text-white font-epilogue text-lg hover:text-portfolio-coral transition-colors duration-300">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Profile Column */}
                        <div className="space-y-6">
                            <h3 className="text-white/40 font-epilogue text-sm uppercase tracking-[0.2em] font-semibold">
                                Profile
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="flex items-center gap-3 text-white font-epilogue text-lg hover:text-portfolio-coral transition-colors duration-300">
                                        <span className="opacity-60">👤</span> Get my CV
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-3 text-white font-epilogue text-lg hover:text-portfolio-coral transition-colors duration-300">
                                        <span className="opacity-60">Be</span> /baskeykoer
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-3 text-white font-epilogue text-lg hover:text-portfolio-coral transition-colors duration-300">
                                        <span className="opacity-60">🎨</span> /baskeykoer
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Column */}
                        <div className="space-y-6 col-span-2 md:col-span-1">
                            <h3 className="text-white/40 font-epilogue text-sm uppercase tracking-[0.2em] font-semibold">
                                Social
                            </h3>
                            <div className="flex flex-wrap items-center gap-4">
                                {[
                                    { icon: <Linkedin size={20} />, label: "LinkedIn" },
                                    { icon: <Twitter size={20} />, label: "X" },
                                    { icon: <Instagram size={20} />, label: "Instagram" },
                                    { icon: <Youtube size={20} />, label: "Youtube" },
                                    { icon: <Facebook size={20} />, label: "Facebook" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        aria-label={social.label}
                                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
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
