// import all pacakges
const newExpress = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
console.log(newExpress);

//create new app of express
const newApp = newExpress();

// connection mysql db
newApp.use(bodyParser.json());

// connection DB
const dbConnect = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'node_restapi'
});


// launch the app
newApp.listen(3000,()=>{
    console.log('app running on localhost:30000/...');
});

// check db connectivity
dbConnect.connect((err)=>{
    if(err)
        console.log('connection fail !' + JSON.stringify(err, undefined, 2));
    else
    console.log('connected....');
});

//get list of items
newApp.get('/api/items',(req, res) => {
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

// get single record
newApp.post('/api/singleItem',(req, res) => {
  let id = req.body.id;
  let query = dbConnect.query('select * from items where id='+id,(err, results) => {
    if(err) throw err
    res.send(results);
  });
});

// add new record
newApp.post('/api/insertItem',(req, res)=>{
  let data = {
    title: req.body.title,
    body: req.body.body
  };

  let sqlQuery = "Insert into items set?";
  let query = dbConnect.query(sqlQuery, data, (err, results) => {
    if(err) throw err;
      res.send(results);
  });

});

// update existing record
newApp.post('/api/updateItem',(req, res) => {
  let data = {
      id: req.body.id,
      title: req.body.title,
    body: req.body.body
  };
  let sqlQuery = "UPDATE items SET? WHERE id="+data.id;
  let query = dbConnect.query(sqlQuery, data, (err, results) => {
    if(err) throw err;
      res.send(results);
  });
});

// delete existing record
newApp.post('/api/deleteItem',(req, res)=>{
  let id = req.body.id;
  let query = dbConnect.query('delete from items where id='+id,(err, results) => {
    if(err) throw err
    res.send(results);
  });
});

// newApp.post('/api/items',(req, res) => {
//   let data = {title: req.body.title, body: req.body.body};
  
//   let sqlQuery = "INSERT INTO items SET ?";
  
//   let query = dbConnect.query(sqlQuery, data,(err, results) => {
//     if(err) throw err;
//     res.send(apiResponse(results));
//   });
// });

// function apiResponse(results){
//   return JSON.stringify({"status": 200, "error": null, "response": results});
// }
