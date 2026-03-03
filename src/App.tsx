/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AILab from './components/AILab';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-[#00e5ff] selection:text-[#0a0a0a]">
      <Hero />
      <Experience />
      <Projects />
      <AILab />
      <TechStack />
      <Footer />
    </div>
  );
}
