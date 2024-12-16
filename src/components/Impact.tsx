import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: "500+", label: "Students Mentored" },
  { number: "50+", label: "Partner Universities" },
  { number: "200+", label: "Active Mentors" },
  { number: "30+", label: "Countries Reached" },
];

const Counter = ({ value, className }: { value: string; className?: string }) => {
  const baseNumber = parseInt(value);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, baseNumber, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [baseNumber, count]);

  return <motion.span className={className}>{rounded}</motion.span>;
};

const Impact = () => {
  const [showOtherStats, setShowOtherStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOtherStats(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[50vh] bg-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-20 flex flex-col items-center"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#335c84] mb-4"
            >
              Our Impact
            </motion.h2>
            <div className="w-20 h-1 bg-[#335c84] mx-auto"></div>
          </div>
          
          <div className="flex overflow-x-auto pb-8 gap-8 w-full snap-x snap-mandatory">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 snap-center w-[280px] text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#335c84] mb-2">
                  <Counter value={stat.number.replace('+', '')} />
                  {stat.number.includes('+') && '+'}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;