import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Laptop, Rocket } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a Full-Stack Developer with a passion for creating innovative solutions
              and delivering user-friendly applications. My expertise spans across modern
              web technologies and frameworks.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              With a B.Tech in Computer Science from MRCET (2023), I've developed a
              strong foundation in software development principles and best practices.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Code2 className="w-12 h-12 text-primary-dark dark:text-primary-light mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600 dark:text-gray-400">Writing maintainable and scalable solutions</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <Laptop className="w-12 h-12 text-primary-dark dark:text-primary-light mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
              <p className="text-gray-600 dark:text-gray-400">End-to-end application development</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg col-span-2">
              <Rocket className="w-12 h-12 text-primary-dark dark:text-primary-light mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">Creating cutting-edge solutions</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}