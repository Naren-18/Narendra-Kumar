import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Globe, Tag } from 'lucide-react';

const projects = [
  {
    title: 'GO4FOOD',
    description: 'A Django-based food delivery app similar to Zomato or Swiggy, featuring real-time order tracking and restaurant management.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000',
    githubUrl: 'https://github.com/Naren-18/go4food',
  },
  {
    title: 'Result Analyzer',
    description: 'Python-based web application for analyzing department-wise semester results with data visualization and reporting features.',
    technologies: ['Python', 'Flask', 'Pandas', 'Chart.js', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000',
    githubUrl: 'https://github.com/Naren-18/result-analyzer',
  },
  {
    title: 'Student Activity Manager',
    description: 'React Native app and website for tracking latecomers in college, featuring attendance management and reporting.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000',
    githubUrl: 'https://github.com/Naren-18/student-activity',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-primary-light/10 dark:bg-primary-dark/10 text-primary-dark dark:text-primary-light"
                    >
                      <Tag className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}