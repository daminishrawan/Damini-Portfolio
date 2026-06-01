import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

// Generate a professional 1-page PDF cv matching the user's uploaded CV design exactly
// Generate professional 1-page PDF cv to both public/assets and assets so it is available in dev and prod builds
const publicDestPath = path.join(process.cwd(), 'public', 'assets', 'Damini_Shrawan_CV.pdf');
const assetsDestPath = path.join(process.cwd(), 'assets', 'Damini_Shrawan_CV.pdf');

// Ensure directories exist
[publicDestPath, assetsDestPath].forEach(destPath => {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 30, bottom: 30, left: 35, right: 35 },
});

// Write to public folder
const stream = fs.createWriteStream(publicDestPath);
doc.pipe(stream);

// Also pipe/write to assets folder as a copy
const backupStream = fs.createWriteStream(assetsDestPath);
doc.on('data', (chunk) => {
  backupStream.write(chunk);
});
doc.on('end', () => {
  backupStream.end();
});

const contentWidth = 612 - 35 - 35; // 542
const bulletIndent = 12;

// Custom Helper: Draw a bullet point
function addBullet(bulletText: string) {
  const bulletSymbol = '•';
  const startY = doc.y;
  
  // Render the bullet symbol on left
  doc.font('Helvetica')
     .fontSize(8.2)
     .lineGap(1.2)
     .fillColor('#111111')
     .text(bulletSymbol, 35, startY, { width: bulletIndent });

  // Render the bullet text adjacent to symbol
  doc.text(bulletText, 35 + bulletIndent, startY, {
    width: contentWidth - bulletIndent,
    align: 'left',
  });
  
  doc.y += 2.5; // Slight spacing between bullets
}

// Custom Helper: Draw a Section Header
function sectionHeader(title: string) {
  doc.y += 8;
  doc.font('Helvetica-Bold')
     .fontSize(10.5)
     .fillColor('#0f4c81') // Royal dark blue tone for professional touch
     .text(title.toUpperCase(), 35, doc.y, { characterSpacing: 0.5 });
  
  const lineY = doc.y + 2;
  doc.moveTo(35, lineY)
     .lineTo(612 - 35, lineY)
     .strokeColor('#aaaaaa')
     .lineWidth(0.5)
     .stroke();
  
  doc.y = lineY + 6;
}

// Header
doc.font('Helvetica-Bold')
   .fontSize(22)
   .fillColor('#000000')
   .text('Damini Shrawan', { align: 'center' });

doc.y += 2;

doc.font('Helvetica')
   .fontSize(8.5)
   .fillColor('#555555')
   .text('Mumbai, India | +918959200891 | damini1998shrawan29@gmail.com | linkedin.com/in/damini-shrawan', { align: 'center' });

doc.y += 8;

// 1. Professional Summary
sectionHeader('Professional Summary');
doc.font('Helvetica')
   .fontSize(8.2)
   .lineGap(1.5)
   .fillColor('#222222')
   .text(
     'Full Stack Developer with 2+ years of production experience building and shipping scalable MERN and Ruby on Rails applications, REST APIs, and real-time data systems across high-traffic consumer products and internal CRM/operations platforms. Track record of independently owning greenfield features end-to-end and refactoring large React codebases. Starting an Executive M.Tech in Artificial Intelligence at IIT Jodhpur (Aug 2026) to build expertise in Machine Learning, Deep Learning, NLP, Computer Vision, and MLOps, with the goal of transitioning into AI/ML engineering.',
     35, doc.y, { width: contentWidth, align: 'justify' }
   );

// 2. Technical Skills
sectionHeader('Technical Skills');

const skillsData = [
  { label: 'Languages', value: 'TypeScript, JavaScript (ES6+), Python, Ruby, HTML5, SCSS/CSS Modules' },
  { label: 'Frontend', value: 'React 18, Next.js 14, Redux, Recoil, Zustand, Tailwind CSS, Radix UI / Shadcn UI, MUI, Formik/Yup, Vite' },
  { label: 'Backend and Data', value: 'Node.js, Express.js, Ruby on Rails 8, PostgreSQL, REST API Design, Pundit RBAC' },
  { label: 'Cloud, DevOps and Observability', value: 'AWS S3/CloudFront, GitHub Actions (CI/CD), Docker, Sentry, GTM/Clevertap, n8n' }
];

