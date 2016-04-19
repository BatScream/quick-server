var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendFile('index.html',{ root: __dirname });
});

app.listen(8080, function () {
   console.log("Server listening on: http://localhost");
});
