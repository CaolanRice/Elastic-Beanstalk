var express = require('express');
var app = express();
var fs = require('fs');
var port = 8080;

//serve html when request for / is made
app.get('/', function (req, res) {
    html = fs.readFileSync('index.html');
    res.writeHead(200);
    res.write(html);
    res.end();
});

app.get('/test', function (req, res) {
    res.send('TEST!');
});


app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:%s', port);
});