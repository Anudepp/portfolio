import React from 'react';

interface TimelineItemProps {
  position: string;
  company: string;
  location: string;
  period: string;
  isLast: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  position,
  company,
  location,
  period,
}) => {
  return (
    <div className="relative pl-10 pb-12 last:pb-0">
      {/* Timeline vertical line */}
      <span className="absolute left-2.5 top-1 w-0.5 h-full bg-gradient-to-b from-primary-600 to-secondary-500"></span>

      {/* Timeline dot */}
      <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 border-2 border-white shadow-md"></span>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-400">{position}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
        <span className="text-sm text-secondary-600 dark:text-secondary-400 mt-2 block">{period}</span>
      </div>
    </div>
  );
};

export default TimelineItem;