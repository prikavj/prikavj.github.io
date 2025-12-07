import { motion } from 'framer-motion';
import Card from '../components/Card';
import AnimatedBlob from '../components/AnimatedBlob';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/priyank-avijeet-334418121',
    icon: '💼',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/prikavj',
    icon: '💻',
    color: 'from-gray-700 to-gray-800',
  },
  {
    name: 'Email',
    url: 'mailto:priyank.avijeet25@gmail.com',
    icon: '✉️',
    color: 'from-sky-500 to-cyan-500',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 overflow-hidden flex items-center">
      {/* Background Blobs */}
      <AnimatedBlob className="w-96 h-96 bg-sky-500 top-20 left-20" delay={0} />
      <AnimatedBlob className="w-96 h-96 bg-cyan-500 bottom-20 right-20" delay={10} />
      <AnimatedBlob className="w-96 h-96 bg-blue-500 top-1/2 left-1/2" delay={5} />

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center gradient-text"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 text-center mb-12"
        >
          Let's connect and collaborate on exciting projects!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card hoverEffect="glow" className="text-center h-full">
                <div className="text-5xl mb-4">{link.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{link.name}</h3>
                <div className={`w-full h-1 bg-gradient-to-r ${link.color} rounded-full`}></div>
              </Card>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <Card hoverEffect="glow">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📞</div>
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 mb-1">Phone</h3>
                <p className="text-gray-300">+1 (226) 883-2922</p>
              </div>
            </div>
          </Card>
          <Card hoverEffect="glow">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 mb-1">Location</h3>
                <p className="text-gray-300">Waterloo, Ontario, Canada</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card>
            <p className="text-gray-300">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

