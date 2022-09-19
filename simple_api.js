console.log("hai");
const http = require('http');
const objectData = require('./data_simple_api'); // importing data from "data_simple_api.js" file

http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify(objectData));
    res.end();
}).listen(2500);