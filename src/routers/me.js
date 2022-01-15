const express = require('express')
const meRoute = express.Router()
const MeController = require('../app/controllers/MeController')


meRoute.get('/stored/courses', MeController.storedCourses)
meRoute.get('/trash/courses', MeController.trashCourses)

module.exports = meRoute