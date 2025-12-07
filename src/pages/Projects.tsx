import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import AnimatedBlob from '../components/AnimatedBlob';
import projectsData from '../data/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  period?: string;
  link?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData as Project[]);
  }, []);

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Blobs */}
      <AnimatedBlob className="w-96 h-96 bg-sky-500 top-0 left-1/4" delay={0} />
      <AnimatedBlob className="w-96 h-96 bg-cyan-500 bottom-0 right-1/4" delay={15} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center gradient-text"
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card hoverEffect="tilt" className="h-full">
                <div className="flex items-start justify-between mb-3">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold text-white gradient-text hover:opacity-80 transition-opacity"
                    >
                      {project.title} →
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold text-white gradient-text">
                      {project.title}
                    </h3>
                  )}
                  {project.period && (
                    <span className="px-3 py-1 bg-gradient-to-r from-sky-500/30 to-cyan-500/30 rounded-full text-xs font-semibold text-gray-300 whitespace-nowrap ml-2">
                      {project.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 rounded-full text-xs text-gray-300 border border-sky-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

