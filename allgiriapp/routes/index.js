var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Allgiri App' });
});

router.use('/signup', require('./signup'));
router.use('/gametop', require('./gametop'));

module.exports = router;
