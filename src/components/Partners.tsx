import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Partners = () => {
  const partners = [
    { logo: "/lovable-uploads/879c459a-b7ac-4db5-9ef5-53bfee99dc28.png", name: "Salesforce" },
    { logo: "/lovable-uploads/d70a6a4b-bfc4-49d4-8eeb-a74b696404f8.png", name: "Reeflect" },
    { logo: "/lovable-uploads/a237ba81-4d2c-482c-9d78-3e46a289bd09.png", name: "Republique du Mali" },
    { logo: "/lovable-uploads/a9519706-6ce4-4e24-9308-35b3d2f5310a.png", name: "NextGen Research Institute" },
    { logo: "/lovable-uploads/eb8f6e86-a590-4d59-a3b4-d22138c89a06.png", name: "Acecycle" },
    { logo: "/lovable-uploads/08c692f6-4d1a-4a35-b177-606b45f6be72.png", name: "Stanford University" },
    { logo: "/lovable-uploads/9d02bc7f-f09c-499b-9719-8b9ec74a2c55.png", name: "San Jose State University" },
    { logo: "/lovable-uploads/57ca222c-004c-4566-8bcd-2e42c18f64ab.png", name: "UC Berkeley" },
    { logo: "/lovable-uploads/84745562-108f-41bd-8d23-569037d3d00c.png", name: "Altos Labs" },
    { logo: "/lovable-uploads/aa1b5c6a-29de-4412-aa18-4c1621e78a9b.png", name: "BlackRock" },
  ];

  return (
    <section className="py-20 bg-[#233e5c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Partners and Supporters</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto [&>*:last-child]:lg:col-span-3 [&>*:last-child]:lg:mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-white p-4 rounded-lg w-48 h-36 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg"
            className="bg-white hover:bg-white/90 text-[#233e5c] font-semibold text-lg px-8 py-6"
            onClick={() => window.open("https://36xf3wlv9l6.typeform.com/to/jDvGezuU", "_blank")}
          >
            Partner With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;