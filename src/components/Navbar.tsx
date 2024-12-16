import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Scrolling to section: ${sectionId}`);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-[#233e5c] shadow-lg"
    >
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-semibold text-lg md:text-xl whitespace-nowrap">
            Phase 1 Research
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            <a 
              href="#impact" 
              onClick={scrollToSection('impact')}
              className="text-gray-300 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
            >
              Impact
            </a>
            <a 
              href="#team" 
              onClick={scrollToSection('team')}
              className="text-gray-300 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
            >
              Team
            </a>
            <a 
              href="#partners" 
              onClick={scrollToSection('partners')}
              className="text-gray-300 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
            >
              Partners
            </a>
            <a 
              href="#events" 
              onClick={scrollToSection('events')}
              className="text-gray-300 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
            >
              Events
            </a>
            <a 
              href="#enroll" 
              onClick={scrollToSection('enroll')}
              className="text-gray-300 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
            >
              Enroll
            </a>
            <a 
              href="#become-mentor" 
              onClick={scrollToSection('become-mentor')}
              className="text-gray-300 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
            >
              Become A Mentor
            </a>
            <a 
              href="#start-chapter" 
              onClick={scrollToSection('start-chapter')}
              className="text-gray-300 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
            >
              Start Chapter
            </a>
            <a 
              href="#contact" 
              onClick={scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#impact" 
                onClick={scrollToSection('impact')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Impact
              </a>
              <a 
                href="#team" 
                onClick={scrollToSection('team')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Team
              </a>
              <a 
                href="#partners" 
                onClick={scrollToSection('partners')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Partners
              </a>
              <a 
                href="#events" 
                onClick={scrollToSection('events')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Events
              </a>
              <a 
                href="#enroll" 
                onClick={scrollToSection('enroll')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Enroll
              </a>
              <a 
                href="#become-mentor" 
                onClick={scrollToSection('become-mentor')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Become A Mentor
              </a>
              <a 
                href="#start-chapter" 
                onClick={scrollToSection('start-chapter')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Start Chapter
              </a>
              <a 
                href="#contact" 
                onClick={scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;