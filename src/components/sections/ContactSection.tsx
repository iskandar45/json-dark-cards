
import { motion } from "framer-motion";
import JsonCard from "../JsonCard";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolioData.json";

const ContactSection = () => {
  const { contact } = portfolioData;

  const handleEmailClick = () => {
    window.location.href = `mailto:${contact.email}`;
  };

  return (
    <div className="container py-8 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
        <p className="text-lg text-muted-foreground">Get in touch with me</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <JsonCard jsonData={contact} title="contact.json" />
        
        <div className="bg-card p-6 rounded-lg border border-border card-hover-effect">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Send a Message</h2>
            <p className="text-muted-foreground">
              Feel free to reach out for job opportunities, collaborations, or just to say hello!
            </p>
            <Button onClick={handleEmailClick} className="w-full">
              Send Email
            </Button>
            <div className="text-sm text-muted-foreground mt-4">
              * This is a portfolio demo. Click the button to open your email client.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
