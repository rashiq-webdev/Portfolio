import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaSun,
  FaMoon,
  FaLaptopCode,
  FaServer,
  FaCodeBranch
} from "react-icons/fa";
import { motion } from "framer-motion";
import resumePDF from "./assets/Mohammed_Rashiq_2025.pdf"; // Place your resume in src/assets/

function App() {
  // Initialize darkMode with fallback false if no localStorage value found
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    // Check system preference if no theme is stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Sync the dark class and localStorage on darkMode change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans px-4 md:px-6 lg:px-8 transition-colors duration-500">
      {/* Toggle Theme Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100 hover:scale-105 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Professional Summary */}
      <motion.section
        className="text-center py-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-indigo-700 dark:text-indigo-300">
          Mohammed Rashiq H
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-3">
          React & MERN Stack Developer | 3+ Years Experience
        </p>
        <p className="mb-4 max-w-2xl mx-auto">
          Passionate about building scalable, high-performance web applications. Proven track record in delivering robust solutions for startups and enterprises. Open to new opportunities in frontend, full-stack, or product engineering roles.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a
            href={resumePDF}
            download
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>
          <a
            href="mailto:rashiqmohammed05@gmail.com"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Contact Me
          </a>
        </div>
        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          <a
            href="mailto:rashiqmohammed05@gmail.com"
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+919042938108"
            className="text-green-500 hover:text-green-700 dark:hover:text-green-400 transition duration-300"
          >
            <FaPhone />
          </a>
          <a
            href="https://linkedin.com/in/mohammed-rashiq-h-74a004139"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 dark:hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black dark:text-gray-100 dark:hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </motion.section>

      {/* Tech Stack Logos */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" title="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" title="Node.js" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-10 h-10 bg-white rounded" title="Express" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10" title="MongoDB" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" title="JavaScript" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10" title="Git" />
      </motion.div>

      {/* Professional Icons */}
      <motion.div
        className="flex flex-wrap justify-center gap-12 py-8 text-3xl sm:text-4xl text-indigo-600 dark:text-indigo-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <FaLaptopCode title="Frontend Developer" />
        <FaServer title="Backend Developer" />
        <FaCodeBranch title="Version Control" />
      </motion.div>

      {/* Animated Sections */}
      {[
        {
          title: "About Me",
          content:
            "React.js developer with 3 years of experience building scalable, user-centric applications. Specialized in MERN stack, full lifecycle development, Agile methodologies, and performance optimization."
        },
        {
          title: "Technical Skills",
          content: (
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Frontend:</strong> React.js, Redux, Context API, Hooks,
                HTML5, CSS3, JavaScript (ES6+), SASS, Styled-components, Ionic
                React, Electron.js
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, REST APIs
              </li>
              <li>
                <strong>Database:</strong> MongoDB, Mongoose
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, GitLab, Postman, Figma,
                Agile
              </li>
              <li>
                <strong>Mobile:</strong> Ionic React
              </li>
            </ul>
          )
        },
        {
          title: "Projects",
          content: (
            <ul className="space-y-3">
              <li>
                <strong>Autoflow:</strong> Built core test automation module
                with Flash Back and AI suggestions.
              </li>
              <li>
                <strong>Edutech App:</strong> Delivered full Ionic app in 15
                days.
              </li>
              <li>
                <strong>Ken42 Suite:</strong> Improved admin/admissions portals
                with usability upgrades.
              </li>
              <li>
                <strong>TurboSettings:</strong> Built drag-and-drop config
                interface with microservices team.
              </li>
              <li>
                <strong>LXL School Cinemas:</strong> Upgraded key modules with
                95% accuracy.
              </li>
            </ul>
          )
        },
        {
          title: "Experience",
          content: (
            <>
              <div>
                <h3 className="font-semibold">Software Engineer – Turbostart</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  July 2022 – Present
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Led frontend features and full-stack modules for various
                    tools and platforms.
                  </li>
                  <li>Built and deployed test automation and education applications.</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Mentor – Sri Ramakrishna School</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  July 2019 – June 2022
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Guided students in tech projects and hands-on sessions.</li>
                </ul>
              </div>
            </>
          )
        },
        {
          title: "Education",
          content: (
            <p>
              <strong>B.Sc. Electronic & Communication Systems</strong> – SNR Sons
              College, 2019
            </p>
          )
        },
        {
          title: "Certifications & Achievements",
          content: (
            <ul className="list-disc list-inside">
              <li>MERN Stack Developer – Nschool Academy (2022)</li>
              <li>Reduced app load time by 30%</li>
              <li>Recognized for innovation in Autoflow features</li>
            </ul>
          )
        }
      ].map((section, i) => (
        <motion.section
          key={i}
          className="max-w-5xl mx-auto py-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
            {section.title}
          </h2>
          <div className="text-gray-700 dark:text-gray-200 leading-relaxed">
            {section.content}
          </div>
        </motion.section>
      ))}

      {/* Contact Section */}
      <motion.section
        className="max-w-5xl mx-auto py-12 text-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg mt-12 transition-colors duration-500"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300">
          Let's Connect!
        </h2>
        <p className="mb-1">
          <a
            href="mailto:rashiqmohammed05@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            rashiqmohammed05@gmail.com
          </a>
        </p>
        <p className="mb-1">
          <a
            href="tel:+919042938108"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            +91 90429 38108
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/mohammed-rashiq-h-74a004139"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            linkedin.com/in/mohammed-rashiq-h-74a004139
          </a>
        </p>
      </motion.section>
    </div>
  );
}

export default App;
