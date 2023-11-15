var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Course = require('../models/course');

module.exports.DislayCourselist = async (req,res,next)=>{ //< Mark function as async
    try{
       const CourseList = await Course.find(); //< Use of await keyword
       res.render('course/list', {
          title: 'Course', 
          CourseList: CourseList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('course/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddCourse = async (req,res,next)=>{
    try{
        res.render('course/add',
        {
            title:'Add Course'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('course/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessCourse = async (req,res,next)=>{
    try{
        let newCourse = Course({
            "course_name":req.body.course_name,
            "course_number": req.body.course_number,
            "Prof_name": req.body.Prof_name,
            "Description": req.body.Description,
            "intake": req.body.intake
            
        });
        Course.create(newCourse).then(() =>{
            res.redirect('/course-list')
        })
    }
    catch(error){
        console.error(err);
        res.render('course/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditCourse = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const courseToEdit = await Course.findById(id);
    res.render('course/edit',
    {
        title:'Edit Course',
        Course:courseToEdit
    })
}
catch(error){
    console.error(err);
    res.render('course/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditCourse = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedCourse = Course({
            "_id":id,
            "course_name":req.body.course_name,
            "course_number": req.body.course_number,
            "Prof_name": req.body.Prof_name,
            "Description": req.body.Description,
            "intake": req.body.intake
        });
        Course.findByIdAndUpdate(id,updatedCourse).then(()=>{
            res.redirect('/course-list')
        });
    }
    catch(error){
        console.error(err);
        res.render('course/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteCourse = (req,res,next)=>{
    try{
        let id = req.params.id;
        Course.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/course-list')
        })
    }
    catch(error){
        console.error(err);
        res.render('course/list',
        {
            error: 'Error on the server'
        });
    }
}