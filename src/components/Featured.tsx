import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Featured = () => {
  const features = [
    {
      title: "High School Students Bring Educational Resources to Underdeveloped Countries",
      source: "Independent News",
      link: "https://www.independentnews.com/news/dublin_news/high-school-students-bring-educational-resources-to-underdeveloped-countries/article_09869a26-44d4-11ef-a3ee-73d109318fee.html",
      logo: "/lovable-uploads/985987cd-ef69-46cf-8f32-6d9fe73b8dee.png"
    },
    {
      title: "Opinion: The Power of Youth Research - Phase 1's Mission to Revolutionize Education",
      source: "HS Insider - LA Times",
      link: "https://highschool.latimes.com/https-dhs-dublinusd-org/opinion-the-power-tof-youth-research-phase-1s-mission-to-revolutionize-education/",
      logo: "/lovable-uploads/c3b60c50-b1e5-471e-a33f-297964c172f0.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#233e5c] mb-4">As Featured On</h2>
          <div className="w-20 h-1 bg-[#233e5c] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <a
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={feature.logo}
                    alt={feature.source}
                    className="h-8 object-contain"
                  />
                  <ExternalLink className="text-gray-400 group-hover:text-[#233e5c] transition-colors" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#233e5c] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.source}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;