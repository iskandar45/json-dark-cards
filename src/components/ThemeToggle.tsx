
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-8 h-8"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun size={16} className="text-foreground" />
      ) : (
        <Moon size={16} className="text-foreground" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