skillsData.forEach(skill => {
  const startY = doc.y;
  doc.font('Helvetica-Bold')
     .fontSize(8.2)
     .fillColor('#111111')
     .text(`${skill.label}: `, 35, startY, { width: 155, continued: true })
     .font('Helvetica')
     .fillColor('#333333')
     .text(skill.value, { width: contentWidth - 155 });
  doc.y += 1.5;
});

// 3. Professional Experience
sectionHeader('Professional Experience');

// Job 1
let yStart = doc.y;
doc.font('Helvetica-Bold').fontSize(9.5).fillColor('#000000').text('Isprava / Lohono Stays', 35, yStart, { width: 300 });
doc.font('Helvetica-Bold').fontSize(9).fillColor('#000000').text('Jul 2024 – Present', 35, yStart, { align: 'right', width: contentWidth });
let yNext = doc.y;
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor('#555555').text('Software Developer', 35, yNext, { width: 300 });
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor('#555555').text('Mumbai, India', 35, yNext, { align: 'right', width: contentWidth });
doc.y += 4;

addBullet('Core frontend engineer on lohono.com, owning the full booking funnel (discovery, listing, detail, checkout, Razorpay) and shipping greenfield surfaces from scratch – Property Cluster (multi-villa) with full-stack Express review/recommendation APIs, Referral Programme, Harmony Weddings, and Schedule Callback – across 100 commits and PRs over 21 months.');
addBullet('Built the Lohono Trip Planner guest app from scratch (React 18, TypeScript, Vite 6, Tailwind CSS, Recoil, Radix/Shadcn UI) with 11+ custom REST API hooks for meal ordering and a multi-guest Web Check-in KYC flow; refactored a 2,300-line monolith into hook-driven modules, removing 1,100+ lines across 81 files – 9 PRs and 25+ tickets in 2.5 months.');
addBullet('Delivered the Isprava LMS internal CRM across 5 product verticals (React 18, MUI, JsSIP/WebRTC, Sentry) – a 15+ component villa food-ordering system with KOT printing, Client Ledger with preview-gated downloads, Delivery Tracker, and the Rental Trip Details revamp; centralized a shared currency utility and added Jest/RTL coverage.');
addBullet('Sole frontend owner of the Solene membership platform – multi-step application form with complex validation, preview mode, and cross-page state retention; rebuilt the marketing site, shipped JSON-driven legal pages, and configured SEO sitemap, AWS S3/CloudFront, GitHub Actions CI/CD, and n8n webhook submissions.');

doc.y += 4;

// Job 2
yStart = doc.y;
doc.font('Helvetica-Bold').fontSize(9.5).fillColor('#000000').text('Isprava / Lohono Stays', 35, yStart, { width: 300 });
doc.font('Helvetica-Bold').fontSize(9).fillColor('#000000').text('Jan 2024 – Jul 2024', 35, yStart, { align: 'right', width: contentWidth });
yNext = doc.y;
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor('#555555').text('Front-end Developer Intern', 35, yNext, { width: 300 });
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor('#555555').text('Mumbai, India', 35, yNext, { align: 'right', width: contentWidth });
doc.y += 4;

addBullet('Engineered an appointment scheduling system (date picker, time-slot carousel, rescheduling, edge-case handling) and a scroll-aware calendar positioning hook that resolved recurring date-picker defects across listing, detail, and collection pages.');
addBullet('Built a multi-step lead capture form (Next.js 14) with OTP verification, Google reCAPTCHA v3, UTM tracking, and GTM event instrumentation – an end-to-end form pipeline from UI through CRM lead submission.');

// 4. Projects
sectionHeader('Projects');

// Project 1
yStart = doc.y;
doc.font('Helvetica-Bold').fontSize(9).fillColor('#000000').text('AI / ML – Planned Coursework Projects (IIT Jodhpur, from Aug 2026)', 35, yStart, { width: 420 });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#000000').text('Upcoming', 35, yStart, { align: 'right', width: contentWidth });
doc.y += 3;
addBullet('Small hands-on projects to be built through the program: an image-classification CNN (Computer Vision), a text-classification / sentiment-analysis model (NLP), and a containerized ML-Ops deployment that serves a trained model over a REST API.');

