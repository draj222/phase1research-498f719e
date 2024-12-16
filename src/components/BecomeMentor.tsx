import { motion } from "framer-motion";
import { GraduationCap, UserPlus, Users } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "Share Your Expertise",
    description: "Guide students through their research journey and help shape the next generation of researchers.",
  },
  {
    icon: <UserPlus className="w-8 h-8 text-white" />,
    title: "Professional Growth",
    description: "Develop leadership skills and expand your professional network while mentoring aspiring researchers.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Build Community",
    description: "Join a community of dedicated mentors and contribute to advancing academic excellence.",
  },
];

const BecomeMentor = () => {
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
            Become a Mentor
          </motion.h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Share your knowledge and experience with aspiring researchers. Join our mentorship program and make a lasting impact.
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
          >
            Join as Mentor
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeMentor;