let express = require('express');
let path = require("path");
let app = express();
require("dotenv").config();
let bodyParser = require('body-parser');

console.log("Hello World!")

// app.get("/", function(req, res){
//     res.send("Hello Express");
// });
// Middleware methods
app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use((bodyParser.urlencoded({extended: false})));


app.get("/", (req, res) => {
    // const indexPath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    let message = "Hello json";
    if(process.env["MESSAGE_STYLE"] === 'uppercase'){
        message = message.toUpperCase();
    } else {
        message = "Hello json";
    }
    res.json({
        "message": message,
    })
});


app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
        res.json({
            "time": req.time,
        })
    }
);


app.get("/:word/echo", (req, res) => {
    res.json({
        "echo": req.params.word
    })
}
);

app.get("/name", (req, res) => {
    res.json({
        "name": req.query.first + " " + req.query.last
    });
});

app.post("/name", (req, res) => {
    res.json({
        "name": req.body.first + " " + req.body.last
    });
});























 module.exports = app;
