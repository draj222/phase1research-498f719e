import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SupportSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#33C3F0]">Support Our Work</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0] hover:text-black transition-all duration-300"
            >
              Donate Now
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0] hover:text-black transition-all duration-300"
            >
              Past Events
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0] hover:text-black transition-all duration-300"
            >
              Our Outcomes
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;