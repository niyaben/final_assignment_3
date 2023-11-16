let express = require('express');
let router = express.Router();

// Display the home page
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {
        title: 'Home'
    });
}

// Display the about page
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', {
        title: 'About me'
    });
}

// Display the projects page
module.exports.displayProjectPage = (req, res, next) => {
    res.render('index', {
        title: 'Projects'
    });
}

// Display the contact page
module.exports.displayContactPage = (req, res, next) => {
    res.render('index', {
        title: 'Contact us'
    });
}
