import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Featured = () => {
  const features = [
    {
      title: "High School Students Bring Educational Resources to Underdeveloped Countries",
      source: "Independent News",
      link: "https://www.independentnews.com/news/dublin_news/high-school-students-bring-educational-resources-to-underdeveloped-countries/article_09869a26-44d4-11ef-a3ee-73d109318fee.html",
      logo: "/lovable-uploads/adc4d919-3fef-42f7-8231-8178cff164c5.png"
    },
    {
      title: "Opinion: The Power of Youth Research - Phase 1's Mission to Revolutionize Education",
      source: "HS Insider - LA Times",
      link: "https://highschool.latimes.com/https-dhs-dublinusd-org/opinion-the-power-of-youth-research-phase-1s-mission-to-revolutionize-education/",
      logo: "/lovable-uploads/c3b60c50-b1e5-471e-a33f-297964c172f0.png"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#233e5c' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">As Featured On</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
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
                style={{ backgroundColor: '#3a536d' }}
                className="block p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={feature.logo}
                    alt={feature.source}
                    className="h-8 object-contain"
                  />
                  <ExternalLink className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">{feature.source}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;