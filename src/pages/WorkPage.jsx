import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WorkHero } from "../components/work/WorkHero";
import { UIUXDesign } from "../components/work/UIUXDesign";
import { SocialMedia } from "../components/work/SocialMedia";
import { ArtisticDirection } from "../components/work/ArtisticDirection";
import { Logofolio } from "../components/work/Logofolio";
import { ContactSection } from "../components/ContactSection";

export function WorkPage() {
    return (
        <div className="min-h-screen bg-portfolio-cream selection:bg-portfolio-coral selection:text-white">
            <Navbar />
            <main>
                <WorkHero />

                <div className="flex flex-col">
                    <UIUXDesign />
                    <SocialMedia />
                    <ArtisticDirection />
                    <Logofolio />
                </div>

                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
