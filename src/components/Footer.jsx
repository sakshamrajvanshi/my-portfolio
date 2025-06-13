// Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
        
        <div className="flex space-x-6 text-2xl">
          <motion.a
            href="https://github.com/sakshamrajvanshi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-indigo-400 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/sakshamrajvanshi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:sakshamrajvanshi.dev@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        <p className="mt-6 text-sm text-gray-400">&copy; {new Date().getFullYear()} Saksham Rajvanshi. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
