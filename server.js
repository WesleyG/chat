// include express package and start server
var express = require('express'), app = express.createServer();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// disable express's default layout
app.set("view options", { layout: false });
app.configure(function() {
    app.use(express.static(__dirname + '/public'));
});