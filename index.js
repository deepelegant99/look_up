const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

let db;

MongoClient.connect("mongodb://localhost:27017/records")
  .then((client) => {
    db = client.db();
    app.listen(5000, () => {
      console.log("listening at port 5000");
    });
  })
  .catch((err) => console.log(err));

let movies = [];
app.get("/animes",(req, res)=>{
   db.collection('animes')
   .find()
   .forEach(movie => movies.push(movie))
   .then(()=>res.status(200).json(movies))
   .catch(()=>res.status(500).json({msg:"Something fucked up"}))
})
 
