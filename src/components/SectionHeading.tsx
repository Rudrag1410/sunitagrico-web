import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-secondary mb-4 relative inline-block"
      >
        {title}
        <span className={`absolute -bottom-2 h-1 bg-primary rounded-full w-16 ${centered ? 'left-1/2 -translate-x-1/2' : 'left-0'}`}></span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-2xl text-lg mt-4"
          style={{ margin: centered ? '1rem auto 0' : '1rem 0 0' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
