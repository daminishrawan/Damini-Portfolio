import fs from 'fs';
import PDFDocument from 'pdfkit';
const doc = new PDFDocument({ size: 'LETTER', margins: { top: 28, bottom: 28, left: 36, right: 36 } });
// Just simulate running it... wait, it's easier to just check if it's 1 page.
