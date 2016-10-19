//EXPRESS SETUP
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

//MESSAGE DATA
var messages = [];

//ENDPOINTS
app.get('/', function(req, res) {
  res
  .status(200)
  .send(JSON.stringify(messages));
});

app.post('/', function(req, res){
  messages.push({
    username: req.body.username,
    message: req.body.message,
    time: new Date()
});
  res
  .status(200)
  .send(JSON.stringify(messages));
});


app.listen(8989, function(){
  console.log('Listening on port 8989');
});
