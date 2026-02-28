import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
    const contactCards = [
        {
            label: "EMail",
            value: "baskeykoer@gmail.com",
            circleBg: "bg-portfolio-coral", // Soft coral/peach
            icon: <Mail className="text-portfolio-cream" size={32} />
        },
        {
            label: "Phone",
            value: (
                <div className="flex flex-col gap-2">
                    <span>+234 813 892 7486</span>
                    <span>+234 805 093 8686</span>
                </div>
            ),
            circleBg: "bg-portfolio-coral", // Soft blue
            icon: <Phone className="text-portfolio-cream" size={32} />
        },
        {
            label: "Address",
            value: "Ibadan, Oyo state , Nigeria.",
            circleBg: "bg-portfolio-coral", // Using similar theme
            icon: <MapPin className="text-portfolio-cream" size={32} />
        }
    ];

    return (
        <section className="mt-10 w-full rounded-[22px] border-[1.5px] border-[#F3D1BF] bg-transparent lg:mt-0 md:h-[178px] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y-[1.5px] md:divide-y-0 md:divide-x-[1.5px] divide-[#F3D1BF]">
                {contactCards.map((card, i) => (
                    <div
                        key={i}
                        className="flex flex-col p-[28px] gap-6 items-start"
                    >
                        {/* Text Content */}
                        <div className="flex flex-row items-center gap-4">
                            {/* Icon Circle (matching AboutHero stats) */}
                            <div
                                className={`w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0 ${card.circleBg}`}
                            >
                                <div className="scale-80">
                                    {card.icon}
                                </div>
                            </div>

                            <p className="font-poppins text-[15px] text-dark/70 ">
                                {card.label}
                            </p>
                        </div>

                        <div className="font-epilogue text-[20px] text-black leading-tight">
                            {card.value}
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}
