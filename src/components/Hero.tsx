import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-light/10 to-white">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-primary-dark bg-primary-light/10 rounded-full">
            Empowering Through Education
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary">
            Transforming Education Through Mentorship
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connecting students with mentors from T20 universities and industry professionals to build essential research skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">
              Find a Mentor
            </button>
            <button className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary-light/10 transition-all duration-300">
              Become a Mentor
            </button>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </section>
  );
};

export default Hero;