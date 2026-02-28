import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { WorkSection } from "../components/WorkSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export function HomePage() {
    return (
        <div className="min-h-screen bg-portfolio-cream selection:bg-portfolio-coral selection:text-white">
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <WorkSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
