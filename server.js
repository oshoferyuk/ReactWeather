var express = require('express');

var app = express();
const PORT = process.env.port || 3000;

app.use(function(req, res, next){
    next();
});

app.use(express.static('public'));

app.listen(PORT, function(){
    console.log('Express server is up on port ' + PORT);
});
