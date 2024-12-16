import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Scrolling to section: ${sectionId}`);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-[#233e5c] shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-semibold text-xl">
            Phase 1 Research
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;