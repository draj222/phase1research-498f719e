import { motion } from "framer-motion";
import { BookOpen, Users, BookPlus } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  {
    icon: <BookPlus className="w-8 h-8 text-white" />,
    title: "Lead Your Community",
    description: "Start a local chapter and inspire young researchers in your area.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Build a Network",
    description: "Create a thriving community of passionate researchers and mentors.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Access Resources",
    description: "Get support, materials, and guidance to run successful research programs.",
  },
];

const StartChapter = () => {
  const handleStartChapter = () => {
    window.open("https://36xf3wlv9l6.typeform.com/to/DLsICzl4", "_blank");
  };

  return (
    <section className="py-20 bg-[#233e5c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Start a Chapter
          </motion.h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Bring the power of research to your community. Start a local chapter and help cultivate the next generation of researchers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-[#3a536d] border border-white/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-block bg-white/10 rounded-lg">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-white hover:bg-white/90 text-[#233e5c] font-semibold text-lg px-8 py-6"
            onClick={handleStartChapter}
          >
            Start Your Chapter
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StartChapter;