const { name } = require('ejs');
let mongoose = require('mongoose');
//create a course model
let Courses = mongoose.Schema({
    course_name: String,
    course_number: String,
    Prof_name: String,
    intake: String,
    Description: String,

},{
    collection: "data"
}
);
module.exports = mongoose.model('Course',Courses);