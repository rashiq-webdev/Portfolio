import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Sun,
  Moon,
  Monitor,
  Server,
  GitBranch,
  Download,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Award,
  GraduationCap,
  Briefcase,
  User,
  Wrench
} from "lucide-react";
import resumePDF from "./assets/Mohammed_Rashiq_2025.pdf"
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system preference on mount
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (!mounted) return null;

  const iconMap = {
    frontend: Monitor,
    backend: Server,
    version: GitBranch,
    code: Code,
    database: Database,
    mobile: Smartphone,
    tools: Wrench
  };

  const skills = [
    {
      category: "Frontend",
      icon: "frontend",
      items: ["React.js", "Redux", "Context API", "Hooks", "HTML5", "CSS3", "JavaScript (ES6+)", "SASS", "Styled-components", "Ionic React", "Electron.js"]
    },
    {
      category: "Backend",
      icon: "backend",
      items: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Database",
      icon: "database",
      items: ["MongoDB", "Mongoose"]
    },
    {
      category: "Tools",
      icon: "tools",
      items: ["Git", "GitHub", "GitLab", "Postman", "Figma", "Agile"]
    },
    {
      category: "Mobile",
      icon: "mobile",
      items: ["Ionic React"]
    }
  ];

  const projects = [
    {
      name: "Autoflow",
      description: "Built core test automation module with Flash Back and AI suggestions.",
      tech: ["React", "Node.js", "AI Integration"]
    },
    {
      name: "Edutech App",
      description: "Delivered full Ionic app in 15 days.",
      tech: ["Ionic React", "Mobile Development"]
    },
    {
      name: "Ken42 Suite",
      description: "Improved admin/admissions portals with usability upgrades.",
      tech: ["React", "UI/UX", "Admin Systems"]
    },
    {
      name: "TurboSettings",
      description: "Built drag-and-drop config interface with microservices team.",
      tech: ["React", "Microservices", "Drag & Drop"]
    },
    {
      name: "LXL School Cinemas",
      description: "Upgraded key modules with 95% accuracy.",
      tech: ["React", "System Upgrades"]
    }
  ];

  const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode
      ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'
      : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
      }`}>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${darkMode
            ? 'bg-white/10 border-white/20 text-yellow-300 hover:bg-white/20'
            : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white'
            }`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 ${darkMode ? 'bg-blue-500' : 'bg-purple-300'
            }`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 ${darkMode ? 'bg-purple-500' : 'bg-blue-300'
            }`}></div>
        </div>

        <div className="relative text-center max-w-4xl mx-auto">
          <div className={`inline-block p-1 rounded-full mb-6 ${darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-400 to-purple-400'
            }`}>
            <div className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold ${darkMode ? 'bg-gray-900' : 'bg-white'
              }`}>
              MR
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r ${darkMode
            ? 'from-blue-400 via-purple-400 to-pink-400'
            : 'from-blue-600 via-purple-600 to-pink-600'
            } bg-clip-text text-transparent`}>
            Mohammed Rashiq H
          </h1>

          <p className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            React & MERN Stack Developer
          </p>

          <p className={`text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'
            }`}>
            Passionate about building scalable, high-performance web applications with 3+ years of experience delivering robust solutions for startups and enterprises.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${darkMode
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
              }`}>
              <a
                href={resumePDF}
                download
              >
                <Download size={18} className="inline mr-2" />
                Download Resume
              </a>
            </button>

            <button className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105 ${darkMode
              ? 'border-white/30 text-white hover:bg-white/10'
              : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}>
              <a
                href="mailto:rashiqmohammed05@gmail.com"
              >
                <Mail size={18} className="inline mr-2" />
                Contact Me
              </a>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Mail, href: "mailto:rashiqmohammed05@gmail.com", color: "text-blue-500" },
              { icon: Phone, href: "tel:+919042938108", color: "text-green-500" },
              { icon: Linkedin, href: "https://linkedin.com/in/mohammed-rashiq-h-74a004139", color: "text-blue-600" },
              { icon: Github, href: "https://github.com/", color: "text-gray-700" }
            ].map(({ icon: Icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-white/80 hover:bg-white'
                  } ${color}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Technologies I Work With
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl ${darkMode ? 'bg-white/10 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md shadow-lg'
                  }`}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mx-auto mb-2"
                  style={tech.name === 'Express' ? { filter: darkMode ? 'invert(1)' : 'none' } : {}}
                />
                <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-3xl p-12 ${darkMode ? 'bg-white/5 backdrop-blur-md border border-white/10' : 'bg-white/80 backdrop-blur-md shadow-xl'
            }`}>
            <div className="flex items-center mb-8">
              <User className={`mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={32} />
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                About Me
              </h2>
            </div>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              React.js developer with 3 years of experience building scalable, user-centric applications.
              Specialized in MERN stack, full lifecycle development, Agile methodologies, and performance optimization.
              I'm passionate about creating seamless user experiences and writing clean, maintainable code.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-white/5 backdrop-blur-md border border-white/10' : 'bg-white/80 backdrop-blur-md shadow-lg'
                    }`}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, j) => (
                      <span
                        key={j}
                        className={`px-3 py-1 text-sm rounded-full ${darkMode
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                          }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-white/5 backdrop-blur-md border border-white/10' : 'bg-white/80 backdrop-blur-md shadow-lg'
                  }`}
              >
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.name}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 text-sm rounded-full ${darkMode
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'bg-purple-100 text-purple-700 border border-purple-200'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className={`mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={32} />
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-white/5 backdrop-blur-md border border-white/10' : 'bg-white/80 backdrop-blur-md shadow-lg'
              }`}>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Software Engineer – Turbostart
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                July 2022 – Present
              </p>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Led frontend features and full-stack modules for various tools and platforms</li>
                <li>• Built and deployed test automation and education applications</li>
              </ul>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-white/5 backdrop-blur-md border border-white/10' : 'bg-white/80 backdrop-blur-md shadow-lg'
              }`}>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Mentor – Sri Ramakrishna School
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                July 2019 – June 2022
              </p>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Guided students in tech projects and hands-on sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-white/5 backdrop-blur-md border border-white/10' : 'bg-white/80 backdrop-blur-md shadow-lg'
            }`}>
            <div className="flex items-center mb-6">
              <GraduationCap className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={28} />
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Education
              </h3>
            </div>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>B.Sc. Electronic & Communication Systems</strong><br />
              SNR Sons College, 2019
            </p>
          </div>

          {/* Achievements */}
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-white/5 backdrop-blur-md border border-white/10' : 'bg-white/80 backdrop-blur-md shadow-lg'
            }`}>
            <div className="flex items-center mb-6">
              <Award className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={28} />
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Achievements
              </h3>
            </div>
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• MERN Stack Developer – Nschool Academy (2022)</li>
              <li>• Reduced app load time by 30%</li>
              <li>• Recognized for innovation in Autoflow features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`p-12 rounded-3xl ${darkMode ? 'bg-white/5 backdrop-blur-md border border-white/10' : 'bg-white/80 backdrop-blur-md shadow-xl'
            }`}>
            <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Connect!
            </h2>

            <div className="space-y-4 mb-8">
              <p>
                <a
                  href="mailto:rashiqmohammed05@gmail.com"
                  className={`text-lg font-semibold hover:underline transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                >
                  rashiqmohammed05@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919042938108"
                  className={`text-lg font-semibold hover:underline transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                >
                  +91 90429 38108
                </a>
              </p>
              <p>
                <a
                  href="https://linkedin.com/in/mohammed-rashiq-h-74a004139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg font-semibold hover:underline transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                >
                  LinkedIn Profile
                  <ExternalLink size={16} className="inline ml-1" />
                </a>
              </p>
            </div>

            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Open to new opportunities in frontend, full-stack, or product engineering roles.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
        <p>© 2025 Mohammed Rashiq H. Built with React & ❤️</p>
      </footer>
    </div>
  );
}

export default App;