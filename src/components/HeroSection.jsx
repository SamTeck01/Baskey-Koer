import heroContent from "../assets/Hero content.svg";
import heroBackground from "../assets/Hero Background.svg";
import heroDown from "../assets/Hero down.svg";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[766px] lg:min-h-[902px] flex items-center justify-center overflow-hidden bg-[#1E202B]">
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
                    className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] lg:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-90 lg:scale-100"
                />
            </div>

            <img src={heroDown} alt="Hero Down" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[124px] h-[120px] lg:hidden" />
        </section>
    );
}
