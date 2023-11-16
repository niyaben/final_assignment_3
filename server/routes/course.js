var express = require("express");
var router = express.Router();
let mongoose = require('mongoose');

//connect with course

let Course = require('../models/course');

let CourseController = require('../controller/course')
/* Get route for the Bio Courses list */
// Read Operation
router.get('/',CourseController.DislayCourselist);
/* Get route for Add Course page --> Create */
router.get('/add',CourseController.AddCourse); 
/* Post route for Add Course page --> Create */
router.post('/add',CourseController.ProcessCourse);
/* Get route for displaying the Edit Course page --> Update */
router.get('/edit/:id',CourseController.EditCourse);
/* Post route for processing the Edit Course page --> Update */
router.post('/edit/:id',CourseController.ProcessEditCourse);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id',CourseController.DeleteCourse);
 module.exports = router;
    