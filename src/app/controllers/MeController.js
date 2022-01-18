const Course = require('../models/Course.js')
const {mutilpleMongooseToObject, mongooseToObject} = require('../../untils/mongoose')

class MeController {
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCourses]) => {
                res.render('me/stored_courses', {
                    courses: mutilpleMongooseToObject(courses),
                    deletedCourses
            })})
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