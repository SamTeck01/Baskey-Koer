export function Footer() {
    return (
        <footer className="relative w-full bg-portfolio-dark pt-20 pb-12 px-8 overflow-hidden">
            {/* Decorative wavy background */}
            <svg
                className="absolute top-0 left-0 right-0 w-full h-32 text-portfolio-dark"
                viewBox="0 0 1512 300"
                fill="currentColor"
                preserveAspectRatio="none"
            >
                <path d="M0,100 Q378,0 756,100 T1512,100 L1512,300 L0,300 Z" />
            </svg>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Logo and main info */}
                <div className="mb-16 flex flex-col lg:flex-row justify-between items-start gap-12">
                    <div className="flex-1">
                        <h2 className="text-portfolio-cream font-nerko text-6xl mb-6">
                            <div>Port</div>
                            <div>Folio</div>
                        </h2>
                    </div>

                    {/* Navigation columns */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 flex-1">
                        {/* Menu */}
                        <div>
                            <p className="text-portfolio-cream opacity-70 font-poppins text-sm uppercase tracking-widest mb-6">
                                Menu
                            </p>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-portfolio-cream font-poppins hover:opacity-70 transition-opacity">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-portfolio-cream font-poppins hover:opacity-70 transition-opacity">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-portfolio-cream font-poppins hover:opacity-70 transition-opacity">
                                        Portfolio
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Profile */}
                        <div>
                            <p className="text-portfolio-cream opacity-70 font-poppins text-sm uppercase tracking-widest mb-6">
                                Profile
                            </p>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-portfolio-cream font-poppins hover:opacity-70 transition-opacity flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path
                                                d="M3.74984 7.91699H3.33317C2.5475 7.91699 2.15466 7.91699 1.91058 8.16107C1.6665 8.40516 1.6665 8.79799 1.6665 9.58366V16.667C1.6665 17.4527 1.6665 17.8455 1.91058 18.0896C2.15466 18.3337 2.5475 18.3337 3.33317 18.3337H3.74984C4.53551 18.3337 4.92835 18.3337 5.17243 18.0896C5.4165 17.8455 5.4165 17.4527 5.4165 16.667V9.58366C5.4165 8.79799 5.4165 8.40516 5.17243 8.16107C4.92835 7.91699 4.53551 7.91699 3.74984 7.91699Z"
                                                stroke="currentColor"
                                            />
                                            <path
                                                d="M5.4165 3.54199C5.4165 4.57753 4.57704 5.41699 3.5415 5.41699C2.50597 5.41699 1.6665 4.57753 1.6665 3.54199C1.6665 2.50646 2.50597 1.66699 3.5415 1.66699C4.57704 1.66699 5.4165 2.50646 5.4165 3.54199Z"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                        Get my CV
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <p className="text-portfolio-cream opacity-70 font-poppins text-sm uppercase tracking-widest mb-6">
                                Social
                            </p>
                            <div className="flex items-center gap-4 flex-wrap">
                                <a href="#" className="w-12 h-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-portfolio-cream">
                                        <path
                                            d="M3.74984 7.91699H3.33317C2.5475 7.91699 2.15466 7.91699 1.91058 8.16107C1.6665 8.40516 1.6665 8.79799 1.6665 9.58366V16.667C1.6665 17.4527 1.6665 17.8455 1.91058 18.0896C2.15466 18.3337 2.5475 18.3337 3.33317 18.3337H3.74984C4.53551 18.3337 4.92835 18.3337 5.17243 18.0896C5.4165 17.8455 5.4165 17.4527 5.4165 16.667V9.58366C5.4165 8.79799 5.4165 8.40516 5.17243 8.16107C4.92835 7.91699 4.53551 7.91699 3.74984 7.91699Z"
                                            stroke="currentColor"
                                            strokeWidth="1.25"
                                        />
                                    </svg>
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-portfolio-cream">
                                        <path
                                            d="M2.5 17.5L8.79033 11.2097M8.79033 11.2097L2.5 2.5H6.66667L11.2097 8.79033M8.79033 11.2097L13.3333 17.5H17.5L11.2097 8.79033M17.5 2.5L11.2097 8.79033"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.25"
                                        />
                                    </svg>
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-portfolio-cream">
                                        <path
                                            d="M2.0835 9.99967C2.0835 6.26772 2.0835 4.40175 3.24286 3.24237C4.40224 2.08301 6.26821 2.08301 10.0002 2.08301C13.7321 2.08301 15.5981 2.08301 16.7575 3.24237C17.9168 4.40175 17.9168 6.26772 17.9168 9.99967C17.9168 13.7316 17.9168 15.5976 16.7575 16.757C15.5981 17.9163 13.7321 17.9163 10.0002 17.9163C6.26821 17.9163 4.40224 17.9163 3.24286 16.757C2.0835 15.5976 2.0835 13.7316 2.0835 9.99967Z"
                                            stroke="currentColor"
                                            strokeWidth="1.25"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10Z"
                                            stroke="currentColor"
                                            strokeWidth="1.25"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom divider and copyright */}
                <div className="border-t border-portfolio-cream border-opacity-20 pt-8">
                    <p className="text-portfolio-cream text-opacity-50 font-poppins text-center text-sm">
                        © 2026 Baskey Koer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
