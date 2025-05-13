
import { motion } from "framer-motion";
import JsonCard from "../JsonCard";

const SkillsSection = () => {
  const skillsInfo = {
    languages: [
      { name: "JavaScript", proficiency: "Expert", years: 5 },
      { name: "TypeScript", proficiency: "Expert", years: 4 },
      { name: "HTML/CSS", proficiency: "Expert", years: 6 },
      { name: "Python", proficiency: "Intermediate", years: 2 },
      { name: "Java", proficiency: "Beginner", years: 1 }
    ],
    frameworks: [
      { name: "React", proficiency: "Expert", years: 4 },
      { name: "Next.js", proficiency: "Advanced", years: 3 },
      { name: "Node.js", proficiency: "Advanced", years: 3 },
      { name: "Express", proficiency: "Advanced", years: 3 },
      { name: "Tailwind CSS", proficiency: "Expert", years: 3 }
    ],
    databases: [
      { name: "MongoDB", proficiency: "Advanced", years: 3 },
      { name: "PostgreSQL", proficiency: "Intermediate", years: 2 },
      { name: "Firebase", proficiency: "Advanced", years: 3 }
    ],
    tools: [
      { name: "Git", proficiency: "Expert", years: 5 },
      { name: "Docker", proficiency: "Intermediate", years: 2 },
      { name: "AWS", proficiency: "Intermediate", years: 2 },
      { name: "Figma", proficiency: "Advanced", years: 3 }
    ],
    soft_skills: [
      "Team Leadership",
      "Problem Solving",
      "Communication",
      "Agile Methodology",
      "Time Management"
    ]
  };

  return (
    <div className="container py-8 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Skills</h1>
        <p className="text-lg text-muted-foreground">Technical expertise and capabilities</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <JsonCard jsonData={skillsInfo} title="skills.json" className="max-w-4xl" />
      </motion.div>
    </div>
  );
};

export default SkillsSection;
