import { motion } from "framer-motion";

const partners = [
  {
    name: "Tennis Express",
    logo: "/lovable-uploads/ce5fbbcd-5756-4862-8066-cc4c5d6e873e.png",
    alt: "Tennis Express Logo"
  },
  {
    name: "Austin Humane Society",
    logo: "/lovable-uploads/ce5fbbcd-5756-4862-8066-cc4c5d6e873e.png",
    alt: "Austin Humane Society Logo"
  },
  {
    name: "Tennis Now",
    logo: "/lovable-uploads/ce5fbbcd-5756-4862-8066-cc4c5d6e873e.png",
    alt: "Tennis Now Logo"
  },
  {
    name: "Pet Alliance",
    logo: "/lovable-uploads/ce5fbbcd-5756-4862-8066-cc4c5d6e873e.png",
    alt: "Pet Alliance Logo"
  },
  {
    name: "South Barrington",
    logo: "/lovable-uploads/ce5fbbcd-5756-4862-8066-cc4c5d6e873e.png",
    alt: "South Barrington Logo"
  },
  {
    name: "King Daddy Sports",
    logo: "/lovable-uploads/ce5fbbcd-5756-4862-8066-cc4c5d6e873e.png",
    alt: "King Daddy Sports Logo"
  }
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;