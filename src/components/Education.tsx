import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institute: 'Siddharth Institute of Engineering and Technology',
    location: 'Tirupati',
    status: 'Graduating 2026',
    description: 'CGPA: 8.4',
    icon: GraduationCap,
  },
];

const certifications = [
  {
    name: 'Java Certification',
    platform: 'Besant Technologies',
    date: 'August 2025',
    skills: ['Java'],
    verification: 'https://media.licdn.com/dms/image/v2/D562DAQGsGi5QaIrb1g/profile-treasury-image-shrink_800_800/B56ZuHaTL8HgAY-/0/1767503378833?e=1768237200&v=beta&t=tFblSPSjCk5QuKqXMOavdfOhbGfObuC1Z3rcnNaPA6s',
  },
];

export const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
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
              04. Education & Certifications
            </motion.span>
            <h2 className="section-title mt-2">Academic Journey</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>

              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="glass-card rounded-2xl p-6 hover:glow-primary transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium mb-2">{edu.institute}</p>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <div className="glass-card px-4 py-2 rounded-lg">
                      <p className="text-foreground font-semibold">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>

              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass-card rounded-2xl p-6 hover:glow-primary transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-muted-foreground">{cert.platform}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {cert.date}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="skill-badge text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {cert.verification && (
                      <a
                        href={cert.verification}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-primary text-sm hover:underline"
                      >
                        View Certificate →
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
