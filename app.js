console.log('Web Serverni boshlash');
const { log } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// MongoDB calling
const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json()); // client va webserver o'rtasidagi data - json format; json fromat => js object
app.use(express.urlencoded({extended: true})); // html format form => js 

// 2: Session code

// 3: Views code
app.set("views", "views"); // 
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        res.json(data.ops[0]);
    });
})

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({state: "success"});
    });

});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
})

app.get("/", function(req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    })
});

module.exports = app;