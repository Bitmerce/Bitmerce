var express = require('express');
var app = express();
var port     = process.env.PORT || 8000;
var router = express.Router();

app.use(express.static(__dirname + '/server/'));

app.listen(port);
console.log('The magic happens on port ' + port);

/* GET home page. */
/*
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;*/


