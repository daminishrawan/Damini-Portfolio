import fs from 'fs';
import { PDFDocument } from 'pdf-lib';

async function run() {
  try {
    const pdfBytes = fs.readFileSync('public/assets/Damini_Shrawan_CV.pdf');
    const pdfDoc = await PDFDocument.load(pdfBytes);
    console.log("PDF loaded successfully! Pages:", pdfDoc.getPageCount());
  } catch (e) {
    console.error("Error loading PDF:", e);
  }
}
run();
