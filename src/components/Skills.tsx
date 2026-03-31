import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['HTML', 'CSS', 'JSP'],
    color: 'from-primary to-cyan-400',
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Java', 'Servlets', 'DAO Pattern'],
    color: 'from-accent to-pink-400',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'JDBC'],
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Eclipse', 'VS Code', 'GitHub'],
    color: 'from-orange-400 to-amber-500',
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    skills: ['Lovable', 'ChatGPT', 'Qwen', 'Emergent'],
    color: 'from-violet-400 to-purple-500',
  },
];

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
              02. Skills
            </motion.span>
            <h2 className="section-title mt-2">Technologies I Work With</h2>
            <p className="section-subtitle mx-auto mt-4">
              Building efficient solutions with modern technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:glow-primary transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
                    <category.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="skill-badge hover:scale-105"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              <span className="text-primary">Currently learning:</span> Advanced Java, Spring Framework, and modern web technologies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
