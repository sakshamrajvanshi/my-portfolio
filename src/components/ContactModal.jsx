// ContactModal.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactModal = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white text-black p-6 rounded-lg w-96 shadow-xl"
      >
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <form className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            rows="3"
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Send
          </button>
        </form>
        <button onClick={() => setShowModal(false)} className="mt-4 text-indigo-600 hover:underline">
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ContactModal;
