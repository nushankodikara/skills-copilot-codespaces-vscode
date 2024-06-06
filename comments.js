// Create web server
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 8080;

// Set up the body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the static files
app.use(express.static(path.join(__dirname, "public")));

// Set up the comments
var comments = [{ name: "John", comment: "Hello!" }];

// Set up the routes
app.get("/comments", function (req, res) {
    res.json(comments);
});

app.post("/comments", function (req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comments);
});

// Start the server
app.listen(port, function () {
    console.log("Server started on http://localhost:" + port);
});
