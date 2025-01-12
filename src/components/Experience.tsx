import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Associate Engineer',
    company: 'Teksystems Global Services',
    period: 'Oct 2023 – Present',
    description: [
      'Developing and maintaining Java applications',
      'Collaborating with cross-functional teams',
      'Implementing new features and optimizations',
    ],
  },
  {
    title: 'Technical Trainee',
    company: 'Teksystems Global Services',
    period: 'Feb 2023 – June 2023',
    description: [
      'Worked on Java full-stack applications',
      'Learned enterprise development practices',
      'Participated in team projects and training',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-transparent bg-clip-text"
        >
          Professional Experience
        </motion.h2>

        <div ref={ref} className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark" />
              
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-4 border-primary-light dark:border-primary-dark" />

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ml-8">
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase className="w-6 h-6 text-primary-dark dark:text-primary-light" />
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.company}</p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}