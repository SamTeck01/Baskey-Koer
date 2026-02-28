import { Navbar } from "../components/Navbar";
import { ContactHero } from "../components/contact/ContactHero";
import { AboutTestimonials } from "../components/about/AboutTestimonials";
import { DeyWithMeCTA } from "../components/contact/DeyWithMeCTA";
import { Footer } from "../components/Footer";

const ContactPage = () => {
    return (
        <div className="bg-portfolio-cream min-h-screen">
            <Navbar />
            <ContactHero />
            <AboutTestimonials />
            <DeyWithMeCTA />
            <Footer />
        </div>
    );
};

export default ContactPage;
