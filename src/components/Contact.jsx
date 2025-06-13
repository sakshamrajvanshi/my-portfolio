import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <form 
          action="https://formsubmit.co/sakshamrajvanshi.dev@gmail.com" 
          method="POST"
          className="flex flex-col gap-4"
        >
          <input type="text" name="name" placeholder="Your Name" required className="border p-2" />
          <input type="email" name="email" placeholder="Your Email" required className="border p-2" />
          <textarea name="message" rows="5" placeholder="Your Message" required className="border p-2" />
          <button type="submit" className="bg-cyan-600 text-white py-2 px-4 hover:bg-cyan-700">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
