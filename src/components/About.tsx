import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Coffee, Lightbulb, Target } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', value: 'Focus' },
  { icon: Coffee, label: 'Problem Solving', value: 'Passion' },
  { icon: Lightbulb, label: 'Quick Learner', value: 'Trait' },
  { icon: Target, label: 'Goal Oriented', value: 'Approach' },
];

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm"
            >
              01. About Me
            </motion.span>
            <h2 className="section-title mt-2">Who I Am</h2>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Main Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a <span className="text-primary">B.Tech student</span> specializing in 
                Computer Science and Engineering (CSM) with a strong interest in Java and 
                web development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy building practical projects using <span className="text-primary">HTML, CSS, and Java</span>, 
                focusing on writing clean and efficient code. Currently, I am gaining hands-on 
                experience through an internship at <span className="text-primary">TAP Academy</span>, where I am 
                strengthening my problem-solving and programming skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am passionate about continuous learning and aspire to grow as a 
                <span className="text-primary"> Java Developer</span> while contributing to real-world 
                software solutions.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl text-center hover:glow-primary transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <p className="text-foreground font-medium text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-xs">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: '1+', label: 'Projects Built' },
              { value: '3+', label: 'Technologies' },
              { value: '2026', label: 'Graduating' },
              { value: '∞', label: 'Learning' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 rounded-xl text-center border-gradient"
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
