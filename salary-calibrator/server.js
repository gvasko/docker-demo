var connect = require('connect'),
    serveStatic = require('serve-static'),
    port = 80;

var app = connect();

app.use(serveStatic(__dirname + '/src/client'));
app.listen(port);

console.log('Server running at http://localhost:' + port);
