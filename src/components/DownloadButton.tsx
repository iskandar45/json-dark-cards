
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import portfolioData from "@/data/portfolioData.json";

const DownloadButton = () => {
  const handleDownload = () => {
    // Use the centralized portfolio data
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
