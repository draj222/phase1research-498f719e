import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#335c84]">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-white bg-white/10 rounded-full">
            Empowering Through Education
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transforming Education Through Mentorship
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Forge your path to academic excellence through personalized mentorship from leading T20 university scholars and industry experts. Develop cutting-edge research skills, unlock your potential, and join a global community of innovative thinkers and future leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#335c84] hover:bg-white/90 transition-all duration-300 px-8 py-3 rounded-lg font-semibold">
              Start Your Research Journey
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 px-8 py-3 rounded-lg font-semibold">
              Share Your Expertise
            </button>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </section>
  );
};

export default Hero;