
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactForm() {
  return (
    <div className="w-full bg-white text-black py-20 px-8 md:px-16">
      <h2 className="text-5xl font-bold text-center mb-12">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-black text-white p-8 rounded-2xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-white text-black rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-white text-black rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 mb-4 bg-white text-black rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-black p-3 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details Section */}
        <div className="flex flex-col bg-black text-white p-8 rounded-2xl shadow-lg space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-2xl text-blue-400" />
            <p className="text-lg">+1 234 567 890</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-green-400" />
            <p className="text-lg">info@sundownstudio.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-red-400" />
            <p className="text-lg">123 Main Street, New York, NY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;