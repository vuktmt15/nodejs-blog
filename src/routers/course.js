const express = require('express')
const courseRoute = express.Router()
const CourseController = require('../app/controllers/CourseController')


courseRoute.get('/', CourseController.index)
courseRoute.get('/:slug', CourseController.show)

module.exports = courseRoute