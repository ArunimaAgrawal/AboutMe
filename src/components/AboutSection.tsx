'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Award, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend', icon: Code, level: 90 },
    { name: 'Backend', icon: Database, level: 85 },
  ];

  const experiences = [
    {
      title: 'Co-founding Engineer',
      company: 'TypeThinkAI',
      period: '2023 - Present',
      description: 'Co-founded and built TypeThinkAI, an AI-powered platform for intelligent content generation and analysis. Led technical architecture, product development, and team building.',
    },
  ];

  const achievements = [
    { icon: Award, title: '5+ Years Experience', description: 'In web development' },
    { icon: Users, title: '50+ Projects', description: 'Successfully delivered' },
    { icon: Globe, title: 'Global Reach', description: 'Clients worldwide' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and 
            bringing ideas to life through code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience in creating 
              digital solutions that make a difference. My journey began with a curiosity about 
              how websites work, and it has evolved into a career dedicated to building 
              innovative applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in modern web technologies and enjoy working on projects that 
              challenge me to learn and grow. When I'm not coding, you can find me exploring 
              new technologies, contributing to open-source projects, or sharing knowledge 
              with the developer community.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon size={20} className="text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h4 className="text-xl font-semibold">{exp.title}</h4>
                  <span className="text-primary font-medium">{exp.period}</span>
                </div>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
              >
                <achievement.icon size={32} className="text-primary" />
              </motion.div>
              <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
              <p className="text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
