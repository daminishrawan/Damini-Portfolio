import fs from 'fs';
import pdf from 'pdf-parse';
const dataBuffer = fs.readFileSync('public/assets/Damini_Shrawan_CV.pdf');
pdf(dataBuffer).then(function(data) {
    console.log(data.numpages);
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
