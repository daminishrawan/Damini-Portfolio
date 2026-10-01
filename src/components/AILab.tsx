import { motion } from "motion/react";
import { Sparkles, Bot, Code2 } from "lucide-react";

export default function AILab() {
  return (
    <section id="ai-lab" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-2xl mb-6">
            <Sparkles className="text-accent w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Generative AI & Tooling</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Practical experience integrating LLMs, prompt engineering, and building dynamic UI architectures for the modern web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-accent/30 transition-colors group relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-accent/20 transition-colors"></div>
            <Code2 className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-3">Meet My AI Assistant</h3>
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full mb-4">Featured Project</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I built a custom RAG (Retrieval-Augmented Generation) pipeline to help you explore my background. Instead of reading a static resume, you can chat directly with this AI assistant. It's grounded in my actual project history, tech stack, and career milestones. Ask it about my work, and watch the 'RAG Inspector' panel to see exactly how it retrieves real data from my vector database to answer your questions!
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-accent rounded-full">Gemini 3.5 Flash</span>
              <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-accent rounded-full">ChromaDB</span>
              <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-accent rounded-full">LangChain</span>
              <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-accent rounded-full">FastAPI</span>
              <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 text-accent rounded-full">RAG Architecture</span>
            </div>
          </motion.div>

          <motion.div
            className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-accent/30 transition-colors group relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-accent/20 transition-colors"></div>
            <Bot className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-3">LLM Integration & Workflows</h3>
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full mb-4">Core Skill</div>
            <p className="text-gray-400">
              Proficient in designing scalable system architectures that incorporate AI capabilities, utilizing context-aware prompt design, tool calling, and structured JSON outputs to bridge large language models with reliable frontend user interfaces.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
