import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    {
      icon: <Mail className="h-6 w-6 text-primary-500" />,
      title: 'Email',
      value: 'anudeep@example.com',
      link: 'mailto:anudeep@example.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary-500" />,
      title: 'Phone',
      value: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent-500" />,
      title: 'Location',
      value: 'Bentonville, Arkansas, USA',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaboration opportunities or just to say hello!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-soft"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>

          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="bg-gray-100 dark:bg-gray-600 h-12 w-12 rounded-full flex items-center justify-center shadow-soft">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;