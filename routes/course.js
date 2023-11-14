var express = require("express");
var route = express.Router();
let mongoose = require('mongoose');

//connect with course

let Course = require('../models/course');

//read operation
//get route for course list

route.get('/', async (req,res,next)=>{
    try{
        const CourseList = await Course.find();
        res.render('Bio_courses',{
            title: 'Course List',
            CourseList: CourseList
        });
    }catch(err){
        console.error(err);
        //handle error
        res.render('Bio_List',{
            error: 'Error on server'
        })
    }
});
    
module.exports=route;