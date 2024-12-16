import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PastEvents = () => {
  const events = [
    {
      title: "Research Symposium 2023",
      date: "December 15, 2023",
      description: "Annual gathering of student researchers presenting their findings across multiple disciplines.",
      attendees: "250+ Participants"
    },
    {
      title: "Summer Research Workshop",
      date: "August 5, 2023",
      description: "Intensive two-week workshop on research methodologies and academic writing.",
      attendees: "100+ Students"
    },
    {
      title: "Mentor-Mentee Networking Event",
      date: "June 20, 2023",
      description: "Connection event bringing together experienced researchers with aspiring students.",
      attendees: "150+ Attendees"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-[#233e5c]">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <p className="text-sm font-semibold text-[#233e5c]">{event.attendees}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;