// About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-white px-6 py-20 text-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto text-lg leading-relaxed bg-gray-50 p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="mb-4">
          I'm <span className="font-semibold text-indigo-600">Saksham Rajvanshi</span>, a passionate web developer from Bijnor, Uttar Pradesh. I hold a BE in Computer Science with specialization in AIML from Chandigarh University.
        </p>

        <p className="mb-4">
          I love building web applications using modern technologies like <span className="font-semibold">HTML, CSS, JavaScript</span> and frameworks like <span className="font-semibold">React and the MERN stack</span>. I’m currently sharpening my skills in backend development and full-stack projects.
        </p>

        <p className="mb-4">
          I aim to create responsive, accessible, and visually engaging user experiences — blending clean code with creativity.
        </p>

        <p>
          In the next 1-2 years, I see myself working in a product-based company, building impactful apps and growing into a full-stack engineer.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
