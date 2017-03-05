var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET log entries */
router.get('/entries', function(req, res) {
    var db = req.db;
    var entries = db.entries;
    entries.find({},{},function(e,docs){
        res.render('entries', {
            "entrylist" : docs.map(function (d) { return JSON.stringify(d, null, 2); })
        });
    });
});

module.exports = router;
