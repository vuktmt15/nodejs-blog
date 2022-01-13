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
    create(req, res, next) {
        res.render('courses/create')
    }
    store(req, res, next) {
        const dataCourse = req.body
        dataCourse.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const newCourse = new Course(dataCourse)
        newCourse.save()
            .then(() => res.redirect('/courses/'))
            .catch(err => {

            })
    }
}

module.exports = new CourseController()