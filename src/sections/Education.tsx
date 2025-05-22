import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Science (MS) in Computer Science',
    institution: 'Fairleigh Dickinson University',
    period: '2015 - 2017',
    icon: <GraduationCap className="h-12 w-12 text-primary-500" />
  },
  {
    degree: 'Bachelor of Technology',
    institution: 'JNTUH',
    period: '2009 - 2013',
    icon: <GraduationCap className="h-12 w-12 text-secondary-500" />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-soft p-6"
            >
              <div className="flex flex-col items-center text-center">
                {edu.icon}
                
                <h3 className="text-xl font-bold mt-4 mb-2">
                  {edu.degree}
                </h3>
                
                <h4 className="text-lg text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </h4>
                
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;