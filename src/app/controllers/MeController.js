const Course = require('../models/Course.js')
const {mutilpleMongooseToObject, mongooseToObject, formatCreatedAtInObject} = require('../../untils/mongoose')

class MeController {
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCourses]) => {
                courses = mutilpleMongooseToObject(courses)
                courses = formatCreatedAtInObject(courses)
                res.render('me/stored_courses', {
                    courses,
                    deletedCourses
            })})
            .catch(next)

    }
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                courses = mutilpleMongooseToObject(courses)
                courses = formatCreatedAtInObject(courses)
                res.render('me/trash_courses', {courses})
            })
            .catch(next)
    }
}

module.exports = new MeController()