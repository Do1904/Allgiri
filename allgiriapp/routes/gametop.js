const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/gametop', function(req, res, next) {
  res.render('gametop', { title: 'Allgiri App' });
});


module.exports = router;