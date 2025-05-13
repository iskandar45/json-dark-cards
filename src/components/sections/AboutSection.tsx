
import { motion } from "framer-motion";
import JsonCard from "../JsonCard";

const AboutSection = () => {
  const aboutInfo = {
    bio: "Full-stack developer with 5+ years of experience specializing in React, TypeScript, and Node.js. Passionate about creating elegant solutions for complex problems.",
    experience: [
      {
        company: "Tech Innovations Inc.",
        position: "Senior Frontend Developer",
        period: "2021 - Present",
        responsibilities: [
          "Lead development of company's flagship React application",
          "Implemented CI/CD pipelines for frontend projects",
          "Mentored junior developers and conducted code reviews"
        ]
      },
      {
        company: "Digital Solutions Ltd.",
        position: "Frontend Developer",
        period: "2018 - 2021",
        responsibilities: [
          "Developed responsive web applications using React",
          "Collaborated with design team to implement UI/UX designs",
          "Optimized application performance and accessibility"
        ]
      }
    ],
    education: [
      {
        institution: "University of Technology",
        degree: "BSc Computer Science",
        year: "2018",
      }
    ],
    interests: ["Web Development", "Open Source", "UI/UX Design", "Machine Learning", "Gaming"]
  };

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
        <JsonCard jsonData={aboutInfo} title="about.json" className="max-w-4xl" />
      </motion.div>
    </div>
  );
};

export default AboutSection;
