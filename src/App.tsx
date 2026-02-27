import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { WorkSection } from "./components/WorkSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
