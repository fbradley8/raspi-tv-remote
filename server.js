var express = require('express');
var app = express();
var lirc = require('lirc_node');
 
app.use(express.static('public'));

app.get('/press/:key', function (req, res) {
	res.sendStatus(200);
	lirc.irsend.send_once('element', req.params.key, function() {});
});
 
app.listen(8080);
console.log('Server listening on port 8080');
