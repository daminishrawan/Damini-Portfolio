const fs = require('fs');
const PDFDocument = require('pdfkit');
const doc = new PDFDocument({size: 'LETTER'});
doc.pipe(fs.createWriteStream('test.pdf'));
doc.font('Times-Roman').fontSize(24).text('Damini Shrawan');
doc.end();
