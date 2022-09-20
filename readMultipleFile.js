const fs = require('fs');
const path = require('path');

const filPath = path.join(__dirname,`files`);

fs.readdir(filPath, (err, files) => {
    //console.warn(files); // get all files in array
    files.forEach((items) => {
        console.log(items);
    })
});