import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  position: string;
  company: string;
  location: string;
  period: string;
  isLast?: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  position, 
  company, 
  location, 
  period, 
  isLast = false,
  index
}) => {
  return (
    <motion.div 
      className="flex items-start relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 top-5 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
      )}
      
      {/* Timeline dot */}
      <div className="relative z-10 mt-1.5">
        <div className="h-8 w-8 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="ml-6 pb-12">
        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
          {period}
        </span>
        <h3 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">
          {position}
        </h3>
        <h4 className="text-lg font-medium mt-1 text-gray-800 dark:text-gray-200">
          {company}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {location}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;