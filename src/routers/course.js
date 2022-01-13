const express = require('express')
const courseRoute = express.Router()
const CourseController = require('../app/controllers/CourseController')


courseRoute.get('/', CourseController.index)
courseRoute.get('/create', CourseController.create)
courseRoute.post('/store', CourseController.store)
courseRoute.get('/:slug', CourseController.show)

module.exports = courseRoute