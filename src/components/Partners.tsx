import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { logo: "/lovable-uploads/879c459a-b7ac-4db5-9ef5-53bfee99dc28.png", name: "Salesforce" },
    { logo: "/lovable-uploads/d70a6a4b-bfc4-49d4-8eeb-a74b696404f8.png", name: "Refillet" },
    { logo: "/lovable-uploads/a237ba81-4d2c-482c-9d78-3e46a289bd09.png", name: "Republique du Mali" },
    { logo: "/lovable-uploads/a9519706-6ce4-4e24-9308-35b3d2f5310a.png", name: "NextGen Research Institute" },
    { logo: "/lovable-uploads/985987cd-ef69-46cf-8f32-6d9fe73b8dee.png", name: "Acecycle" },
  ];

  return (
    <section className="py-20 bg-[#233e5c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Partners</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="p-2 rounded-lg w-24 h-24 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-white mt-2 font-medium">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;