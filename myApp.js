let express = require('express');
let path = require("path");
let app = express();
require("dotenv").config();

console.log("Hello World!")

// app.get("/", function(req, res){
//     res.send("Hello Express");
// });

app.get("/", (req, res) => {
    // const indexPath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    let message = "Hello json";
    if(process.env["MESSAGE_STYLE"] === 'uppercase'){
        message = message.toUpperCase();
    } else {
        message = "Hello json";
    }
    res.json({
        "message": message
    })
});





























 module.exports = app;
