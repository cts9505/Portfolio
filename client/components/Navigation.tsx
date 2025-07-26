import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="transition-all duration-300"
              >
                {/* Background circle */}
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-600 group-hover:text-blue-400 transition-colors duration-300"
                />

                {/* Blue fill on hover */}
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="rgb(59, 130, 246)"
                  className="opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />

                {/* CS Text */}
                <text
                  x="20"
                  y="26"
                  textAnchor="middle"
                  className="fill-current text-foreground font-bold text-sm group-hover:text-blue-400 transition-colors duration-300"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  CS
                </text>
              </svg>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-blue-400/20 scale-0 group-hover:scale-110 transition-transform duration-300 blur-md"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-all duration-200 cursor-pointer"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="block px-3 py-2 mt-4 bg-primary text-primary-foreground rounded-md text-center cursor-pointer"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
