'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Code2 } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: '/api/placeholder/600/400',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/ArunimaAgrawal /ArunimaAgrawal',
      liveUrl: 'https://example.com',
      date: '2024',
      category: 'Full Stack',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: '/api/placeholder/600/400',
      techStack: ['React', 'Express', 'Socket.io', 'MongoDB', 'Material-UI'],
      githubUrl: 'https://github.com/ArunimaAgrawal ',
      liveUrl: 'https://example.com',
      date: '2024',
      category: 'Web App',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard displaying current conditions, forecasts, and weather maps with location-based data.',
      image: '/api/placeholder/600/400',
      techStack: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      githubUrl: 'https://github.com/ArunimaAgrawal ',
      liveUrl: 'https://example.com',
      date: '2023',
      category: 'Frontend',
      featured: false,
    },
    {
      id: 4,
      title: 'API Documentation Portal',
      description: 'Comprehensive API documentation portal with interactive testing capabilities and developer-friendly interface.',
      image: '/api/placeholder/600/400',
      techStack: ['Svelte', 'Swagger', 'JavaScript', 'CSS'],
      githubUrl: 'https://github.com/ArunimaAgrawal ',
      liveUrl: 'https://example.com',
      date: '2023',
      category: 'Documentation',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="films" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Films</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent projects and creative work, demonstrating my skills 
            in modern web development and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 flex items-center gap-2"
          >
            <Code2 className="text-primary" size={24} />
            Featured Projects
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Code2 size={32} className="text-primary" />
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {project.date}
                        </span>
                        <span className="bg-muted px-2 py-1 rounded text-xs">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-muted text-xs px-2 py-1 rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 border border-border px-4 py-2 rounded-lg font-medium hover:bg-muted transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8 flex items-center gap-2"
          >
            Other Projects
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Project Image */}
                <div className="relative h-32 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Code2 size={20} className="text-primary" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h4>
                    <span className="bg-muted text-xs px-2 py-1 rounded text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-1 bg-primary text-primary-foreground px-3 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-1 border border-border px-3 py-2 rounded text-sm font-medium hover:bg-muted transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
