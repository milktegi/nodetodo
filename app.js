var express = require('express');
var app = express();

var port = process.env.PORT || 3003;
app.use('/assets', express.static(__dirname + '/public'));

app.set('vie engine', 'ejs');

app.listen(port);