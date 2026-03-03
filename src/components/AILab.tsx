import { motion } from "motion/react";
import { Sparkles, Bot, BrainCircuit } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Engineering Lab</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Currently upskilling in LLM integration, agentic workflows, and prompt engineering to build the next generation of intelligent applications.
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
            <Bot className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-3">Agentic Trip Assistant</h3>
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full mb-4">Upcoming</div>
            <p className="text-gray-400">
              An autonomous agent designed to plan, book, and manage luxury itineraries by interacting with internal APIs and external services.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-accent/30 transition-colors group relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-accent/20 transition-colors"></div>
            <BrainCircuit className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-3">Internal OI Copilot</h3>
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full mb-4">Upcoming</div>
            <p className="text-gray-400">
              A context-aware LLM assistant integrated into the Operations Interface to automate data entry, summarize client ledgers, and draft communications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
