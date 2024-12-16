import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PastEvents = () => {
  const events = [
    {
      title: "School Outreach Program - India",
      date: "December 15, 2023",
      image: "/lovable-uploads/48477bc8-e46b-455e-a94c-ebb64b9c42b3.png",
      description: "Engaging with students at an under-resourced school in India, where we donated over $2,500 in portable solar kits. Each student built their own kit equipped with a light and fan while learning about energy sustainability.",
    },
    {
      title: "Summer Research Workshop",
      date: "August 5, 2023",
      image: "/lovable-uploads/ce5fbbcd-5756-4862-8066-cc4c5d6e873e.png",
      description: "Intensive two-week workshop on research methodologies and academic writing.",
    },
    {
      title: "Mentor-Mentee Networking Event",
      date: "June 20, 2023",
      image: "/lovable-uploads/cafd2c69-f081-4878-837e-6b6db0a661bd.png",
      description: "Connection event bringing together experienced researchers with aspiring students.",
    }
  ];

  return (
    <section className="py-16 bg-[#233e5c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Past Events</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our previous research mentorship events and activities that have helped shape the future of academic research.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="relative">
            <CarouselContent>
              {events.map((event, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6 rounded-b-lg">
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-white/80 text-sm mb-1">{event.date}</p>
                      <p className="text-white/90">{event.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;