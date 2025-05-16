
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
      variant={theme === "dark" ? "outline" : "default"}
      size="icon"
      onClick={toggleTheme}
      className={`rounded-full w-8 h-8 ${theme === "dark" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "bg-primary text-primary-foreground"}`}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
