
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-laso-darkgreen text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Laso Wellness</h3>
            <p className="mb-4 text-gray-200">
              Transformative Energy Healing and Allied Therapies for chronic conditions and overall wellness.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#results" className="text-gray-200 hover:text-white transition-colors">Results & Research</a></li>
              <li><a href="#testimonials" className="text-gray-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/blog" className="text-gray-200 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Laso Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
