import { useState, useEffect } from 'react';
import './App.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);
  const themeClasses = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen ${themeClasses} transition-all duration-300`}>
     {/* Navbar in a visible box */}
<div className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-3 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
  <div className={`rounded-xl shadow-lg px-6 py-4 border ${darkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}>
    
    {/* Theme Toggle */}
    <div className="flex justify-end mb-2">
      <button
        onClick={toggleTheme}
        className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition duration-300"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </div>

    {/* Nav Links */}
    <ul className="flex justify-evenly items-center text-sm sm:text-base font-medium">
      <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
      <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
      <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
      <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
      <li><a href="#resume" className="hover:text-blue-400 transition-colors">Resume</a></li>
      <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
    </ul>
  </div>
</div>



<div className="pt-[120px] px-4 space-y-20">
        {/* Home + About + Skills + Projects + Resume + Contact as Main Content Box */}
        <main className="border border-gray-600 rounded-xl p-6">
          {/* Home */}
          <section id="home" className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-2">Saksham Rajvanshi</h1>
            <p className="text-lg">Web Developer | MERN Stack | React Enthusiast</p>
          </section>

          {/* About */}
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-center">👋 About Me</h2>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              I'm a passionate Web Developer with a strong interest in creating user-friendly, responsive, and fast websites. Currently learning the MERN stack and building cool projects using React and Tailwind CSS.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">🛠 Skills</h2>
            <div className="flex flex-wrap justify-center gap-10 text-5xl">
              <FaHtml5 className="hover:scale-125 transition-transform text-orange-600" title="HTML" />
              <FaCss3Alt className="hover:scale-125 transition-transform text-blue-500" title="CSS" />
              <FaJs className="hover:scale-125 transition-transform text-yellow-400" title="JavaScript" />
              <FaReact className="hover:rotate-180 transition-transform text-cyan-400" title="React" />
              <SiTailwindcss className="hover:scale-125 transition-transform text-blue-300" title="Tailwind CSS" />
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">💻 Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">Driver Drowsiness Detection</h3>
                <p>An AI-based system to monitor driver's alertness using computer vision.</p>
              </div>
              <div className="p-4 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">House Price Prediction</h3>
                <p>A machine learning model to predict housing prices based on various factors.</p>
              </div>
              <div className="p-4 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
                <p>A full-stack e-commerce platform with product listings, cart, and payment flow.</p>
              </div>
            </div>
          </section>

          {/* Resume */}
          <section id="resume" className="text-center mb-16">
  <h2 className="text-2xl font-semibold mb-4">📄 Resume</h2>
  <div className="flex justify-center items-center space-x-100">
    <a
      href="/Saksham-Rajvanshi-Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      View Resume
    </a>
    <a
      href="/Saksham-Rajvanshi-Resume.pdf"
      download
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Download Resume
    </a>
  </div>
</section>


          {/* Contact */}
          <section id="contact" className="max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">📬 Contact Me</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center p-6 border border-gray-500 rounded-xl">
          <p className="mb-2 font-bold">Connect with me:</p>
          <div className="flex justify-center gap-6 text-3xl">
            <a href="https://github.com/sakshamrajvanshi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/saksham-rajvanshi-04a80136a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
          </div>
          <p className="mt-4 text-sm">© {new Date().getFullYear()} Saksham Rajvanshi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
