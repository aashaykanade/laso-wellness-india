
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05041a]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/48bd6227-0db3-4c0b-b1c1-c2b25efe0ae6.png" 
            alt="Laso Wellness Logo" 
            className="h-16 md:h-20 mr-3" 
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-9">
          {[
            { href: "/#about", label: "About" },
            { href: "/#services", label: "Practice" },
            { href: "/#results", label: "Results" },
            { href: "/#testimonials", label: "Testimonials" },
            { href: "/blog", label: "Journal" },
            { href: "/#contact", label: "Contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.28em] text-[hsl(var(--ivory))]/75 hover:text-[hsl(var(--gold))] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="btn-gold">
            By Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[hsl(var(--ivory))]/80" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0714]/95 backdrop-blur-xl border-t border-[hsl(var(--gold))]/20 shadow-2xl">
          <div className="flex flex-col py-6 space-y-5 px-6">
            {[
              { href: "/#about", label: "About" },
              { href: "/#services", label: "Practice" },
              { href: "/#results", label: "Results" },
              { href: "/#testimonials", label: "Testimonials" },
              { href: "/blog", label: "Journal" },
              { href: "/#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={toggleMenu}
                className="text-[11px] uppercase tracking-[0.28em] text-[hsl(var(--ivory))]/80 hover:text-[hsl(var(--gold))] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold w-full justify-center" onClick={toggleMenu}>
              By Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
