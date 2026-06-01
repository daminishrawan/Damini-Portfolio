import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    date: "Jul 2024 — Present",
    company: "Isprava / Lohono Stays",
    role: "Software Developer",
    overview: "Leading end-to-end full-stack development of luxury hospitality ecosystems. Specialing in architecting scalable React/TypeScript systems, robust API integrations, and driving technical parity across properties.",
    isCurrent: true,
    highlights: [
      "Core frontend engineer on lohono.com, owning the full booking funnel (discovery, listing, detail, checkout, Razorpay) and shipping greenfield surfaces from scratch – Property Cluster (multi-villa) with full-stack Express review/recommendation APIs, Referral Programme, Harmony Weddings, and Schedule Callback – across 100 commits and PRs over 21 months.",
      "Built the Lohono Trip Planner guest app from scratch (React 18, TypeScript, Vite 6, Tailwind CSS, Recoil, Radix/Shadcn UI) with 11+ custom REST API hooks for meal ordering and a multi-guest Web Check-in KYC flow; refactored a 2,300-line monolith into hook-driven modules, removing 1,100+ lines across 81 files – 9 PRs and 25+ tickets in 2.5 months.",
      "Delivered the Isprava LMS internal CRM across 5 product verticals (React 18, MUI, JsSIP/WebRTC, Sentry) – a 15+ component villa food-ordering system with KOT printing, Client Ledger with preview-gated downloads, Delivery Tracker, and the Rental Trip Details revamp; centralized a shared currency utility and added Jest/RTL coverage.",
      "Sole frontend owner of the Solene membership platform – multi-step application form with complex validation, preview mode, and cross-page state retention; rebuilt the marketing site, shipped JSON-driven legal pages, and configured SEO sitemap, AWS S3/CloudFront, GitHub Actions CI/CD, and n8n webhook submissions."
    ]
  },
  {
    id: 2,
    date: "Jan 2024 — Jul 2024",
    company: "Isprava / Lohono Stays",
    role: "Frontend Developer Intern",
    overview: "Drove end-to-end delivery for luxury hospitality platforms, focusing on React 18/TypeScript architecture, API integration, and SEO.",
    highlights: [
      "Engineered an appointment scheduling system (date picker, time-slot carousel, rescheduling, edge-case handling) and a scroll-aware calendar positioning hook that resolved recurring date-picker defects across listing, detail, and collection pages.",
      "Built a multi-step lead capture form (Next.js 14) with OTP verification, Google reCAPTCHA v3, UTM tracking, and GTM event instrumentation – an end-to-end form pipeline from UI through CRM lead submission."
    ]
  }
];

const education = [
  {
    id: 0,
    date: "16 Aug 2026 — Aug 2028 (Expected)",
    institution: "Indian Institute of Technology, Jodhpur (IIT Jodhpur)",
    degree: "Executive M.Tech in Artificial Intelligence",
    gpa: "Upcoming",
    description: "Specialized advanced program focusing on Machine Learning, Deep Learning, Artificial Intelligence, Optimization for Data Science, Advanced Data Structures & Algorithms, ML-Ops & DL-Ops, NLP, Computer Vision, and Advanced AI & Autonomous Systems."
  },
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
              {experiences.map((exp, index) => {
                const isCurrent = 'isCurrent' in exp && exp.isCurrent;
                return (
                  <motion.div 
                    key={exp.id}
                    className="mb-12 relative pl-8 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full transition-all duration-300 z-10 ${
                      isCurrent 
                        ? 'bg-accent shadow-[0_0_15px_rgba(0,229,255,1)] ring-4 ring-accent/20 scale-125' 
                        : 'bg-accent shadow-[0_0_10px_rgba(0,229,255,0.8)] group-hover:scale-150'
                    }`}></div>
                    
                    <div className="mb-2">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <div className="text-accent font-mono text-sm">{exp.date}</div>
                        {isCurrent && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-accent/10 text-accent border border-accent/20 tracking-wider uppercase font-mono animate-pulse">
                            Active Highlighted Role
                          </span>
                        )}
                      </div>
                      <div className="text-xl font-semibold text-white">{exp.role}</div>
                      <div className="text-gray-400 font-medium">{exp.company}</div>
                    </div>

                    <div className={`p-6 rounded-2xl transition-colors duration-300 mt-4 border ${
                      isCurrent 
                        ? 'bg-accent/[0.04] border-accent/30 shadow-[0_0_30px_rgba(0,229,255,0.06)] hover:bg-accent/[0.07] hover:border-accent/50' 
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                    }`}>
                      <p className="text-gray-200 leading-relaxed text-sm mb-4">
                        {exp.overview}
                      </p>
                      <ul className={`list-disc pl-4 space-y-2 text-sm ${
                        isCurrent ? 'marker:text-accent text-gray-200' : 'marker:text-accent/70 text-gray-400'
                      }`}>
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="leading-relaxed">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
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
