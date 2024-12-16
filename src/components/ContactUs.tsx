import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#233e5c]">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you. Reach out to us through any of the following channels.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4 p-3 inline-block bg-[#233e5c]/10 rounded-lg">
              <Mail className="w-8 h-8 text-[#233e5c]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#233e5c]">Email</h3>
            <p className="text-gray-600">info@phase1research.org</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4 p-3 inline-block bg-[#233e5c]/10 rounded-lg">
              <Phone className="w-8 h-8 text-[#233e5c]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#233e5c]">Phone</h3>
            <p className="text-gray-600">(123) 456-7890</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4 p-3 inline-block bg-[#233e5c]/10 rounded-lg">
              <MapPin className="w-8 h-8 text-[#233e5c]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#233e5c]">Location</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;