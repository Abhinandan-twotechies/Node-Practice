const { MongoClient } = require("mongodb");
const url = "mongodb+srv://abhinandantwotechies:DpIsKCsvZkt1rBbg@namastenode.mt0obdp.mongodb.net/"

const client = new MongoClient(url);
const dbName = 'TestDatabase';

// The main Function 
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
    //  console.log(collection);

    // the following code examples can be pasted here...

    const data = {
        firstName: 'Kunal',
        lastName: 'Gaurav',
        city: 'Chandigarh',
        country: 'India'
    }
    // inserting the data 
    const insertResult = await collection.insertOne(data);
    console.log('Inserted documents =>', insertResult);

    
    // Reading the data from database
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);



    return 'done.';
}

// Calling main function to connect the dataBase
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());





console.log("DataBase");