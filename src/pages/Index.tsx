
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AsSeenIn from "@/components/AsSeenIn";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Research from "@/components/Research";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallBar from "@/components/StickyCallBar";

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-24">
      <Navbar />
      <Hero />
      <AsSeenIn />
      <About />
      <Services />
      <CaseStudies />
      <Results />
      <Research />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
    </div>
  );
};

export default Index;
