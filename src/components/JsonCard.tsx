
import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard, Check, WrapText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";

interface JsonCardProps {
  title?: string;
  jsonData: Record<string, any>;
  className?: string;
}

const JsonCard = ({ title, jsonData, className = "" }: JsonCardProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [wordWrap, setWordWrap] = useState(true);
  const isMobile = useIsMobile();

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

  // Format the JSON with syntax highlighting and line numbers
  const formatJsonWithHighlighting = (json: string) => {
    const lines = json.split('\n');
    
    return lines.map((line, index) => {
      const lineNumber = index + 1;
      const highlightedLine = line
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
      
      return `<div class="line"><span class="line-number">${lineNumber}</span><span class="line-content">${highlightedLine}</span></div>`;
    }).join('');
  };

  return (
    <Card className={`overflow-hidden relative card-hover-effect ${className}`}>
      <div className="terminal-header">
        <div className="dot dot-red"></div>
        <div className="dot dot-yellow"></div>
        <div className="dot dot-green"></div>
        {title && <span className="ml-2 text-sm font-medium text-foreground/80">{title}</span>}
        <div className="flex-grow"></div>
        <div className="flex items-center gap-2 mr-2">
          <WrapText size={14} className="text-muted-foreground" />
          <Switch 
            checked={wordWrap} 
            onCheckedChange={setWordWrap} 
            size="sm" 
            aria-label="Toggle word wrap" 
          />
        </div>
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
          className={`json-content overflow-auto ${wordWrap ? 'whitespace-pre-wrap break-words' : 'whitespace-pre'}`} 
          dangerouslySetInnerHTML={{ __html: formatJsonWithHighlighting(formattedJson) }} 
        />
      </CardContent>
    </Card>
  );
};

export default JsonCard;
