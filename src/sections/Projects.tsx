import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const projects = [
  {
    id: 'coffee-beans',
    title: 'CCA - Coffee Beans Export ',
    description: 'An e-commerce platform for premium coffee beans export with catalog, Contact information, and blog.',
    fullDescription: 'Cabinet of Coffee Affairs (CCA) is a comprehensive e-commerce platform designed for the export of premium coffee beans. The site features a detailed product catalog with information about bean varieties, origins, and flavor profiles. The responsive design ensures a great user experience across all devices.',
    image: '/CCA.png',
    url: 'https://cabinet-of-coffee-affairs.vercel.app',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Vercel']
  },
      {
    id: 'coffee-beans',
    title: 'TSC - Online Apparel collection ',
    description: 'Your go-to online destination for effortless style and curated fashion. Discover the latest trends and timeless pieces to elevate your wardrobe, The site features a detailed product catalog with information about apparel, origins, and flavor profiles. The responsive design ensures a great user experience across all devices.',
    fullDescription: 'Your go-to online destination for effortless style and curated fashion. Discover the latest trends and timeless pieces to elevate your wardrobe, The site features a detailed product catalog with information about apparel, origins, and flavor profiles. The responsive design ensures a great user experience across all devices.',
    image: '/2.png',
    url: 'https://tripurasareecollections.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel']
  },
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </section>
  );
};

export default Projects;