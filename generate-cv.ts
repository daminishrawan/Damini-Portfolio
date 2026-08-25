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
  margins: { top: 28, bottom: 28, left: 36, right: 36 },
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

const contentWidth = 612 - 36 - 36; // 540
const bulletIndent = 12;

// Custom Helper: Draw a bullet point
function addBullet(bulletText: string) {
  const bulletSymbol = '•';
  const startY = doc.y;
  
  // Render the bullet symbol on left
  doc.font('Helvetica')
     .fontSize(9.5)
     .lineGap(1.2)
     .fillColor('#000000')
     .text(bulletSymbol, 36 + 12, startY, { width: bulletIndent });

  // Render the bullet text adjacent to symbol
  doc.text(bulletText, 36 + 12 + bulletIndent, startY, {
    width: contentWidth - 12 - bulletIndent,
    align: 'justify',
    lineGap: 1.2
  });
  
  doc.y += 1.5; // Slight spacing between bullets
}

// Custom Helper: Draw a Section Header
function sectionHeader(title: string) {
  doc.y += 4;
  doc.font('Times-Bold')
     .fontSize(12)
     .fillColor('#000000')
     .text(title, 36, doc.y);
  
  const lineY = doc.y + 1;
  doc.moveTo(36, lineY)
     .lineTo(612 - 36, lineY)
     .strokeColor('#000000')
     .lineWidth(0.5)
     .stroke();
  
  doc.y = lineY + 3;
}

// Header
doc.font('Times-Roman')
   .fontSize(24)
   .fillColor('#000000')
   .text('Damini Shrawan', { align: 'center' });

doc.y += 2;

doc.font('Times-Roman')
   .fontSize(9.5)
   .fillColor('#000000')
   .text('8959200891 | damini1998shrawan29@gmail.com | linkedin.com/in/daminishrawan |', { align: 'center' });
doc.text('daminishrawan.github.io/DaminiPortfolio', { align: 'center' });

doc.y += 3;

// 1. Professional Summary
sectionHeader('Summary');
doc.font('Times-Roman')
   .fontSize(9.5)
   .lineGap(1.2)
   .text(
     'Full-stack software engineer with 2.5+ years shipping production features across React 18, TypeScript, Next.js, Ruby on Rails, and PostgreSQL. Experienced building RESTful APIs, owning features end-to-end from requirements through deployment, and integrating third-party services in fast-moving product environments.',
     36, doc.y, { width: contentWidth, align: 'justify' }
   );

// 2. Technical Skills
sectionHeader('Technical Skills');

const skillsData = [
  { label: 'Languages', value: 'JavaScript, TypeScript, Ruby, HTML/CSS, SQL' },
  { label: 'Frontend', value: 'React 18, Next.js, Recoil, Context API, Radix UI, Shadcn' },
  { label: 'Backend', value: 'Node.js, Express, Ruby on Rails 8, RESTful API design, Pundit (RBAC)' },
  { label: 'Databases', value: 'PostgreSQL, database migrations, relational data modeling' },
  { label: 'Tools & Practices', value: 'Git, GitHub Actions (CI/CD), AWS S3/CloudFront, Agile/Scrum, third-party API integration (Razorpay, Google reCAPTCHA v3, OTP verification)' }
];

skillsData.forEach(skill => {
  doc.font('Times-Bold')
     .fontSize(9.5)
     .text(`${skill.label}: `, 36, doc.y, { continued: true })
     .font('Times-Roman')
     .text(skill.value, { width: contentWidth });
  doc.y += 2;
});

// 3. Professional Experience
sectionHeader('Experience');

// Job 1
let yStart = doc.y;
doc.font('Times-Bold').fontSize(10.5).text('Isprava / Lohono Stays', 36, yStart, { width: 300 });
doc.font('Times-Roman').fontSize(10).text('Mumbai, India', 36, yStart, { align: 'right', width: contentWidth });
let yNext = doc.y;
doc.font('Times-Italic').fontSize(9.5).text('Software Developer', 36, yNext, { width: 300 });
doc.font('Times-Italic').fontSize(9.5).text('July 2024 – Present', 36, yNext, { align: 'right', width: contentWidth });
doc.y += 2;

