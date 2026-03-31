import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Folder, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Animal Detection',
    description: 'The system uses a YOLO-based deep learning model to detect and classify different animals with high accuracy and speed. It processes visual data and draws bounding boxes with class labels, making it suitable for real-time applications.',
    techStack: ['Python', 'Flask', 'OpenCV', 'NumPy', 'YOLO'],
    status: 'In Progress',
    category: 'Machine Learning',
    github: 'https://github.com/AbhiramC-071204/AnimalDetectionusingYoloDLModel',
    live: null,
  },
  {
    title: 'Assistive Webpage',
    description: 'A responsive webpage designed and developed to strengthen front-end web development fundamentals. This project demonstrates how different technologies work together to build interactive and user-friendly web interfaces.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
    category: 'Web Development',
    github: 'https://github.com/AbhiramC-071204/Assistive',
    live: null,
  },
  {
    title: 'FoodyHub',
    description: 'A full-stack Food Delivery web application featuring user authentication, restaurant browsing, cart management, and order placement. Built with a robust backend using Java Servlets and DAO patterns, connected to a database via JDBC for seamless data operations.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'JSP', 'Java', 'Servlets', 'JDBC'],
    status: 'Completed',
    category: 'Full Stack',
    github: 'https://github.com/AbhiramC-071204/FoodyHub',
    live: null,
  },
];

const categories = ['All', 'Machine Learning', 'Web Development', 'Full Stack', 'Java'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm"
            >
              03. Projects
            </motion.span>
            <h2 className="section-title mt-2">Things I've Built</h2>
            <p className="section-subtitle mx-auto mt-4">
              A collection of projects that showcase my skills and interests
            </p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground glow-primary'
                    : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:glow-primary transition-all duration-300 border-gradient">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <Folder className="w-10 h-10 text-primary" />
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 -translate-y-0 group-hover:-translate-y-1 transition-all text-primary" />
                      </div>
                      
                      {/* Status Badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {project.status}
                      </span>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-primary/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => window.open('https://github.com/AbhiramC-071204', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
