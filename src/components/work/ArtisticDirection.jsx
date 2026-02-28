import { Flyers } from "../Flyers";
import { Illustrations } from "../Illustrations";

export function ArtisticDirection() {
    return (
        <section className="w-full bg-portfolio-cream pt-16 md:pt-32 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-portfolio-dark font-nerko text-5xl md:text-7xl text-center mb-16 md:mb-32">
                    Artistic Direction
                </h2>

                <div className="space-y-24 md:space-y-32">
                    <div>
                        <div className="text-center mb-12 md:mb-24">
                            <h3 className="text-portfolio-dark font-poppins text-[40px] mb-2">
                                Flyers
                            </h3>
                            <p className="text-portfolio-dark/50 text-base md:text-lg italic">
                                2025 Edition
                            </p>
                        </div>
                        <Flyers />
                    </div>

                    <div>
                        <div className="text-center mb-12 md:mb-24">
                            <h3 className="text-portfolio-dark font-poppins text-[40px] mb-2">
                                Illustration
                            </h3>
                            <p className="text-portfolio-dark/50 text-base md:text-lg italic">
                                2025 Edition
                            </p>
                        </div>
                        <Illustrations />
                    </div>
                </div>
            </div>
        </section>
    );
}
