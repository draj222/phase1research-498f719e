import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: "10,000+", label: "Students Mentored" },
  { number: "5,000+", label: "Active Mentors" },
  { number: "30+", label: "Countries Reached" },
];

const Counter = ({ value, className }: { value: string; className?: string }) => {
  const baseNumber = parseInt(value.replace(',', ''));
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    return num.toLocaleString();
  });

  useEffect(() => {
    const animation = animate(count, baseNumber, {
      duration: baseNumber > 1000 ? 5 : 2.5,
      ease: (t) => {
        const slowdownThreshold = baseNumber - (baseNumber > 1000 ? 500 : 5);
        if (count.get() > slowdownThreshold) {
          return t * (1 - Math.pow(t - 1, 8));
        }
        return t * t;
      },
      onUpdate: (latest) => {
        console.log('Current count:', latest);
      }
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
    <section className="min-h-[50vh] bg-[#233e5c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-20 flex flex-col items-center"
        >
          <div className="text-center mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Our Impact
            </motion.h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-[200px]"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <Counter value={stat.number.replace('+', '')} />
                  {stat.number.includes('+') && '+'}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;