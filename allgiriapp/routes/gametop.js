const express = require('express');
const { default: knex } = require('knex');
const router = express.Router();

/* GET home page. */
router.get('/gametop', function(req, res, next) {
  res.render('index', { title: 'Allgiri App' });
});


module.exports = router;