doc.y += 2;

// Project 2
yStart = doc.y;
doc.font('Helvetica-Bold').fontSize(9).fillColor('#000000').text('Isprava API – Backend REST Services and RBAC (Ruby on Rails 8, PostgreSQL)', 35, yStart, { width: 420 });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#000000').text('2024 – Present', 35, yStart, { align: 'right', width: contentWidth });
doc.y += 3;
addBullet('Architected the Homeowner Approvals platform from scratch (19 files, 615 lines in a single delivery) – V2 REST controllers, property/opportunity-scoped service objects, approve/reject workflows, Pundit RBAC, ActiveAdmin, decorators, and ACL/category migrations; built phased GRM checklist APIs with admin-gated uncheck and audit logic.');

doc.y += 2;

// Project 3
yStart = doc.y;
doc.font('Helvetica-Bold').fontSize(9).fillColor('#000000').text('The Chapter – Marketing Platform (Next.js 14 Static Export, React 18, TypeScript)', 35, yStart, { width: 420 });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#000000').text('2024 – Present', 35, yStart, { align: 'right', width: contentWidth });
doc.y += 3;
addBullet('Built campaign landing pages and a reusable lead-capture form system with a custom 4-digit OTP phone-verification module wired to REST lead APIs and GTM conversion events; shipped a dynamic slug-routed Press Center and drove a WebP asset pipeline that cut hero frames from roughly 24MB down to 397KB.');

// 5. Education
sectionHeader('Education');

// Edu 1
yStart = doc.y;
doc.font('Helvetica-Bold').fontSize(9).fillColor('#000000').text('Indian Institute of Technology, Jodhpur (IIT Jodhpur)', 35, yStart, { width: 380 });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#000000').text('16 Aug 2026 – 2028 (Expected)', 35, yStart, { align: 'right', width: contentWidth });
yNext = doc.y;
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor('#444444').text('Executive M.Tech in Artificial Intelligence (PG Diploma to M.Tech track)', 35, yNext, { width: 380 });
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor('#444444').text('Online/Hybrid', 35, yNext, { align: 'right', width: contentWidth });
doc.y += 3;
addBullet('Upcoming coursework: Machine Learning, Deep Learning, Artificial Intelligence, Optimization for Data Science, Advanced Data Structures & Algorithms, ML-Ops & DL-Ops, NLP, Computer Vision, and Advanced AI & Autonomous Systems.');

doc.y += 2;

// Edu 2
yStart = doc.y;
doc.font('Helvetica-Bold').fontSize(9).fillColor('#000000').text('Centre for Development of Advanced Computing (C-DAC)', 35, yStart, { width: 380 });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#000000').text('Mar 2023 – Aug 2023', 35, yStart, { align: 'right', width: contentWidth });
yNext = doc.y;
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor('#444444').text('PG-DMC, Mobile Computing', 35, yNext, { width: 380 });
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor('#444444').text('Pune, India', 35, yNext, { align: 'right', width: contentWidth });

doc.y += 4;

// Edu 3
yStart = doc.y;
doc.font('Helvetica-Bold').fontSize(9).fillColor('#000000').text('Chhattisgarh Swami Vivekanand Technical University (CSVTU)', 35, yStart, { width: 380 });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#000000').text('Jun 2017 – Jun 2021', 35, yStart, { align: 'right', width: contentWidth });
yNext = doc.y;
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor('#444444').text('B.Tech, Electrical Engineering', 35, yNext, { width: 380 });
doc.font('Helvetica-Oblique').fontSize(8.2).fillColor('#444444').text('Bhilai, India', 35, yNext, { align: 'right', width: contentWidth });

doc.y += 2;

// 6. Certifications
sectionHeader('Certifications');
doc.font('Helvetica')
   .fontSize(8.2)
   .fillColor('#111111');

addBullet('Java Data Structures and Algorithms + LeetCode Exercises – Udemy');
addBullet('Java and Spring Framework for Beginners with Spring Boot – Udemy');

doc.end();

stream.on('finish', () => {
  console.log('Successfully wrote professional 1-page CV PDF to public/assets and assets folders!');
});
