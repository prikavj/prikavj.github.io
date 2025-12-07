import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import AnimatedBlob from '../components/AnimatedBlob';
import educationData from '../data/education.json';

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  image?: string;
}

export default function Education() {
  const [educations, setEducations] = useState<Education[]>([]);

  useEffect(() => {
    setEducations(educationData as Education[]);
  }, []);

  return (
    <section id="education" className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Blobs */}
      <AnimatedBlob className="w-96 h-96 bg-cyan-500 top-0 left-0" delay={0} />
      <AnimatedBlob className="w-96 h-96 bg-blue-500 bottom-0 right-0" delay={10} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center gradient-text"
        >
          Education
        </motion.h1>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hoverEffect="tilt" className="relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-4 items-start">
                    {edu.image && (
                      <motion.img
                        src={edu.image}
                        alt={edu.institution}
                        className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl bg-white/10 p-3 flex-shrink-0 border border-white/20"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-xl text-cyan-400 mb-2">{edu.institution}</p>
                      <p className="text-gray-400 mb-2">{edu.location}</p>
                      {edu.grade && (
                        <p className="text-gray-300">
                          <span className="font-semibold text-cyan-400">Grade: </span>
                          {edu.grade}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-gradient-to-r from-sky-500/30 to-cyan-500/30 rounded-full text-sm font-semibold">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

