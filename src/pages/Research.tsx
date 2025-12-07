import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import AnimatedBlob from '../components/AnimatedBlob';
import researchData from '../data/research.json';

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: string;
  description: string;
  link: string;
}

export default function Research() {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    setPublications(researchData as Publication[]);
  }, []);

  return (
    <section id="research" className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Blobs */}
      <AnimatedBlob className="w-96 h-96 bg-blue-500 top-20 left-20" delay={0} />
      <AnimatedBlob className="w-96 h-96 bg-sky-500 bottom-20 right-20" delay={10} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center gradient-text"
        >
          Research Publications
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hoverEffect="glow" className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 gradient-text">
                  {pub.title}
                </h3>
                <p className="text-cyan-400 text-sm mb-2">{pub.authors}</p>
                <p className="text-gray-400 text-sm mb-3">
                  {pub.venue} • {pub.year}
                </p>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {pub.description}
                </p>
                {pub.link && (
                  <motion.a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold inline-flex items-center gap-2"
                  >
                    Read Paper →
                  </motion.a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

