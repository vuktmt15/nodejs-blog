const Course = require('../models/Course.js')
const {mutilpleMongooseToObject, mongooseToObject} = require('../../untils/mongoose')

class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = mutilpleMongooseToObject(courses)
                res.render('me/stored_courses', {courses})
            })
            .catch(next)
    }
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                courses = mutilpleMongooseToObject(courses)
                res.render('me/trash_courses', {courses})
            })
            .catch(next)
    }
}

module.exports = new MeController()