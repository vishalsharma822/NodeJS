// Load HTTP module
const http = require("http");
const mysql = require('mysql'); //

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'node_restapi'
});
// check db connectivity
dbConnect.connect((err)=>{
    if(err)
        console.log('connection fail !' + JSON.stringify(err, undefined, 2));
    else
    console.log('connected....');
});


const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello World"
  res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});





//get list of items
server.get('/api/items',(req, res) => {
    let sqlQuery = "SELECT * FROM items";
    
    let query = dbConnect.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(results);
    //   res.send(function (results){
    //     return JSON.stringify({"status": 200, "error": null, "response": results});
    // });
      console.log(results);
    });
  });