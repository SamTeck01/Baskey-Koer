import heroContent from "../assets/Hero content.svg";
import heroBackground from "../assets/Hero Background.svg";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[902px] flex items-center justify-center overflow-hidden bg-[#1E202B]">
            {/* Global Hero Background SVG */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBackground}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center select-none w-full max-w-[841px] px-4">
                {/* Figma Exported SVG Content */}
                <img
                    src={heroContent}
                    alt="Hero Content"
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
            </div>

            {/* --- Scroll Indicator (Bottom Center) --- */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer z-20">
                <div className="animate-bounce">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
