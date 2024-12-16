import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PastEvents = () => {
  const events = [
    {
      title: "Solar Energy Bootcamp - India",
      date: "June 26, 2024",
      image: "/lovable-uploads/48477bc8-e46b-455e-a94c-ebb64b9c42b3.png",
      description: "Engaging with students at an under-resourced school in India, where we donated over $2,500 in portable solar kits. Each student built their own kit equipped with a light and fan while learning about energy sustainability.",
    },
    {
      title: "Technology Donation Drive - Mali",
      date: "July 7, 2024",
      image: "/lovable-uploads/c3b60c50-b1e5-471e-a33f-297964c172f0.png",
      description: "Supporting digital education in Mali through the donation of 100 PCs and monitors, helping bridge the technological divide and enhance learning opportunities.",
    }
  ];

  const carouselApi = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (carouselApi.current) {
        console.log('Auto-scrolling to next slide');
        carouselApi.current.scrollNext();
      }
    }, 4000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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

        <div className="max-w-4xl mx-auto relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={(api) => {
              carouselApi.current = api;
            }}
            className="w-full"
          >
            <CarouselContent>
              {events.map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <Card className="border-none bg-white/10 backdrop-blur-sm shadow-lg">
                    <CardContent className="p-0">
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
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 md:-left-20 left-2 h-12 w-12 md:h-16 md:w-16 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 shadow-lg">
              <ArrowLeft className="h-6 w-6 md:h-10 md:w-10" />
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 md:-right-20 right-2 h-12 w-12 md:h-16 md:w-16 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 shadow-lg">
              <ArrowRight className="h-6 w-6 md:h-10 md:w-10" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
