// Hero.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ContactModal from './ContactModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Saksham Rajvanshi</h1>
        <TypeAnimation
          sequence={[
            'Web Developer 💻',
            1000,
            'MERN Stack Developer 🛠️',
            1000,
            'UI/UX Enthusiast 🎨',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-white"
        />

        <div className="mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-purple-200 transition-all"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {showModal && <ContactModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Hero;
