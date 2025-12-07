import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../components/Card';
import AnimatedBlob from '../components/AnimatedBlob';
import aboutData from '../data/about.json';
import educationData from '../data/education.json';

export default function About() {
  const [data] = useState(aboutData);

  return (
    <section id="about" className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Blobs */}
      <AnimatedBlob className="w-96 h-96 bg-blue-500 top-0 left-0" delay={0} />
      <AnimatedBlob className="w-96 h-96 bg-sky-500 bottom-0 right-0" delay={10} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mb-8"
        >
          <motion.img
            src="/images/profile/me.png"
            alt="Priyank Avijeet"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-400/50 shadow-lg mb-6"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <Card className="mb-8 w-full">
            <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
              {data.summary}
            </p>
          </Card>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl font-bold mb-6 gradient-text"
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-6">
          {Object.entries(data.skills).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 }}
            >
              <Card hoverEffect="glow" className="mb-4">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {(skills as string[]).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 rounded-full text-sm text-gray-200 border border-sky-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl font-bold mb-6 mt-12 gradient-text"
        >
          Education
        </motion.h2>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <Card hoverEffect="glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-lg text-cyan-400 mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                    {edu.grade && (
                      <p className="text-gray-300 text-sm">
                        <span className="font-semibold text-cyan-400">Grade: </span>
                        {edu.grade}
                      </p>
                    )}
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-sky-500/30 to-cyan-500/30 rounded-full text-sm font-semibold whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

