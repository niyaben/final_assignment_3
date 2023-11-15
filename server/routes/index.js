var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
  });
});

/* GET About me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { 
    title: 'About me' 
  });
});

/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects' 
  });
});

/* GET contact us page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { 
    title: 'Contact us' 
  });
});

module.exports = router;
