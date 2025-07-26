import { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Brain,
  ShoppingCart,
  Smartphone,
  Globe,
  Filter,
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Finvista - Finance Management App",
      description:
        "A comprehensive MERN-based personal finance application featuring income/expense tracking, budget/bills management, and AI-driven financial insights using LangChain and Gemini AI.",
      image: "/finvista.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "LangChain",
        "Gemini AI",
      ],
      category: "fullstack",
      status: "Completing",
      date: "February 2025",
      github: "https://github.com/cts9505/FinVista-Finance_Management_App",
      live: "https://finvista-app.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Hackathon Partner Finder",
      description:
        "MERN stack web application to connect students for hackathons. Features teammate matching with skill filters, resume upload, AI-based skill extraction, and admin panel for event management.",
      image: "/",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express",
        "AI/ML",
        "Resume Parser",
      ],
      category: "fullstack",
      status: "Planning",
      date: "2025",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Students Corner E-commerce",
      description:
        "Complete e-commerce platform for students featuring accommodation listings, stationery marketplace, lost & found section, clubs/events info, and student exchange portal.",
      image: "/studentscorner.png",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "fullstack",
      status: "Live",
      date: "2024",
      github: "https://github.com/cts9505/Students-Corner_E-Commerce_For_Students",
      live: "http://studentscorner.great-site.net/studentcorner/home.php",
      featured: true,
    },
    {
      id: 4,
      title: "Profile Info Book",
      description:
        "(Frontend-only project) A basic web app developed to store and manage hostel student information using HTML, CSS, and JavaScript. Data is saved locally using LocalStorage, and authentication is handled via a simple alert-based password (admin). This was my first project in web development, helping me understand form handling, DOM manipulation, and local data storage.",
      image: "/info.png",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      category: "web",
      status: "Completed",
      date: "2020",
      github: "#",
      live: "https://profileinfobook.web.app/",
      featured: false,
    },
    {
      id: 5,
      title: "BookMyShow Platform",
      description:
        "(Frontend-only project) Modern web application for booking movie theatre management with clean UI and responsive design.",
      image: "/bookmyshow.png",
      technologies: ["HTML", "CSS","JS"],
      category: "web",
      status: "Live",
      date: "2020",
      github: "#",
      live: "https://bookshow.web.app/",
      featured: false,
    },
    {
      id: 6,
      title: "Smart Home Automation",
      description:
        "IoT-based home automation system using Arduino, relays, and HC-05 Bluetooth for controlling various home appliances remotely.",
      image: "/home.png",
      technologies: ["Arduino", "C++", "Bluetooth", "IoT", "Hardware"],
      category: "iot",
      status: "Implemented",
      date: "2023",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 7,
      title: "Smart Irrigation System",
      description:
        "Automated irrigation system using soil moisture sensors and relays to control water pumps, optimizing water usage for agriculture.",
      image: "/soil.jpg",
      technologies: ["Arduino", "Sensors", "C++", "IoT", "Agriculture"],
      category: "iot",
      status: "Completed",
      date: "2022",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 8,
      title: "Smart Blind Stick",
      description:
        "Assistive technology project using Arduino and ultrasonic sensors to help visually impaired individuals navigate safely.",
      image: "/smart.jpeg",
      technologies: ["Arduino", "Ultrasonic Sensors", "C++", "IoT"],
      category: "iot",
      status: "Completed",
      date: "2020",
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: <Globe className="w-4 h-4" /> },
    {
      id: "fullstack",
      label: "Full Stack",
      icon: <Brain className="w-4 h-4" />,
    },
    { id: "web", label: "Web Apps", icon: <Globe className="w-4 h-4" /> },
    {
      id: "iot",
      label: "IoT Projects",
      icon: <Smartphone className="w-4 h-4" />,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-7 pt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions and cutting-edge technologies
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live" ||
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : project.status === "In Progress"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-secondary"
              }`}
            >
              {filter.icon}
              <span className="ml-2 font-medium">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      project.status === "Live" ||
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "In Progress"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex space-x-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for additional projects and contributions
            </p>
            <a
              href="https://github.com/cts9505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;