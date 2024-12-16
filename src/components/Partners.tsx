import { motion } from "framer-motion";

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#335c84] mb-4">Our Partners</h2>
          <div className="w-20 h-1 bg-[#335c84] mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;