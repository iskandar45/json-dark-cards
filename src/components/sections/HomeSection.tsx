
import { motion } from "framer-motion";
import JsonCard from "../JsonCard";
import { Badge } from "@/components/ui/badge";

const HomeSection = () => {
  const personalInfo = {
    name: "John Doe",
    title: "Frontend Developer",
    description: "Passionate web developer with expertise in React, TypeScript, and modern web technologies",
    availability: {
      status: "available",
      for_hire: true,
      open_to: ["Full-time", "Contract", "Remote"],
    },
    links: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      website: "https://johndoe.dev"
    },
  };

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              {personalInfo.name}
            </h1>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {personalInfo.availability.status}
            </Badge>
          </div>
          <h2 className="text-xl md:text-2xl text-muted-foreground">{personalInfo.title}</h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl"
        >
          {personalInfo.description}
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <JsonCard jsonData={personalInfo} title="profile.json" />
      </motion.div>
    </div>
  );
};

export default HomeSection;
