
import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JsonCardProps {
  title?: string;
  jsonData: Record<string, any>;
  className?: string;
}

const JsonCard = ({ title, jsonData, className = "" }: JsonCardProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const formattedJson = JSON.stringify(jsonData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedJson);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "JSON data has been copied to your clipboard",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  // Format the JSON with syntax highlighting
  const formatJsonWithHighlighting = (json: string) => {
    return json
      .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'property';
            // Remove the colon from the match for property
            match = match.substring(0, match.length - 1);
            return `<span class="${cls}">${match}</span><span class="punctuation">:</span>`;
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'keyword';
        }
        return `<span class="${cls}">${match}</span>`;
      })
      .replace(/[{}\[\]]/g, (match) => `<span class="punctuation">${match}</span>`)
      .replace(/,/g, '<span class="punctuation">,</span>');
  };

  return (
    <Card className={`overflow-hidden relative card-hover-effect ${className}`}>
      <div className="terminal-header">
        <div className="dot dot-red"></div>
        <div className="dot dot-yellow"></div>
        <div className="dot dot-green"></div>
        {title && <span className="ml-2 text-sm font-medium text-foreground/80">{title}</span>}
        <div className="flex-grow"></div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={handleCopy}
        >
          {copied ? <Check size={16} /> : <Clipboard size={16} />}
        </Button>
      </div>
      <CardContent className="p-4 bg-card/60">
        <pre 
          className="json-content overflow-auto" 
          dangerouslySetInnerHTML={{ __html: formatJsonWithHighlighting(formattedJson) }} 
        />
      </CardContent>
    </Card>
  );
};

export default JsonCard;
