import logo from "../assets/Hero content.svg";
import footerBg from "../assets/Footer bg.svg";
import {
    Linkedin01Icon,
    InstagramIcon,
    YoutubeIcon,
    Facebook01Icon,
    ShoppingBag01Icon,
    DribbbleIcon,
    NewTwitterIcon,
    TiktokIcon
} from "hugeicons-react";
import { Link } from "react-router-dom";

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
                                {[
                                    { label: "Home", to: "/" },
                                    { label: "About", to: "/about" },
                                    { label: "My Work", to: "/works" },
                                    { label: "Contact", to: "/contact" }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link to={item.to} className="text-white/90 font-epilogue text-[15px] hover:text-portfolio-coral transition-colors duration-300">
                                            {item.label}
                                        </Link>
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
                                    <a href="https://drive.google.com/file/d/1J1WdwPOeGqv5juhCahN3NlltqNG0k3Ov/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/90 font-epilogue text-[15px] hover:text-portfolio-coral transition-colors duration-300">
                                        <ShoppingBag01Icon size={20} className="text-white/80" /> Get my CV
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.behance.net/baskeykoer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/90 font-epilogue text-[15px] hover:text-portfolio-coral transition-colors duration-300">
                                        <span className="text-white/80 font-bold gap-2 text-center text-[18px]">Bē</span> /baskeykoer
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-3 text-white/90 font-epilogue text-[15px] hover:text-portfolio-coral transition-colors duration-300">
                                        <DribbbleIcon size={20} className="text-white/80" /> /baskeykoer
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
                                    { icon: <Linkedin01Icon size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/baskeykoer" },
                                    { icon: <NewTwitterIcon size={20} />, label: "X", href: "https://x.com/baskeykoer" },
                                    { icon: <InstagramIcon size={20} />, label: "Instagram", href: "https://www.instagram.com/baskeykoer" },
                                    { icon: <YoutubeIcon size={20} />, label: "Youtube", href: "https://youtube.com/@baskeykoer" },
                                    { icon: <TiktokIcon size={20} />, label: "TikTok", href: "https://www.tiktok.com/@baskeykoer" },
                                    { icon: <Facebook01Icon size={20} />, label: "Facebook", href: "https://facebook.com/baskeykoer" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
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
