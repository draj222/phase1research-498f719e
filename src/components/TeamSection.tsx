import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    image: "/lovable-uploads/b129207c-4d82-4ccc-b090-45d04fe75df0.png",
    name: "Dheeraj Tallapragada",
    role: "Co-Founder/CEO"
  },
  {
    image: "/lovable-uploads/dd3dc8bb-2092-4674-9be1-38aae61ac94e.png",
    name: "Vedant Sagare",
    role: "Co-Founder"
  },
  {
    image: "/lovable-uploads/0a61d3e4-6533-4fda-8d60-53c58693e587.png",
    name: "Harsha Vajrala",
    role: "Co-Founder"
  },
  {
    image: "/lovable-uploads/e23a78a1-08a1-4937-b94e-d9bd2301b5ff.png",
    name: "Krishiv Jaini",
    role: "Director of Outreach"
  },
  {
    image: "/lovable-uploads/cafd2c69-f081-4878-837e-6b6db0a661bd.png",
    name: "Jayden Solis",
    role: "Co-Director of Marketing"
  },
  {
    image: "/lovable-uploads/39b25d33-3640-4482-95fd-307e50a57bda.png",
    name: "Heer Dadia",
    role: "Co-Director of Marketing"
  }
];

const TeamSection = () => {
  const carouselApi = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (carouselApi.current) {
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
    <section className="py-20 bg-[#233e5c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Our Team
          </motion.h2>
          <div className="w-20 h-1 bg-white mx-auto mb-12"></div>
          
          <div className="max-w-5xl mx-auto relative">
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
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-none bg-white/10 backdrop-blur-sm shadow-lg">
                      <CardContent className="flex flex-col items-center p-6">
                        <div className="w-48 h-48 mb-4 overflow-hidden rounded-full relative">
                          <motion.img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                        <p className="text-white/80">{member.role}</p>
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
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
