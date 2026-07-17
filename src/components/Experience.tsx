import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ExternalLink, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'TAP Academy',
    location: 'Tirupati',
    duration: 'Ongoing',
    type: 'Internship',
    description: 'Gaining hands-on experience in full-stack development, building responsive web applications, and strengthening problem-solving skills through real-world projects.',
    certificate: 'https://drive.google.com/file/d/1bYckGKqR2yLzNYH8RvnDfR4Q4IA2ML57/view?usp=drivesdk',
    highlights: ['Full Stack Development', 'Web Applications', 'Problem Solving', 'Real-World Projects'],
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
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
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
            <h2 className="section-title mt-2">Work Experience</h2>
            <p className="section-subtitle mx-auto mt-4">
              Professional experience and internships that shaped my journey
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center glow-primary z-10">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 glass-card rounded-2xl p-6 md:p-8 hover:glow-primary transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-5 h-5 text-primary md:hidden" />
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground md:text-right">
                        <div className="flex items-center gap-2 md:justify-end">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{exp.duration}</span>
                        </div>
                        <p className="mt-1">{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="skill-badge text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Certificate Link */}
                    {exp.certificate && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 text-primary hover:bg-primary/10"
                        onClick={() => window.open(exp.certificate, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    )}
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
