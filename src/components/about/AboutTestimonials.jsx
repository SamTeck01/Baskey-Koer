import { useState, useRef, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

export function AboutTestimonials() {
    const testimonials = [
        {
            rating: 5,
            text: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your b",
            author: "Alan Martí",
            company: "Meta Inc.",
            image: "https://i.pravatar.cc/150?u=alan" // Placeholder for avatar
        },
        {
            rating: 5,
            text: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
            author: "Alan Martí",
            company: "Meta Inc.",
            image: "https://i.pravatar.cc/150?u=alan2" // Placeholder for avatar
        },
        {
            rating: 5,
            text: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your b.",
            author: "Alan Martí",
            company: "Meta Inc.",
            image: "https://i.pravatar.cc/150?u=alan3" // Placeholder for avatar
        }
    ];

    const [activeIndex, setActiveIndex] = useState(1);
    const scrollRef = useRef(null);

    // Sync active index with scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                const scrollLeft = container.scrollLeft;
                const width = container.offsetWidth;
                const items = container.children;

                let minDistance = Infinity;
                let candidateIndex = activeIndex;

                for (let i = 0; i < items.length; i++) {
                    const itemCenter = items[i].offsetLeft + items[i].offsetWidth / 2;
                    const containerCenter = scrollLeft + width / 2;
                    const distance = Math.abs(itemCenter - containerCenter);

                    if (distance < minDistance) {
                        minDistance = distance;
                        candidateIndex = i;
                    }
                }

                if (candidateIndex !== activeIndex) {
                    setActiveIndex(candidateIndex);
                }
            }
        };

        const current = scrollRef.current;
        if (current) {
            current.addEventListener("scroll", handleScroll, { passive: true });
        }
        return () => current?.removeEventListener("scroll", handleScroll);
    }, [activeIndex]);

    const scrollTo = (index) => {
        if (scrollRef.current && scrollRef.current.children[index]) {
            scrollRef.current.children[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    };

    return (
        <section id="testimonials" className="w-full bg-portfolio-cream py-16 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 lg:mb-16 gap-6">
                    <h2 className="text-portfolio-dark font-nerko text-4xl lg:text-[56px] font-normal max-w-sm">
                        What My<br />Clients Saying
                    </h2>

                    {/* Navigation Arrows (Desktop) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            onClick={() => scrollTo(activeIndex > 0 ? activeIndex - 1 : 0)}
                            className="w-10 h-10 rounded-full border border-[#d1d1d1] flex items-center justify-center text-[#888888] hover:bg-portfolio-dark hover:text-white hover:border-portfolio-dark transition-colors"
                        >
                            <ArrowLeft size={18} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => scrollTo(activeIndex < 2 ? activeIndex + 1 : 2)}
                            className="w-10 h-10 rounded-full border border-[#d1d1d1] flex items-center justify-center text-[#888888] hover:bg-portfolio-dark hover:text-white hover:border-portfolio-dark transition-colors"
                        >
                            <ArrowRight size={18} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Cards Container */}
                <div
                    ref={scrollRef}
                    className="flex flex-nowrap lg:grid lg:grid-cols-3 overflow-x-auto pb-8 snap-x snap-mandatory lg:pb-0 hide-scrollbar px-6 lg:mx-0 lg:px-0 lg:max-w-6xl mx-auto items-start justify-center relative z-10"
                >
                    {testimonials.map((item, index) => {
                        const isCenter = index === activeIndex;

                        // Dynamic rounded corners based on index position
                        let roundedCorners = 'rounded-[0_0_12px_12px]'; // Center card
                        if (index === 0) roundedCorners = 'rounded-bl-[12px] rounded-br-[0px] rounded-t-[0px]'; // Left card: bottom-left curved
                        if (index === 2) roundedCorners = 'rounded-br-[12px] rounded-bl-[0px] rounded-t-[0px]'; // Right card: bottom-right curved

                        return (
                            <div
                                key={index}
                                className={`min-w-[404px] w-[85vw] lg:w-auto lg:min-w-0 p-8 flex flex-col snap-center ${roundedCorners}
                                ${isCenter ?
                                        'bg-white z-10 p-[50px] gap-[40px] h-[432px] w-[404px]' :
                                        'bg-transparent border-2 border-portfolio-coral/20 z-0 p-[50px] gap-[40px] h-[360px]'
                                    }`}
                            >
                                {/* Stars */}
                                <div className="flex items-center gap-1.5 lg:gap-2">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={isCenter ? 24 : 20} className="text-[#FFC107] fill-[#FFC107]" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className={`font-epilogue text-[15px] leading-[1.8] grow ${isCenter ? 'text-[#666666]' : 'text-[#888888]'}`}>
                                    {item.text}
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 mt-2">
                                    <img
                                        src={item.image}
                                        alt={item.author}
                                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover bg-gray-100"
                                    />
                                    <div className="flex flex-col">
                                        <span className={`font-epilogue font-bold text-base lg:text-lg leading-tight ${isCenter ? 'text-portfolio-dark' : 'text-[#555555] font-semibold'}`}>
                                            {item.author}
                                        </span>
                                        <span className={`font-epilogue text-[14px] lg:text-[15px] mt-0.5 ${isCenter ? 'text-[#888888]' : 'text-[#888888]'}`}>
                                            {item.company}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile Pagination & Navigation */}
                <div className="flex lg:hidden items-center justify-center gap-4 mt-10">
                    <button
                        onClick={() => scrollTo(activeIndex > 0 ? activeIndex - 1 : 0)}
                        className={`transition-all duration-300 ${activeIndex === 0 ? 'opacity-20' : 'opacity-100'}`}
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft size={16} className="text-portfolio-coral" />
                    </button>

                    <div className="flex items-center gap-2">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 transition-all duration-300 transform rotate-45 ${i === activeIndex ? 'bg-portfolio-coral' : 'border border-[#d1d1d1] bg-transparent'}`}
                            ></div>
                        ))}
                    </div>

                    <button
                        onClick={() => scrollTo(activeIndex < 2 ? activeIndex + 1 : 2)}
                        className={`transition-all duration-300 ${activeIndex === 2 ? 'opacity-20' : 'opacity-100'}`}
                        aria-label="Next testimonial"
                    >
                        <ArrowRight size={16} className="text-portfolio-coral" />
                    </button>
                </div>

            </div>
        </section>
    );
}
