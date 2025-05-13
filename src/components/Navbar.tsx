
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex justify-between items-center py-3">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow"></div>
          <span className="font-mono text-lg font-bold">portfolio.json</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Button 
              key={item.id}
              variant={activeSection === item.id ? "secondary" : "ghost"} 
              onClick={() => handleNavigation(item.id)}
              className="font-mono"
            >
              {item.label}
            </Button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-2 flex flex-col">
            {menuItems.map((item) => (
              <Button 
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                onClick={() => handleNavigation(item.id)}
                className="justify-start my-1 font-mono"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
