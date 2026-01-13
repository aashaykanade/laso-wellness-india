
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/48bd6227-0db3-4c0b-b1c1-c2b25efe0ae6.png" 
            alt="Laso Wellness Logo" 
            className="h-16 md:h-20 mr-3" 
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="font-medium hover:text-laso-purple transition-colors">About</a>
          <a href="#services" className="font-medium hover:text-laso-purple transition-colors">Services</a>
          <a href="#results" className="font-medium hover:text-laso-purple transition-colors">Results</a>
          <a href="#testimonials" className="font-medium hover:text-laso-purple transition-colors">Testimonials</a>
          <a href="#contact" className="font-medium hover:text-laso-purple transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <a href="#contact">
            <Button className="bg-laso-purple hover:bg-laso-darkgreen text-white">
              Clinic Appointments Only
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col py-4 space-y-4 px-4">
            <a href="#about" className="font-medium hover:text-laso-purple transition-colors" onClick={toggleMenu}>About</a>
            <a href="#services" className="font-medium hover:text-laso-purple transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#results" className="font-medium hover:text-laso-purple transition-colors" onClick={toggleMenu}>Results</a>
            <a href="#testimonials" className="font-medium hover:text-laso-purple transition-colors" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" className="font-medium hover:text-laso-purple transition-colors" onClick={toggleMenu}>Contact</a>
            <a href="#contact" className="w-full" onClick={toggleMenu}>
              <Button className="bg-laso-purple hover:bg-laso-darkgreen text-white w-full">
                Book Clinic Appointment
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
