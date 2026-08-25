import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const WireframeGlobe = () => {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-96 md:h-96 opacity-80"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-accent fill-transparent stroke-[0.5]">
        <circle cx="50" cy="50" r="48" className="stroke-accent/30" />
        <ellipse cx="50" cy="50" rx="48" ry="15" className="stroke-accent/50" />
        <ellipse cx="50" cy="50" rx="15" ry="48" className="stroke-accent/50" />
        <path d="M 15 15 L 85 85 M 15 85 L 85 15" className="stroke-accent/30" />
        <circle cx="50" cy="50" r="30" className="stroke-accent/40 stroke-dashed" strokeDasharray="2 2" />
        <circle cx="15" cy="15" r="2" className="fill-accent stroke-none" />
        <circle cx="85" cy="85" r="2" className="fill-accent stroke-none" />
        <circle cx="15" cy="85" r="2" className="fill-accent stroke-none" />
        <circle cx="85" cy="15" r="2" className="fill-accent stroke-none" />
        <circle cx="50" cy="2" r="2" className="fill-accent stroke-none" />
        <circle cx="50" cy="98" r="2" className="fill-accent stroke-none" />
        <circle cx="2" cy="50" r="2" className="fill-accent stroke-none" />
        <circle cx="98" cy="50" r="2" className="fill-accent stroke-none" />
      </svg>
      <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full -z-10 mix-blend-screen"></div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Damini Shrawan
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-medium text-accent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Senior Frontend Engineer | AI Integration
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack & Frontend Engineer with 2+ Years of Production Experience. Building high-scale UI architectures using React 18, TypeScript, Next.js, Node.js, and integrating practical Generative AI capabilities.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-accent text-bg-dark font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <a 
              href="/api/generate-cv" 
              target="_blank"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors hover:scale-110 transform duration-200">
              <Github size={24} />
            </a>
            <a href="mailto:damini1998shrawan29@gmail.com" className="text-gray-400 hover:text-accent transition-colors hover:scale-110 transform duration-200">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <WireframeGlobe />
        </motion.div>
      </div>
    </section>
  );
}
