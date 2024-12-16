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
    // After the main counter animation (2s) + a small delay, show other stats
    const timer = setTimeout(() => {
      setShowOtherStats(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-20 flex flex-col items-start"
        >
          {/* Main counter */}
          <motion.div
            className={`text-left transition-all duration-500 ${
              showOtherStats ? "transform -translate-y-10 scale-75" : ""
            }`}
          >
            <div className="flex items-baseline gap-4">
              <div className="text-8xl md:text-9xl font-bold text-[#335c84]">
                <Counter value="500" />
                <span>+</span>
              </div>
              <div className="text-4xl md:text-5xl text-white/80">
                students mentored
              </div>
            </div>
          </motion.div>

          {/* Other stats */}
          {showOtherStats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-20"
            >
              {stats.slice(1).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#335c84] mb-2">
                    <Counter value={stat.number.replace('+', '')} />
                    {stat.number.includes('+') && '+'}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
