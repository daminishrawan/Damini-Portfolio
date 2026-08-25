import fs from 'fs';
import PDFParser from "pdf2json";

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    const page = pdfData.Pages[0];
    console.log("Page Width:", page.Width, "Height:", page.Height);
    for (let i = 0; i < Math.min(10, page.Texts.length); i++) {
        const text = page.Texts[i];
        const str = decodeURIComponent(text.R[0].T);
        console.log(`Text: "${str}" | X: ${text.x} | Y: ${text.y}`);
    }
});

pdfParser.loadPDF("public/assets/Damini_Shrawan_CV.pdf");
