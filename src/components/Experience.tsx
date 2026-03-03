import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    date: "Jul 2024 — Present",
    company: "Isprava",
    role: "Software Developer",
    overview: "Leading end-to-end full-stack delivery of luxury hospitality ecosystems. Specializing in architecting scalable React/TypeScript systems, designing robust API integrations, and driving technical parity between business verticals.",
    highlights: [
      "Engineered the Lohono property platform with multi-config checkout, dynamic pricing, and a WhatsApp/SMS integrated referral programme.",
      "Spearheaded the Trip Planner guest app, managing complex state machines for session-based reservations, meal planning, and Web Check-in.",
      "Architected internal operations (LMS/OI) including Food Ordering, KOT flows, and complex financial logic for TDS/Commission and Client Ledgers.",
      "Developed marketing sites (Solene & Chapter) focusing on SEO optimization, multi-step validation forms, and DRY architecture.",
      "Shifted legacy code to modular, component-based structures (React 18, Vite, Recoil) and established repo-wide CI/CD stability patterns."
    ]
  },
  {
    id: 2,
    date: "Jan 2024 — Jul 2024",
    company: "Isprava",
    role: "Frontend Developer Intern",
    overview: "Drove end-to-end delivery for luxury hospitality platforms, focusing on React 18/TypeScript architecture, API integration, and SEO.",
    highlights: [
      "Built core consumer features for the Lohono website including checkout, pricing, and referral systems.",
      "Developed the Trip Planner guest app for meal planning and Web Check-in.",
      "Automated internal operations in Isprava LMS/OI (food ordering, KOT, financial logic).",
      "Maintained and optimized Solene and Chapter marketing sites."
    ]
  }
];

const education = [
  {
    id: 1,
    date: "Mar 2023 — Aug 2023",
    institution: "C-DAC Pune",
    degree: "PG-DMC, Mobile Computing",
    gpa: "6.5",
    description: "Completed a specialized program focused on designing and developing mobile applications. Gained hands-on experience in Android application development, UI/UX implementation, API integration, database management, and performance optimization. Worked on real-time projects involving Java, Android SDK, RESTful services, and responsive mobile design principles."
  },
  {
    id: 2,
    date: "Jun 2017 — Jun 2021",
    institution: "CSVTU Bhilai",
    degree: "B.Tech, Electrical Engineering",
    gpa: "7.4",
    description: "Completed undergraduate studies with a strong foundation in core electrical engineering subjects including Power Systems, Electrical Machines, Control Systems, Power Electronics, and Network Theory. Developed analytical and problem-solving skills while working on circuit design, electrical system analysis, and real-time engineering applications."
  },
  {
    id: 3,
    date: "Mar 2016 — May 2017",
    institution: "B.S.P Senior Secondary School",
    degree: "Higher Secondary (XII)",
    gpa: "6.5",
    description: "Completed Higher Secondary Education with a specialization in Science, focusing on Physics, Chemistry, and Mathematics (PCM). Built a strong analytical and problem-solving foundation through theoretical learning and practical laboratory work."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            My Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-white/5 rounded-xl text-accent">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            <div className="relative border-l border-white/10 ml-4 md:ml-0">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  className="mb-12 relative pl-8 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,229,255,0.8)] group-hover:scale-150 transition-transform duration-300 z-10"></div>
                  
                  <div className="mb-2">
                    <div className="text-accent font-mono text-sm mb-1">{exp.date}</div>
                    <div className="text-xl font-semibold text-white">{exp.role}</div>
                    <div className="text-gray-400 font-medium">{exp.company}</div>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 hover:border-white/10 transition-colors duration-300 mt-4">
                    <p className="text-gray-200 leading-relaxed text-sm mb-4">
                      {exp.overview}
                    </p>
                    <ul className="list-disc pl-4 space-y-2 marker:text-accent/70 text-gray-400 text-sm">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="leading-relaxed">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-white/5 rounded-xl text-accent">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="relative border-l border-white/10 ml-4 md:ml-0">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  className="mb-12 relative pl-8 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,229,255,0.8)] group-hover:scale-150 transition-transform duration-300 z-10"></div>
                  
                  <div className="mb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="text-accent font-mono text-sm">{edu.date}</div>
                      <div className="px-2 py-0.5 bg-white/10 rounded text-xs font-mono text-gray-300">GPA: {edu.gpa}</div>
                    </div>
                    <div className="text-xl font-semibold text-white">{edu.degree}</div>
                    <div className="text-gray-400 font-medium">{edu.institution}</div>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 hover:border-white/10 transition-colors duration-300 mt-4">
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
