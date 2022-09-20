const fs = require('fs');
const path = require('path');

const filPath = path.join(__dirname,`files`);
console.log(filPath);

// add multiple files
for(i=0; i<3; i++){
    fs.writeFileSync(`${filPath}/file_${i}.text`,`test file ${i}`);
}