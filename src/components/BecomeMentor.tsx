import { motion } from "framer-motion";
import { GraduationCap, UserPlus, Users } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  {
    icon: <GraduationCap className="w-8 h-8 text-[#335c84]" />,
    title: "Share Your Expertise",
    description: "Guide students through their research journey and help shape the next generation of researchers.",
  },
  {
    icon: <UserPlus className="w-8 h-8 text-[#335c84]" />,
    title: "Professional Growth",
    description: "Develop leadership skills and expand your professional network while mentoring aspiring researchers.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#335c84]" />,
    title: "Build Community",
    description: "Join a community of dedicated mentors and contribute to advancing academic excellence.",
  },
];

const BecomeMentor = () => {
  return (
    <section className="py-20 bg-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#233e5c]"
          >
            Become a Mentor
          </motion.h2>
          <p className="text-[#3a536d] max-w-2xl mx-auto">
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
              className="p-6 rounded-xl bg-white border border-[#335c84]/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-block bg-[#335c84]/10 rounded-lg">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#233e5c]">{benefit.title}</h3>
              <p className="text-[#3a536d]">{benefit.description}</p>
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
            className="bg-[#233e5c] hover:bg-[#335c84] text-white font-semibold text-lg px-8 py-6"
          >
            Join as Mentor
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeMentor;