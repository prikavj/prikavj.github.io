import { motion } from 'framer-motion';
import AnimatedBlob from '../components/AnimatedBlob';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Blobs Background */}
      <AnimatedBlob className="w-96 h-96 bg-sky-500 top-20 left-20" delay={0} duration={20} />
      <AnimatedBlob className="w-96 h-96 bg-cyan-500 top-40 right-20" delay={5} duration={25} />
      <AnimatedBlob className="w-96 h-96 bg-blue-500 bottom-20 left-1/3" delay={10} duration={30} />
      <AnimatedBlob className="w-96 h-96 bg-cyan-400 bottom-40 right-1/3" delay={15} duration={22} />

      <div className="relative z-10 text-center px-4">
        <motion.img
          src="/images/profile/me.png"
          alt="Priyank Avijeet"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-cyan-400/50 shadow-lg mx-auto mb-6"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Hi, I'm</span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gradient-text"
          >
            Priyank Avijeet
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Applied AI Engineer • Software Engineer • HRI Researcher
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full font-semibold hover:glow-effect transition-all cursor-pointer"
          >
            Learn More
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/20 transition-all cursor-pointer"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

