const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
// const uri = "mongodb+srv://dirensj:dirensj@cluster0.rdocipt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";  
const client = new MongoClient(uri);
async function ConnMongodb() {
    const database = client.db("ipl_2025");
    const teams = database.collection("teams");

    const mydoc = {
        name: "Nikunj123",
        phone: 11675,
        marks: 50,
        remarks: "nice"
    };

    // const query = { name: "Rahul" };
    const option = { projection: { _id: 0, name: 1, phone: 1 } };

    const insertOut = await teams.insertOne(mydoc);
    // const stdata = await teams.findOne(query, option);
    console.log(insertOut);

    await client.close();
}

ConnMongodb();