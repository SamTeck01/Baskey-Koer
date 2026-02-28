import { useState } from "react";
import { Link } from "react-router-dom";
import heroBackground from "../assets/Hero Background.svg";
import portfolioLogo from "../assets/Hero content.svg";
import { Home, User, ShoppingBag, ArrowUpRight, Download, X } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Navbar with Hero Background */}
            <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] lg:h-[80px] overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBackground}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 h-full px-6 lg:px-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-portfolio-cream font-rockybilly text-[17px] font-normal leading-[1.3] font-features-['liga'_off,'clig'_off] hover:opacity-80 transition-opacity mt-4"
                    >
                        Baskey Koer
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link
                            to="/"
                            className="text-portfolio-cream font-epilogue font-medium text-base h-10 px-3 flex items-center pb-1 border-b-2 border-portfolio-coral"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-portfolio-cream font-epilogue font-medium text-base h-10 px-3 flex items-center hover:border-b-2 hover:border-portfolio-coral transition-all"
                        >
                            About
                        </Link>
                        <Link
                            to="/portfolio"
                            className="text-portfolio-cream font-epilogue font-medium text-base h-10 px-3 flex items-center hover:border-b-2 hover:border-portfolio-coral transition-all"
                        >
                            My Work
                        </Link>
                        <Link
                            to="/resume"
                            className="text-portfolio-cream font-epilogue font-medium text-base h-10 px-3 flex items-center hover:border-b-2 hover:border-portfolio-coral transition-all"
                        >
                            Resume
                        </Link>
                    </div>

                    {/* Contact Button */}
                    <button className="hidden lg:flex items-center gap-1.5 px-6 h-10 rounded-full border border-border hover:bg-portfolio-cream hover:bg-opacity-10 transition-all text-portfolio-cream text-base font-epilogue font-medium">
                        <span>Contact Me</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                            <path
                                d="M7.49968 5.54193C7.49968 5.54193 13.2816 5.08966 14.0958 5.90386C14.9101 6.71806 14.4577 12.5 14.4577 12.5M13.7497 6.25L5.41634 14.5833"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden text-portfolio-cream hover:opacity-70 transition-opacity"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 6H21M3 12H21M3 18H21"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Modal - 100% width overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden overflow-y-auto w-full max-h-[750px] overflow-scroll">
                    {/* Background SVG */}
                    <div
                        className="absolute inset-0 z-0 bg-repeat bg-center pointer-events-none h-[750px] w-full bg-cover"
                        style={{
                            backgroundImage: `url("${heroBackground}")`,
                        }}
                    />

                    <div className="relative z-10 min-h-full flex flex-col p-6 max-w-md mx-auto">
                        {/* Header: Logo and Close button */}
                        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 mt-2">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white font-rockybilly text-[17px] font-normal leading-none"
                            >
                                Baskey Koer
                            </Link>

                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="w-[42px] h-[42px] rounded-xl border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X size={20} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col w-full px-2">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 text-white font-epilogue font-medium text-[16px] pb-5 border-b-2 border-portfolio-coral/60 mb-6"
                            >
                                <Home size={22} strokeWidth={1.5} className="text-white" />
                                Home
                            </Link>

                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 text-white font-epilogue font-medium text-[16px] pb-5 mb-6"
                            >
                                <User size={22} strokeWidth={1.5} className="text-white" />
                                About
                            </Link>

                            <Link
                                to="/portfolio"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 text-white font-epilogue font-medium text-[16px] pb-5 mb-8"
                            >
                                <ShoppingBag size={22} strokeWidth={1.5} className="text-white" />
                                My Work
                            </Link>

                            {/* Buttons */}
                            <div className="flex flex-col gap-4 mt-2">
                                <button className="w-full h-[52px] bg-portfolio-coral rounded-full text-white font-epilogue font-medium text-[16px] flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                                    Contact Me
                                    <ArrowUpRight size={20} className="text-white" strokeWidth={1.5} />
                                </button>

                                <button className="w-full h-[52px] bg-white/5 border border-white/10 rounded-full text-white font-epilogue font-medium text-[16px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm">
                                    Resume
                                    <Download size={20} className="text-white" strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>

                        {/* Bottom Logo */}
                        <div className="mt-auto pt-16 pb-4 flex justify-center w-full">
                            <div className="relative w-full max-w-[280px]">
                                <img
                                    src={portfolioLogo}
                                    alt="Port Folio Logo"
                                    className="w-[90%] mx-auto h-auto"
                                />
                                <div className="absolute -bottom-2 right-0 bg-[#47A7FE] px-5 py-1.5 rounded-full text-white font-epilogue font-medium text-[13px] tracking-wide z-10 border border-white/10">
                                    Baskey Koer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
