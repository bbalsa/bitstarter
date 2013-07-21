var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

# var text = new Buffer(fs.readFileSync('index.html'));
# var text = new Buffer("test av buffer");
# text.toString();

var outtext = fs.readFileSync('index.html', 'utf-8');

# var outtext = text.toString('utf-8');

app.get('/', function(request, response) {  
  response.send(outtext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
