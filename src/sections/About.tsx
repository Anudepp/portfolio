import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layers } from 'lucide-react';

const skillsData = [
  {
    title: 'Frontend',
    icon: <Code className="h-6 w-6 text-primary-500" />,
    skills: ['React.js', 'Redux', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: <Server className="h-6 w-6 text-secondary-500" />,
    skills: ['Python', 'Django', 'REST APIs']
  },
  {
    title: 'Database',
    icon: <Database className="h-6 w-6 text-accent-500" />,
    skills: ['SQL', 'PostgreSQL', 'MongoDB']
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am Anudeep, an experienced Software Engineer specializing in building scalable, high-performance web applications. I'm proficient in React.js and Redux, crafting intuitive and dynamic user interfaces.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My skills extend to JavaScript, Python, and Django, leveraging these technologies to develop robust and efficient solutions. I'm passionate about code optimization and scalability, implementing advanced techniques like code splitting and memoization.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
               My experience with Azure cloud services has enhanced application reliability and performance.
            </p>
            <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
              "I'm passionate about nurturing young minds and inspiring a love of learning. Teaching children brings me immense joy and fulfillment. I'm always seeking opportunities to make a positive impact on the next generation."
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-soft"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold ml-2">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 dark:text-gray-300 text-sm">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;