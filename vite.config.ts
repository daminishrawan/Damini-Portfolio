import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'portfolio-backend-api',
        configureServer(server) {
          server.middlewares.use('/chat', (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const message = (data.message || '').toLowerCase().trim();

                  let reply = '';
                  if (message.match(/perf|performance|gain|lohono|refactor|30%/)) {
                    reply =
                      "At Lohono Stays, Damini engineered the core luxury rental booking funnel and dynamic inventory calendar. Key achievements include 30%+ performance gains via WebP image optimization and refactoring 1,100+ lines of legacy code to streamline velocity.";
                  } else if (message.match(/project|projects|shipped|built/)) {
                    reply =
                      "Damini has delivered 5 shipped enterprise-ready assets:\n1. Lohono Rentals (luxury villa booking funnel at lohono.com)\n2. AI Personalized Trip Planner\n3. Isprava Lead Management System (LMS)\n4. Solene Architectural Exhibition Portal\n5. Chapter Community Publishing Platform";
                  } else if (message.match(/stack|tech|skill|framework|language/)) {
                    reply =
                      "Damini's active engineering stack:\n- Frontend: React 18, Next.js 14, TypeScript, Tailwind CSS, Recoil, Redux Toolkit, Framer Motion\n- Backend: Node.js, Express, PostgreSQL, RESTful APIs, FastAPI\n- AI: Gemini API, Prompt Engineering, RAG Pipelines, LangChain, ChromaDB";
                  } else if (message.match(/contact|email|reach|hire|mumbai|location/)) {
                    reply =
                      "Damini is based in Mumbai, Maharashtra, India. You can contact her directly at damini1998shrawan29@gmail.com.";
                  } else if (message.match(/exp|experience|role|years|who is|about/)) {
                    reply =
                      "Damini Shrawan is a Software Developer with 2.5+ years of experience specializing in scalable full-stack web applications, React 18, Next.js 14, and TypeScript. She focuses on modern state management, high-performance UI architecture, and Generative AI workflows.";
                  } else {
                    reply =
                      "Thanks for asking! Damini is a Software Developer with 2.5+ years of experience in React 18, Next.js 14, and TypeScript based in Mumbai. Ask me about her work at Lohono Stays, her 30%+ performance gains, or her tech stack!";
                  }

                  res.setHeader('Content-Type', 'application/json');
                  res.setHeader('Access-Control-Allow-Origin', '*');
                  res.statusCode = 200;
                  res.end(JSON.stringify({ reply }));
                } catch {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
                }
              });
            } else if (req.method === 'OPTIONS') {
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
              res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
              res.statusCode = 204;
              res.end();
            } else {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ status: 'ok', service: 'Damini Portfolio AI Assistant API' }));
            }
          });
        },
      },
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          assistant: path.resolve(__dirname, 'assistant.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
