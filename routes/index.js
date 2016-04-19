var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // write to my database using knex
  // send a feedback to my client side like res.status(200).send('ok');
});

module.exports = router;
