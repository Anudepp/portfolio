import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';

const experiences = [
  {
    position: 'Software Engineer Frontend',
    company: 'Walmart Global Tech',
    type: 'Contract',
    location: 'Bentonville, Arkansas, United States',
    period: 'Dec 2021 - July 2024'
  },
  {
    position: 'Cloud Support Engineer',
    company: 'Microsoft',
    type: 'Contract',
    location: 'Irving, Texas, United States',
    period: 'Oct 2019 - Nov 2021'
  },
  {
    position: 'Software Engineer',
    company: 'Cognitive Scale',
    type: 'Contract',
    location: 'Austin, Texas, United States',
    period: 'May 2019 - Sep 2019'
  },
  {
    position: 'Application Developer',
    company: 'CBRE',
    type: 'Contract',
    location: 'Dallas, Texas, United States',
    period: 'Mar 2017 - Apr 2019'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey across various companies and roles in the technology industry.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              position={exp.position}
              company={`${exp.company} · ${exp.type}`}
              location={exp.location}
              period={exp.period}
              isLast={index === experiences.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;