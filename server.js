const { log } = require("console");
const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://yakuboff-m:x9wJSk1cjnkchjrF@cluster0.eorpluv.mongodb.net/Reja";

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client; // (client -> claster)
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function(){
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        }); 
    }
});

