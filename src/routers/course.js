const express = require('express')
const courseRoute = express.Router()
const CourseController = require('../app/controllers/CourseController')


courseRoute.get('/', CourseController.index)

module.exports = courseRoute