const Course = require('../models/Course.js')
const {mutilpleMongooseToObject, mongooseToObject} = require('../../untils/mongoose')

class CourseController {
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = mutilpleMongooseToObject(courses)
                res.render('courses/index', {courses})
            })
            .catch(next)
    }
    show(req, res, next) {
        const {slug} = req.params
        Course.findOne({slug})
            .then(course => {
                course = mongooseToObject(course)
                res.render('courses/show', {course})
            })
            .catch(next)
    }
}

module.exports = new CourseController()