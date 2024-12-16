import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-[#335c84]" />,
    title: "Expert Guidance",
    description: "Learn from experienced researchers and academics in your field of interest.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[#335c84]" />,
    title: "Research Skills",
    description: "Develop essential research methodologies and analytical thinking skills.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#335c84]" />,
    title: "Networking",
    description: "Connect with like-minded peers and build valuable professional relationships.",
  },
];

const EnrollNow = () => {
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
            Enroll Now
          </motion.h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join our research mentorship program and start your journey towards academic excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-[#3a536d] border border-[#335c84]/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-block bg-[#335c84]/10 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
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
            className="bg-white text-[#233e5c] hover:bg-white/90 font-semibold text-lg px-8 py-6"
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnrollNow;