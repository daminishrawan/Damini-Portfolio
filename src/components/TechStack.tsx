import { motion } from "motion/react";
import { Award } from "lucide-react";

const skills = [
  { name: "React 18", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Next.js 14", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "AWS S3", category: "Cloud" },
  { name: "GitHub Actions", category: "CI/CD" },
];

const certifications = [
  "Java Data Structures & Algorithms + LEETCODE (Udemy)",
  "Java and Spring Framework for Beginners with Spring Boot (Udemy)"
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            The Stack & Certifications
          </h2>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-gray-300">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/40 hover:bg-white/10 transition-all group flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{skill.name}</div>
                <div className="text-xs text-gray-500 mt-2 font-mono">{skill.category}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-300">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Award className="text-accent shrink-0 mt-1" size={24} />
                <div className="text-gray-300 font-medium leading-relaxed">{cert}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
