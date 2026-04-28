import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  image?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ image, title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {image && (
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        {icon && (
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold mb-2 text-secondary">{title}</h3>
        {description && <p className="text-gray-600 leading-relaxed text-sm flex-1">{description}</p>}
      </div>
    </motion.div>
  );
};
