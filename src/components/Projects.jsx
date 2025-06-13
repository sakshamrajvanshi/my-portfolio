// Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Ecommerce Website',
    description: 'A fully responsive e-commerce platform using MERN stack.',
    link: '#',
  },
  {
    title: 'Driver Drowsiness System',
    description: 'AI-powered system to detect driver fatigue using OpenCV.',
    link: '#',
  },
  {
    title: 'House Price Prediction',
    description: 'ML model predicting house prices with Flask frontend.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen px-6 py-16 bg-gray-100 text-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-indigo-600 hover:underline">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
