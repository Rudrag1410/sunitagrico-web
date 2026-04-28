import React from 'react';
import { motion } from 'framer-motion';

export const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/918319395925"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path fillRule="evenodd" d="M12.031 21.059h-.012c-1.637 0-3.23-.44-4.636-1.272l-5.161 1.353 1.38-5.034a9.98 9.98 0 01-1.346-4.992C2.256 5.614 6.643 1.25 12.062 1.25S21.87 5.614 21.87 11.164s-4.387 9.895-9.84 9.895zm4.846-6.143c-.266-.134-1.572-.777-1.815-.866-.242-.089-.418-.134-.594.133-.176.267-.684.866-.838 1.044-.153.178-.307.201-.573.067-.266-.134-1.121-.413-2.136-1.316-.788-.702-1.321-1.57-1.474-1.838-.153-.267-.016-.411.117-.544.119-.119.266-.312.4-.467.133-.156.178-.267.266-.445.088-.178.044-.334-.022-.467-.066-.134-.594-1.433-.815-1.961-.215-.515-.434-.445-.594-.453l-.508-.008c-.176 0-.462.067-.704.334-.242.267-.924.903-.924 2.2s.946 2.548 1.078 2.727c.133.178 1.862 2.844 4.512 3.987.632.272 1.124.435 1.509.557.634.202 1.21.173 1.666.105.514-.077 1.572-.642 1.792-1.262.22-.62.22-1.15.154-1.262-.066-.112-.242-.178-.508-.312z" clipRule="evenodd" />
      </svg>
    </motion.a>
  );
};
