
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const DownloadButton = () => {
  const handleDownload = () => {
    // Example portfolio data - you would replace this with your actual portfolio data
    const portfolioData = {
      basics: {
        name: "John Doe",
        title: "Full Stack Developer",
        email: "contact@johndoe.dev",
        phone: "+1 (555) 123-4567",
        website: "https://johndoe.dev",
        location: "San Francisco, CA"
      },
      about: {
        summary: "Full stack developer with a passion for building elegant, responsive user interfaces and robust backend systems.",
        interests: ["Web Development", "UI/UX Design", "Cloud Architecture", "Open Source"],
        experience: "5+ years of professional experience in software development."
      },
      skills: {
        languages: ["JavaScript", "TypeScript", "Python", "Go"],
        frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
        backend: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"],
        tools: ["Git", "Docker", "AWS", "Vercel"]
      },
      projects: [
        {
          name: "E-commerce Platform",
          description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB",
          technologies: ["React", "Node.js", "Express", "MongoDB"],
          link: "https://github.com/johndoe/ecommerce"
        },
        {
          name: "Task Management App",
          description: "Developed a task management application with real-time updates",
          technologies: ["Next.js", "Firebase", "Tailwind CSS"],
          link: "https://github.com/johndoe/taskmanager"
        }
      ],
      contact: {
        email: "contact@johndoe.dev",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    };

    // Create and download the JSON file
    const jsonString = JSON.stringify(portfolioData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
    
    toast.success('Portfolio downloaded successfully!');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={handleDownload} 
        className="rounded-full w-14 h-14 p-0 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/20" 
        aria-label="Download portfolio"
      >
        <Download className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default DownloadButton;
