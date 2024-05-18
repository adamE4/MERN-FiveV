import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.ATLAS_URI || "";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    await client.connect();

    await client.db("admin").command({ ping: 1});
    console.log(
        "Pinged your deployment. You successfully connect to Mongodb!"
    );
} catch(err){
    console.error("Eror connecting to MongoDb", err);
}

//Going to do let db = client.db("Somehting for the databas most likley users or something like that")

let db = client.db("MERN-FiveV")


export default db;