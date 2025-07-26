import { GraduationCap, MapPin, Phone, Mail, Award } from "lucide-react";

const About = () => {
  const achievements = [
    {
      title: "MHT CET",
      score: "99.27 %ile",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "JEE Mains",
      score: "94.51 %ile",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Current CGPA",
      score: "9.56/10",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-7 pt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and building the
            future with code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-5">
                Get to Know Me
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {/* <img src="/profile.png" alt="Chaitanya Shinde" className="w-58 h-60 mx-auto mb-4" /> */}
                I'm a dedicated Computer Engineering student at PICT, Pune, with
                a passion for full-stack development and emerging technologies.
                My journey in tech began in 11th grade, and since then, I've
                been continuously learning and building innovative projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in the MERN stack and have experience with AI/ML
                integration, IoT projects, and modern web/app development practices.
                I'm always eager to take on new challenges and contribute to
                meaningful projects.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span>Pune, India 411044</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <span>+91 9373954169</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <span>9chaitanyashinde@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Achievements */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      B.E Computer Engineering
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">
                    PUNE INSTITUTE OF COMPUTER TECHNOLOGY
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Expected August 2027 • CGPA: 9.56/10 (Till Sem 3)
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <h4 className="font-semibold text-foreground mb-1">
                    12th HSC
                  </h4>
                  <p className="text-muted-foreground text-sm mb-1">
                    Shri Fattechand Jain Jr. College
                  </p>
                  <p className="text-muted-foreground text-sm">
                    May 2023 • 88%
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <h4 className="font-semibold text-foreground mb-1">
                    10th SSC
                  </h4>
                  <p className="text-muted-foreground text-sm mb-1">
                    CMS English Medium Higher Secondary School
                  </p>
                  <p className="text-muted-foreground text-sm">
                    May 2023 • 85.20%
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        {achievement.icon}
                      </div>
                      <span className="font-medium text-foreground">
                        {achievement.title}
                      </span>
                    </div>
                    <span className="text-primary font-semibold">
                      {achievement.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
