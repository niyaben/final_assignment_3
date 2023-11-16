let express = require('express');
let router = express.Router();
let indexController = require('../controller/index')

/* GET home page. */
router.get('/',indexController.displayHomePage)

/* GET home page. */
router.get('/home',indexController.displayHomePage)

/* GET About me page. */
router.get('/aboutme',indexController.displayAboutPage)


/* GET project page. */
router.get('/projects',indexController.displayProjectPage) 

/* GET contact us page. */
router.get('/contactus',indexController.displayContactPage)

module.exports = router;
