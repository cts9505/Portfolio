import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import AnimatedBackground from "../components/AnimatedBackground";
import FloatingElements from "../components/FloatingElements";
import ScrollProgress from "../components/ScrollProgress";
import WindowContainer from "../components/WindowContainer";
import ChatBox from "../components/ChatBox";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Index() {
  useEffect(() => {
    // Add Poppins font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-background to-cyan-950/20"></div>

        {/* White moving grid background */}
        <div className="absolute inset-0 grid-bg opacity-5"></div>

        {/* Animated grid overlay - Blue theme */}
        <div
          className="absolute inset-0 opacity-10 md:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "grid 20s linear infinite",
          }}
        />

        {/* Starfield effect with blue tint */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-200 rounded-full animate-pulse"
              style={{
                width: (i % 3) + 1 + "px",
                height: (i % 3) + 1 + "px",
                top: ((i * 17) % 100) + "%",
                left: ((i * 23) % 100) + "%",
                animationDelay: (i % 5) * 1 + "s",
                animationDuration: (i % 3) + 2 + "s",
              }}
            />
          ))}
        </div>

        {/* Original animated background */}
        <AnimatedBackground />

        {/* 3D floating elements */}
        <FloatingElements />

        {/* Additional floating blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-blue-400/10 rounded-full blur-3xl animate-float delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-24 md:w-48 h-24 md:h-48 bg-cyan-400/10 rounded-full blur-2xl animate-float delay-700"></div>
        </div>
      </div>

      <Navigation />

      <main className="relative z-10">
        {/* Hero Section with enhanced animations */}
        <div className="animate-fadeInUp delay-100">
          <Hero />
        </div>

        {/* About Section with staggered animations */}
        <div className="animate-fadeInUp delay-200 mx-4 mb-12">
          <WindowContainer title="About Me" glowEffect={true}>
            <About />
          </WindowContainer>
        </div>

        {/* Skills Section with enhanced tech logos */}
        <div className="animate-fadeInUp delay-300 mx-4 mb-12">
          <WindowContainer title="Technical Skills" glowEffect={true}>
            <Skills />
          </WindowContainer>
        </div>

        {/* Projects Section with hover effects */}
        <div className="animate-fadeInUp delay-400 mx-4 mb-12">
          <WindowContainer title="Featured Projects" glowEffect={true}>
            <Projects />
          </WindowContainer>
        </div>

        {/* Contact Section with form animations */}
        <div className="animate-fadeInUp delay-500 mx-4 mb-12">
          <WindowContainer title="Get In Touch" glowEffect={true}>
            <Contact />
          </WindowContainer>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 border-t border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            {/* Footer brand */}
            <div className="flex items-center justify-center space-x-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Chaitanya Shinde
              </h3>
              <div className="h-6 w-px bg-border"></div>
              <span className="text-muted-foreground text-sm">
                Full Stack Developer
              </span>
            </div>

            {/* Footer description */}
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions with modern web
              technologies. Specialized in MERN stack, AI integration, and
              building scalable applications.
            </p>

            {/* Footer stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Learning
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
              {/* <div className="text-center">
                <div className="text-2xl font-bold text-primary">9.56</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div> */}
            </div>

            {/* Footer links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm">
                © 2025 Chaitanya Shinde. Built with React, TypeScript, and
                passion.
              </p>
              <p className="text-muted-foreground text-xs mt-2">
                Open for internships and exciting opportunities
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating action elements */}
      <div className="fixed bottom-20 right-6 z-50 flex flex-col space-y-4">
        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 animate-float"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>

      {/* ChatBox Component */}
      <ChatBox />
    </div>
  );
}
