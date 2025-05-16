
import { motion } from "framer-motion";
import JsonCard from "../JsonCard";
import portfolioData from "@/data/portfolioData.json";

const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <div className="container py-8 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
        <p className="text-lg text-muted-foreground">Professional background and experience</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <JsonCard jsonData={about} title="about.json" className="max-w-4xl" />
      </motion.div>
    </div>
  );
};

export default AboutSection;
