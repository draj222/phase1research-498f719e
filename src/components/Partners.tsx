import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Partners = () => {
  const [organizationName, setOrganizationName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (organizationName.trim()) {
      toast.success("Organization name submitted successfully!");
      setOrganizationName("");
    } else {
      toast.error("Please enter an organization name");
    }
  };

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-4 rounded-lg w-full aspect-square flex items-center justify-center">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Enter organization name"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className="bg-white"
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-white">
              Submit Organization
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;