import { motion } from "framer-motion";
import { Laptop, Users, Wifi } from "lucide-react";

const programs = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Mentorship Program",
    description: "Connect with mentors from top universities and industry professionals who guide you through research fundamentals.",
  },
  {
    icon: <Laptop className="w-8 h-8 text-primary" />,
    title: "Technology Access",
    description: "Receive essential tools like laptops and equipment needed to pursue your educational goals.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-primary" />,
    title: "Internet Connectivity",
    description: "Get access to WiFi routers and internet connectivity to ensure continuous learning.",
  },
];

const Programs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Programs
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive support through various programs designed to make quality education accessible to all.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-block bg-primary/10 rounded-lg">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;