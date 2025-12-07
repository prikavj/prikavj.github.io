import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import AnimatedBlob from '../components/AnimatedBlob';
import experienceData from '../data/experience.json';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  image?: string;
  bullets: string[];
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setExperiences(experienceData as Experience[]);
  }, []);

  return (
    <section id="experience" className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Blobs */}
      <AnimatedBlob className="w-96 h-96 bg-cyan-500 top-0 right-0" delay={0} />
      <AnimatedBlob className="w-96 h-96 bg-sky-400 bottom-0 left-0" delay={15} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center gradient-text"
        >
          Experience
        </motion.h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hoverEffect="tilt" className="relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div className="flex gap-4 items-start">
                    {exp.image && !exp.image.endsWith('.html') && (
                      <motion.img
                        src={exp.image}
                        alt={exp.company}
                        className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl bg-white/10 p-3 flex-shrink-0 border border-white/20"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                      <p className="text-xl text-cyan-400 mb-2">{exp.company}</p>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-gradient-to-r from-sky-500/30 to-cyan-500/30 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3 text-gray-300">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

