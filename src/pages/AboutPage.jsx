import { Navbar } from "../components/Navbar";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { AboutHero } from "../components/about/AboutHero";
import { AboutDetails } from "../components/about/AboutDetails";
import { AboutTestimonials } from "../components/about/AboutTestimonials";

export function AboutPage() {
    return (
        <div className="min-h-screen bg-portfolio-cream selection:bg-portfolio-coral selection:text-white">
            <Navbar />
            <main>
                <AboutHero />

                <AboutDetails />

                <AboutTestimonials />

                {/* Common Sections */}
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
