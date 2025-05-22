import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  url, 
  onClick 
}) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-soft overflow-hidden cursor-pointer"
      onClick={onClick}
      layout
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white flex items-center hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mr-1">Visit site</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;