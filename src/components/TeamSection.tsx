import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    image: "/lovable-uploads/b129207c-4d82-4ccc-b090-45d04fe75df0.png",
    name: "Dheeraj Tallapragada",
    role: "Co-Founder/CEO"
  },
  {
    image: "/lovable-uploads/13e6ed42-e2fd-4bf5-9975-f61260571b3e.png",
    name: "Team Member 2",
    role: "Role to be added"
  },
  {
    image: "/lovable-uploads/3d7aa2ca-e2aa-4a1d-ba1a-888a7d084a5e.png",
    name: "Team Member 3",
    role: "Role to be added"
  },
  {
    image: "/lovable-uploads/704ce3fc-4203-4b5a-a288-5c73ff5dd0e4.png",
    name: "Team Member 4",
    role: "Role to be added"
  },
  {
    image: "/lovable-uploads/01755bd0-f3e6-4f25-9e1e-cd89b20c26a4.png",
    name: "Team Member 5",
    role: "Role to be added"
  }
];

const TeamSection = () => {
  const carouselApi = useRef<any>(null);

  return (
    <section className="py-20 bg-white">
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
            className="text-3xl md:text-4xl font-bold text-[#335c84] mb-4"
          >
            Our Team
          </motion.h2>
          <div className="w-20 h-1 bg-[#335c84] mx-auto mb-12"></div>
          
          <div className="max-w-5xl mx-auto">
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
                    <Card className="border-none shadow-lg">
                      <CardContent className="flex flex-col items-center p-6">
                        <div className="w-48 h-48 mb-4 overflow-hidden rounded-full">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-[#335c84] mb-2">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-0 h-12 w-12 rounded-full bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white border-none">
                  <ArrowLeft className="h-6 w-6" />
                </CarouselPrevious>
                <CarouselNext className="right-0 h-12 w-12 rounded-full bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white border-none">
                  <ArrowRight className="h-6 w-6" />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;