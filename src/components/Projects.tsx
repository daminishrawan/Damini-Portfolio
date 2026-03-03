import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lohono Stays",
    category: "Consumer Platform",
    narrative: "A full-stack web application powering the discovery and booking of luxury villas and holiday homes across India and Asia. It serves as a unified, high-quality booking experience for discerning travelers.",
    highlights: [
      "Architected a server-side rendered (SSR) React application with Razzle and Express to improve SEO and first-load performance.",
      "Implemented end-to-end booking flows including property search, filters, checkout, reservations, and coupon validation.",
      "Built loyalty and referral features with CleverTap integration for push notifications and analytics.",
      "Optimized delivery with Brotli/gzip compression, Workbox-based PWA, and PM2 cluster mode for production scaling."
    ],
    tags: ["React 18", "TypeScript", "Razzle (SSR)", "Express", "Recoil", "Workbox (PWA)"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Isprava LMS / OI",
    category: "Operations Interface",
    narrative: "An internal operations platform that centralizes luxury vacation rental and real-estate workflows, enabling teams to manage properties, trips, and customers in one place.",
    highlights: [
      "Architected a modular React SPA with context-based service providers for 25+ domains including enquiries, calendar, and concierge.",
      "Implemented role-based access control (ACL) across 40+ page templates with secure session handling.",
      "Built in-app VoIP using JsSIP for call handling within enquiry flows, featuring call logging and recording support.",
      "Optimized front-end performance via route-level code splitting, debounce/throttle on search, and integrated Sentry for monitoring."
    ],
    tags: ["React 18", "TypeScript", "MUI", "React Router v6", "JsSIP", "Sentry"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Trip Planner",
    category: "Guest-Facing App",
    narrative: "A trip management web app that lets guests view trip details, pre-book meal plans, manage orders, and complete web check-in with document uploads.",
    highlights: [
      "Architected a React SPA with URL-driven trip context, Recoil state, and a modular API layer for reservations and orders.",
      "Implemented complex meal-plan flows with date/time and guest-count selection, alongside strict order-closure rules.",
      "Built a comprehensive web check-in flow with validated forms and document-type APIs.",
      "Integrated Google Tag Manager and responsive layouts using mobile-first components."
    ],
    tags: ["React 18", "TypeScript", "Vite", "Recoil", "Radix UI", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1600&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Solene",
    category: "Membership Platform",
    narrative: "A marketing and application site for a private members' club, designed to tell the brand's story and capture leads and membership applications.",
    highlights: [
      "Architected a multi-page, component-based front end with Gulp and clean-URL routing for SEO and maintainability.",
      "Implemented multi-step membership application flows with validation and submission to the Lohono REST API.",
      "Integrated event listing and registration via N8N webhooks and lead capture with API key auth.",
      "Built CI/CD pipelines with GitHub Actions and deployed static assets to AWS S3 and CloudFront."
    ],
    tags: ["HTML5", "SCSS", "JavaScript", "Gulp 5", "N8N", "AWS S3"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "Chapter",
    category: "Marketing Website",
    narrative: "A marketing and lead-generation platform for luxury villas in Goa and Alibaug, driving inquiries and agent sign-ups for the property portfolio.",
    highlights: [
      "Architected a full marketing site with Next.js 14 (App Router), TypeScript, and static export for fast, CDN-friendly deployment.",
      "Implemented lead capture with reCAPTCHA v3, server-side verification, and OTP flows for NRI forms.",
      "Built responsive, animated experiences using Framer Motion and scroll-driven UI.",
      "Delivered comprehensive SEO via per-page metadata, Open Graph, canonical URLs, and JSON-LD structured data."
    ],
    tags: ["Next.js 14", "TypeScript", "Framer Motion", "reCAPTCHA v3", "SEO"],
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-20 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-accent"></span>
            Key Projects
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center group`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-accent/30 transition-colors duration-500 aspect-[4/3] lg:aspect-video shadow-2xl">
                <div className="absolute inset-0 bg-bg-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <a href={project.link} className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:text-accent transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="text-accent text-sm font-mono mb-3">{project.category}</div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-accent transition-colors">{project.title}</h3>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/50"></div>
                  <p className="text-gray-300 mb-4 text-base leading-relaxed">
                    {project.narrative}
                  </p>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    <strong className="text-gray-200 block mb-2">Key Highlights:</strong>
                    <ul className="list-disc pl-5 space-y-1.5 marker:text-accent/70">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-accent/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
