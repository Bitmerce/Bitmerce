var express = require('express');
var app = express();
var port     = process.env.PORT || 8000;
var router = express.Router();

app.use(express.static(__dirname + '/server/'));

app.listen(port);
console.log('The magic happens on port ' + port);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/* GET home page. */
/*
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;*/


