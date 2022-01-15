const express = require('express')
const courseRoute = express.Router()
const CourseController = require('../app/controllers/CourseController')


courseRoute.get('/', CourseController.index)
courseRoute.get('/create', CourseController.create)
courseRoute.post('/store', CourseController.store)
courseRoute.get('/:id/edit', CourseController.edit)
courseRoute.put('/:id', CourseController.update)
courseRoute.patch('/:id/restore', CourseController.restore)
courseRoute.delete('/:id', CourseController.destroy)
courseRoute.delete('/:id/force', CourseController.forceDestroy)
courseRoute.get('/:slug', CourseController.show)

module.exports = courseRoute