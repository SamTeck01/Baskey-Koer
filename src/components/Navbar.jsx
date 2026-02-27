import { useState } from "react";
import { Link } from "react-router-dom";
import heroBackground from "../assets/Hero Background.svg";

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
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
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
                <div className="fixed inset-0 z-50 bg-portfolio-dark lg:hidden">
                    {/* Close button */}
                    <div className="absolute top-8 right-8">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-portfolio-cream hover:opacity-70 transition-opacity"
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path
                                    d="M24 8L8 24M8 8L24 24"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Content */}
                    <div className="h-full flex flex-col items-center justify-center gap-12 px-6">
                        {/* Logo */}
                        <h1 className="text-portfolio-cream text-3xl font-light mb-8">Baskey Koer</h1>

                        {/* Navigation Links */}
                        <div className="flex flex-col items-center gap-8">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-portfolio-cream font-epilogue font-medium text-xl flex items-center gap-3"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M3 9L12 3L21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Home
                            </Link>

                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-portfolio-cream font-epilogue font-medium text-xl flex items-center gap-3"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13ZM12 13C8.67868 13 6 14.7909 6 17V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V17C18 14.7909 15.3213 13 12 13Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                About
                            </Link>

                            <Link
                                to="/portfolio"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-portfolio-cream font-epilogue font-medium text-xl flex items-center gap-3"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                My Work
                            </Link>
                        </div>

                        {/* Contact Me Button - Prominent in mobile */}
                        <button className="mt-8 px-12 py-3 bg-portfolio-coral rounded-full text-white font-epilogue font-medium text-lg flex items-center gap-2 hover:bg-opacity-90 transition-all">
                            <span>Contact Me</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M7.49968 5.54193C7.49968 5.54193 13.2816 5.08966 14.0958 5.90386C14.9101 6.71806 14.4577 12.5 14.4577 12.5M13.7497 6.25L5.41634 14.5833"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* Resume Download Button */}
                        <button className="px-12 py-3 border-2 border-portfolio-cream rounded-full text-portfolio-cream font-epilogue font-medium text-lg flex items-center gap-2 hover:bg-portfolio-cream hover:bg-opacity-10 transition-all">
                            <span>Resume</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M10 2V14M10 14L5 9M10 14L15 9M2 18H18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* Portfolio Logo at bottom */}
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                            <div className="text-portfolio-cream font-nerko text-3xl">
                                <div>Port</div>
                                <div>Folio</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
