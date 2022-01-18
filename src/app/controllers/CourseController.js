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
            .catch(next)
    }
    edit(req, res, next) {
        Course.findOne({_id: req.params.id})
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)
    }
    update(req, res, next) {
        const dataCourse = req.body
        dataCourse.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        Course.updateOne({_id: req.params.id}, dataCourse)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    destroy(req, res, next) {
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    forceDestroy(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
    handleMultipleCourses(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({_id: {$in: req.body.courseIds}})
                    .then(() => res.redirect('back'))
                    .catch(next)
                break
            case 'restore':
                Course.restore({_id: {$in: req.body.courseIds}})
                    .then(() => res.redirect('back'))
                    .catch(next)
                break
            case 'force_delete':
                Course.deleteMany({_id: {$in: req.body.courseIds}})
                    .then(() => res.redirect('back'))
                    .catch(next)
                break
            default:
                res.json('Action is invalid!')
        }

    }
}

module.exports = new CourseController()