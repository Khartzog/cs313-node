const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://postgres:Kh681378.@localhost:5432/mydb";

const pool = new Pool({connectionString: connectionString}); 

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/getPerson', getPerson)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



  function getPerson(req, res){
    console.log("Getting person information.");

    var id = req.query.id;
    console.log("retreving person with Id: ", id);

    getPersonFromDb(id, function(error, result){
      console.log("back from the database with results: ", result);
      res.json(result);
    })
  }

  function getPersonFromDb(id, callback){
    console.log("getpersonfromDb called with id: ", id);

    var sql = "SELECT id, firstName, lastName, date_of_birth FROM personinformation WHERE id = $1::int";
    var params = [id];

    pool.query(sql, params, function(err, result) {
      if (err){
        console.log("there was an error with the database");
        console.log(err);
        callback(err, null);
      }
      console.log("found DB result: " + JSON.stringify(result.rows));

      callback(null, result.rows);

    })
  }