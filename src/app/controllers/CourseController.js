const Course = require('../models/Course.js')
const {mutilpleMongooseToObject} = require('../../untils/mongoose')

class CourseController {
    index(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if (!err) res.json(courses)
        //     else res.status(400).json({error: 'Course not found'})
        // })
        Course.find({})
            .then(courses => {
                courses = mutilpleMongooseToObject(courses)
                res.render('course', {courses})
                //res.send(courses)
            })
            .catch(next)
    }
}

module.exports = new CourseController()