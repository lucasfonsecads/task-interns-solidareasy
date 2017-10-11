var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');


app.get('/', function (req, res) {
    res.end(fs.readFileSync('/Users/JC/Documents/jstasks/task-interns-solidareasy/nodetask1.1/index.html'))    
   
});
 
app.listen(3000, function(){
    console.log('Running on 3000');
});


