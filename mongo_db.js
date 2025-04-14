const { MongoClient, ServerApiVersion } = require('mongodb');
var url = "mongodb+srv://dirensj:dirensj@cluster0.rdocipt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ipl_2025_db");
  var myobj = { team_name: "Rajasthan Royals", team_city: "Jaipur and Guwahati" };
  dbo.collection("ipl_2025_collection").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 entry inserted");
    db.close();
  });
});
