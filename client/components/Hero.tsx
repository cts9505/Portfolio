import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8 mt-20 md:mt-16">
          {/* <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div> */}
          <img src="/ai.png" alt="Logo" className="w-4 h-4 mr-2"/> Hello World !
        </div>

        {/* Main Heading */}
        <div className="relative mb-6">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            CHAITANYA
          </h1>

          {/* Surname */}
          <div className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/80 tracking-wider mt-2">
            <span style={{ fontFamily: "Poppins, sans-serif" }}>SHINDE</span>
          </div>

          {/* Responsive Glowing Separator */}
          <div className="flex w-full items-center my-8" aria-hidden="true">
            {/* Left Glowing Line */}
            <div className="min-h-0.5 flex-grow bg-gradient-to-r from-transparent via-blue-400/50 to-blue-400 shadow-lg shadow-blue-400/50" />

            {/* Glowing Ball Effect */}
            <div className="relative mx-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            </div>

            {/* Right Glowing Line */}
            <div className="min-h-0.5 flex-grow bg-gradient-to-l from-transparent via-blue-400/50 to-blue-400 shadow-lg shadow-blue-400/50" />
          </div>
        </div>

        {/* Subtitle with gradient */}
        <div className="text-2xl md:text-4xl lg:text-5xl font-light mb-6">
          <span className="text-foreground/80">Building </span>
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Full-Stack Solutions
          </span>
          <br />
          <span className="text-foreground/80">with Modern Technologies</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          A dedicated Computer Engineering student specializing in MERN stack
          development, AI integration, and creating innovative solutions.
          Passionate about building efficient user interfaces and scalable
          backend systems.
        </p>

        {/* CTA Buttons & Scroll Indicator */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-9">
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-200 group"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Scroll Indicator */}
          {/* INFO: Removed absolute positioning to keep this element in the flex flow for proper centering. */}
          <div>
            <button
              onClick={() => {
                const aboutSection = document.querySelector("#about");
                aboutSection?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center hover:border-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer group"
              title="Scroll to About section"
            >
              <div
                className="w-1 h-3 bg-muted-foreground rounded-full animate-bounce group-hover:bg-primary transition-colors"
                style={{ margin: "7px 0 0 -1px" }}
              ></div>
            </button>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            // INFO: Removed ml-10 to let the parent's `gap-10` and `justify-center` handle spacing for perfect centering.
            className="inline-flex items-center px-8 py-4 border border-border text-foreground rounded-full hover:bg-card transition-all duration-200 group"
          >
            <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
            Download Resume
          </a>
        </div>
        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/cts9505"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanya-shinde-computer/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:9chaitanyashinde@gmail.com"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
