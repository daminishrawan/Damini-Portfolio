import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-bg-dark transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-bg-dark transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <a href="mailto:damini1998shrawan29@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors">
                <Mail className="text-accent" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-mono mb-1">Email</div>
                <div className="font-medium">damini1998shrawan29@gmail.com</div>
              </div>
            </a>

            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="p-4 bg-white/5 rounded-2xl">
                <MapPin className="text-accent" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-mono mb-1">Location</div>
                <div className="font-medium">Mumbai, Maharashtra, 400031</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            Damini Shrawan © 2026. All rights reserved.
          </div>
          <div className="text-gray-600 text-sm font-mono">
            Designed & Built with React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