addBullet('Delivered full-stack features end-to-end across 6 production products, from requirements gathering through deployment, serving thousands of premium travellers.');
addBullet('Architected the Lohono Trip Planner guest application from scratch using React 18, TypeScript, and Recoil, building 11+ custom RESTful API hooks to replace 2,149 lines of mock data.');
addBullet('Refactored a 2,300-line monolithic codebase into modular hooks, removing 1,100+ lines of dead code across 81 files to reduce technical debt and improve maintainability.');
addBullet('Built RESTful backend APIs from the ground up in Ruby on Rails 8 and PostgreSQL, including full CRUD service layers, Pundit role-based access control, and database migrations.');
addBullet('Optimized web performance by implementing a WebP image pipeline, reducing hero-image payloads by 98% (from ~24MB to under 400KB).');
addBullet('Integrated third-party services including Razorpay payments, Google reCAPTCHA v3, and OTP verification; implemented CI/CD pipelines via GitHub Actions for automated deployment to AWS S3/CloudFront.');

doc.y += 2;

// Job 2
yStart = doc.y;
doc.font('Times-Bold').fontSize(10.5).text('Isprava / Lohono Stays', 36, yStart, { width: 300 });
doc.font('Times-Roman').fontSize(10).text('Mumbai, India', 36, yStart, { align: 'right', width: contentWidth });
yNext = doc.y;
doc.font('Times-Italic').fontSize(9.5).text('Frontend Developer', 36, yNext, { width: 300 });
doc.font('Times-Italic').fontSize(9.5).text('January 2024 – July 2024', 36, yNext, { align: 'right', width: contentWidth });
doc.y += 2;

addBullet('Built core consumer-facing features for Lohono.com in React 18 and TypeScript, including checkout, dynamic pricing, and referral systems.');
addBullet('Engineered an appointment scheduling system with date-picker, time-slot carousel, and rescheduling logic, handling edge cases across booking states.');
addBullet('Delivered a multi-step lead-capture form in Next.js with OTP verification, Google reCAPTCHA v3, and UTM/GTM tracking integration.');

// 4. Projects
sectionHeader('Projects');

// Project 1
yStart = doc.y;
doc.font('Times-Bold').fontSize(9.5).text('Lohono Trip Planner', 36, yStart, { continued: true });
doc.font('Times-Italic').fontSize(9.5).text(' | React 18, TypeScript, Vite, Recoil, REST APIs');
doc.font('Times-Roman').fontSize(9.5).text('2024', 36, yStart, { align: 'right', width: contentWidth });
doc.y += 1.5;
addBullet('Designed and built a guest-facing trip-planning application from scratch, including meal-plan ordering, guest-count/time-slot state machines, and a document-upload web check-in flow.');
addBullet('Built 11+ custom REST API hooks to power dynamic, real-time guest data across the application.');

doc.y += 1.5;

// Project 2
yStart = doc.y;
doc.font('Times-Bold').fontSize(9.5).text('Solene & Chapter Marketing Sites', 36, yStart, { continued: true });
doc.font('Times-Italic').fontSize(9.5).text(' | Next.js, GitHub Actions, AWS S3/CloudFront');
doc.font('Times-Roman').fontSize(9.5).text('2024', 36, yStart, { align: 'right', width: contentWidth });
doc.y += 1.5;
addBullet('Owned two marketing sites end-to-end, building multi-step validation forms and implementing SEO best practices; set up CI/CD pipelines via GitHub Actions for automated deployment.');

// 5. Education
sectionHeader('Education');

// Edu 1
yStart = doc.y;
doc.font('Times-Bold').fontSize(9.5).text('Centre for Development of Advanced Computing (C-DAC)', 36, yStart, { width: 380 });
doc.font('Times-Roman').fontSize(9.5).text('India', 36, yStart, { align: 'right', width: contentWidth });
yNext = doc.y;
doc.font('Times-Italic').fontSize(9.5).text('PG-DMC, Mobile Computing', 36, yNext, { width: 380 });
doc.font('Times-Italic').fontSize(9.5).text('March 2023 – August 2023', 36, yNext, { align: 'right', width: contentWidth });

doc.y += 3;

// Edu 2
yStart = doc.y;
doc.font('Times-Bold').fontSize(9.5).text('Chhattisgarh Swami Vivekanand Technical University', 36, yStart, { width: 380 });
doc.font('Times-Roman').fontSize(9.5).text('India', 36, yStart, { align: 'right', width: contentWidth });
yNext = doc.y;
doc.font('Times-Italic').fontSize(9.5).text('B.Tech, Electrical Engineering Technologies', 36, yNext, { width: 380 });
doc.font('Times-Italic').fontSize(9.5).text('June 2017 – June 2021', 36, yNext, { align: 'right', width: contentWidth });

doc.end();

stream.on('finish', () => {
  console.log('Successfully wrote professional 1-page CV PDF to public/assets and assets folders!');
});
