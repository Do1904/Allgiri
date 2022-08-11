var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  console.log(`isAuth: ${isAuth}`);

  res.render('index', {
    title: 'Allgiri App',
    isAuth: isAuth
  });
});

router.post('/', function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);

  res.render('index', {
    title: 'Allgiri App',
    isAuth: isAuth
  });
});

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/signout', require('./signout'));
router.use('/gametop', require('./gametop'));

module.exports = router;
