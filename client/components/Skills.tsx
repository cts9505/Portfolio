import { useState } from "react";
import { Code, Database, Zap, Globe, Cpu, Smartphone } from "lucide-react";
import 'devicon/devicon.min.css';


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");


  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        {
          name: "HTML5",
          logo: <i className="devicon-html5-plain colored text-4xl"></i>,
          description: "Semantic markup",
        },
        {
          name: "CSS3",
          logo: <i className="devicon-css3-plain colored text-4xl"></i>,
          description: "Modern styling",
        },
        {
          name: "Tailwind CSS",
          logo: <i className="devicon-tailwindcss-plain colored text-4xl"></i>,
          description: "Utility-first CSS",
        },
        {
          name: "React",
          logo: <i className="devicon-react-original colored text-4xl"></i>,
          description: "Building modern UIs",
        },
        {
          name: "JavaScript",
          logo: <i className="devicon-javascript-plain colored text-4xl"></i>,
          description: "Core programming language",
        },
        {
          name: "TypeScript",
          logo: <i className="devicon-typescript-plain colored text-4xl"></i>,
          description: "Type-safe development",
        },
        {
          name: "Next.js",
          logo: <i className="devicon-nextjs-plain text-4xl"></i>,
          description: "React framework",
        },
        {
          name: "Vue.js",
          logo: <i className="devicon-vuejs-plain colored text-4xl"></i>,
          description: "Progressive framework",
        },
        // {
        //   name: "SASS",
        //   logo: <i className="devicon-sass-original colored text-4xl"></i>,
        //   description: "CSS preprocessor",
        // },
        {
          name: "Bootstrap",
          logo: <i className="devicon-bootstrap-plain colored text-4xl"></i>,
          description: "UI toolkit",
        },
        // {
        //   name: "Redux",
        //   logo: <i className="devicon-redux-original colored text-4xl"></i>,
        //   description: "State management",
        // },
        // {
        //   name: "Webpack",
        //   logo: <i className="devicon-webpack-plain colored text-4xl"></i>,
        //   description: "Module bundler",
        // },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      skills: [
        {
          name: "Node.js",
          logo: <i className="devicon-nodejs-plain colored text-4xl"></i>,
          description: "Server-side JavaScript",
        },
        {
          name: "Express.js",
          logo: <i className="devicon-express-original colored text-4xl"></i>,
          description: "Web framework",
        },
        {
          name: "MongoDB",
          logo: <i className="devicon-mongodb-plain colored text-4xl"></i>,
          description: "NoSQL database",
        },
        {
          name: "MySQL",
          logo: <i className="devicon-mysql-plain colored text-4xl"></i>,
          description: "Relational database",
        },
        {
          name: "PostgreSQL",
          logo: <i className="devicon-postgresql-plain colored text-4xl"></i>,
          description: "Advanced SQL database",
        },
        {
          name: "Redis",
          logo: <i className="devicon-redis-plain colored text-4xl"></i>,
          description: "In-memory database",
        },
        {
          name: "PHP",
          logo: <i className="devicon-php-plain colored text-4xl"></i>,
          description: "Server scripting",
        },
        {
          name: "Python",
          logo: <i className="devicon-python-plain colored text-4xl"></i>,
          description: "Versatile programming",
        },
        {
          name: "Django",
          logo: <i className="devicon-django-plain colored text-4xl"></i>,
          description: "Python web framework",
        },
      ],
    },
    programming: {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        {
          name: "Python",
          logo: <i className="devicon-python-plain colored text-4xl"></i>,
          description: "Versatile, high-level, general-purpose programming."
        },
        {
          name: "C++",
          logo: <i className="devicon-cplusplus-plain colored text-4xl"></i>,
          description: "High-performance language for systems, games, and applications."
        },
        {
          name: "JavaScript",
          logo: <i className="devicon-javascript-plain colored text-4xl"></i>,
          description: "The core language of the web."
        },
        // {
        //   name: "Ruby",
        //   logo: <i className="devicon-ruby-plain colored text-4xl"></i>,
        //   description: "Dynamic language focused on simplicity and productivity."
        // },
        {
          name: "PHP",
          logo: <i className="devicon-php-plain colored text-4xl"></i>,
          description: "Popular server-side scripting for web development."
        },
        {
          name: "TypeScript",
          logo: <i className="devicon-typescript-plain colored text-4xl"></i>,
          description: "JavaScript with static types for large-scale apps."
        },
        // {
        //   name: "C#",
        //   logo: <i className="devicon-csharp-plain colored text-4xl"></i>,
        //   description: "Modern, object-oriented language for the .NET ecosystem."
        // },
        {
          name: "Java",
          logo: <i className="devicon-java-plain colored text-4xl"></i>,
          description: "Platform-independent language for enterprise-scale applications."
        },
        // {
        //   name: "Go",
        //   logo: <i className="devicon-go-plain colored text-4xl"></i>,
        //   description: "Concurrent programming and systems development made simple."
        // },
        // {
        //   name: "Swift",
        //   logo: <i className="devicon-swift-plain colored text-4xl"></i>,
        //   description: "Powerful and intuitive language for Apple platforms."
        // },
        // {
        //   name: "Kotlin",
        //   logo: <i className="devicon-kotlin-plain colored text-4xl"></i>,
        //   description: "Modern, pragmatic language for Android and multiplatform apps."
        // },
        // {
        //   name: "Scala",
        //   logo: <i className="devicon-scala-plain colored text-4xl"></i>,
        //   description: "Combines object-oriented and functional programming."
        // },
        {
          name: "C",
          logo: <i className="devicon-c-plain colored text-4xl"></i>,
          description: "Foundational language for systems and low-level programming."
        },
        {
          name:"SQL",
          logo: <i className="devicon-azuresqldatabase-plain colored text-4xl"></i>,
          description:"Database Language"
        },
        {
          name:"Assembly",
          logo:<i className="devicon-assembly-plain colored text-4xl"></i>,
          description:"Machine Language"
        }
        // {
        //   name: "Rust",
        //   logo: <i className="devicon-rust-plain colored text-4xl"></i>,
        //   description: "Systems programming with a focus on memory safety and performance."
        // },
        // {
        //   name: "Haskell",
        //   logo: <i className="devicon-haskell-plain colored text-4xl"></i>,
        //   description: "A purely functional language with a strong static type system."
        // },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Zap className="w-6 h-6" />,
      skills: [
        {
          name: "Git",
          logo: <i className="devicon-git-plain colored text-4xl"></i>,
          description: "Version control",
        },
        {
          name: "GitHub",
          logo: <i className="devicon-github-original colored text-4xl"></i>,
          description: "Code hosting",
        },
        {
          name: "VS Code",
          logo: <i className="devicon-vscode-plain colored text-4xl"></i>,
          description: "Code editor",
        },
        {
          name: "Docker",
          logo: <i className="devicon-docker-plain colored text-4xl"></i>,
          description: "Containerization",
        },
        {
          name: "Kubernetes",
          logo: <i className="devicon-kubernetes-plain colored text-4xl"></i>,
          description: "Container orchestration",
        },
        {
          name: "AWS",
          logo: <i className="devicon-amazonwebservices-plain-wordmark colored text-4xl"></i>,
          description: "Cloud services",
        },
        {
          name: "Firebase",
          logo: <i className="devicon-firebase-plain colored text-4xl"></i>,
          description: "Backend as a Service",
        },
        {
          name: "Nginx",
          logo: <i className="devicon-nginx-original colored text-4xl"></i>,
          description: "Web server",
        },
        {
          name: "Linux",
          logo: <i className="devicon-linux-plain colored text-4xl"></i>,
          description: "Operating system",
        },
      ],
    },
    emerging: {
      title: "AI & Emerging Tech",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        {
          name: "TensorFlow",
          logo: <i className="devicon-tensorflow-original colored text-4xl"></i>,
          description: "Machine learning",
        },
        {
          name: "PyTorch",
          logo: <i className="devicon-pytorch-original colored text-4xl"></i>,
          description: "Deep learning",
        },
        {
          name: "Three.js",
          logo: <i className="devicon-threejs-original colored text-4xl"></i>,
          description: "3D graphics",
        },
        {
          name: "Arduino",
          logo: <i className="devicon-arduino-plain colored text-4xl"></i>,
          description: "Hardware programming",
        },
        // {
        //   name: "Raspberry Pi",
        //   logo: <i className="devicon-raspberrypi-line colored text-4xl"></i>,
        //   description: "Single-board computer",
        // },
        {
          name: "Spring Boot",
          logo: <i className="devicon-spring-plain colored text-4xl"></i>,
          description: "Java framework",
        },
        // {
        //   name: "Flutter",
        //   logo: <i className="devicon-flutter-plain colored text-4xl"></i>,
        //   description: "Cross-platform mobile",
        // },
        {
          name: "React Native",
          logo: <i className="devicon-react-original colored text-4xl"></i>,
          description: "Mobile development",
        },
      ],
    },
  };


  // Rest of your component remains the same...
  return (
    <section id="skills" className="py-7 pt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for modern software development
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-200 ${
                activeCategory === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:bg-secondary"
              }`}
            >
              {category.icon}
              <span className="ml-2 font-medium">{category.title}</span>
            </button>
          ))}
        </div>


        {/* Skills Grid */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            {skillCategories[activeCategory].title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex items-center mb-3">
                  <div className="mr-4 group-hover:scale-110 transition-transform duration-200">
                    {skill.logo}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Additional Info - same as before */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-200 hover:scale-105">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Full-Stack Development
            </h3>
            <p className="text-muted-foreground text-sm">
              End-to-end web application development with modern technologies
            </p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-200 hover:scale-105">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              AI Integration
            </h3>
            <p className="text-muted-foreground text-sm">
              Implementing AI-powered features and machine learning solutions
            </p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-200 hover:scale-105">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              IoT Development
            </h3>
            <p className="text-muted-foreground text-sm">
              Building smart devices and automation systems with Arduino
            </p>
          </div>
        </div>
      </div>


      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};


export default Skills;
