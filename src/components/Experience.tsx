import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, ExternalLink, Code2 } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'TAP Academy',
    location: 'Bangalore',
    duration: 'Internship',
    description: 'Gaining hands-on experience in full-stack web development. Built FoodyHub, a full-stack food delivery web application, strengthening skills in Java, Servlets, JSP, JDBC, and frontend technologies.',
    project: {
      name: 'FoodyHub',
      link: 'https://github.com/AbhiramC-071204/FoodyHub',
    },
    certificate: 'https://drive.google.com/file/d/1bYckGKqR2yLzNYH8RvnDfR4Q4IA2ML57/view?usp=drivesdk',
  },
];

export const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
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
              05. Experience
            </motion.span>
            <h2 className="section-title mt-2">Where I've Worked</h2>
            <p className="section-subtitle mx-auto mt-4">
              My professional journey and hands-on learning experience
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:-translate-x-1/2" />
                
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary glow-primary transform md:-translate-x-1/2" />

                {/* Card */}
                <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                  <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <span className="text-primary font-mono text-sm">{exp.duration}</span>
                  </div>
                  
                  <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="glass-card rounded-2xl p-6 hover:glow-primary transition-all duration-300 group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {exp.project && (
                          <a
                            href={exp.project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary hover:bg-primary/10 transition-colors group/link"
                          >
                            <Code2 className="w-4 h-4" />
                            {exp.project.name} Project
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        )}
                        {exp.certificate && (
                          <a
                            href={exp.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary hover:bg-primary/10 transition-colors group/link"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Certificate
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
