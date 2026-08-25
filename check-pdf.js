const fs = require('fs');
const buf = fs.readFileSync('public/assets/Damini_Shrawan_CV.pdf');
const matches = buf.toString('latin1').match(/\/Type\s*\/Page\b/g);
console.log('Page count:', matches ? matches.length : 0);
