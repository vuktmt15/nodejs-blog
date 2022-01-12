const express = require('express')
const rootRouter = express.Router()
const courseRoute = require('./course')
const siteRouter = require('./site')

rootRouter.use('/courses', courseRoute)
rootRouter.use('/', siteRouter)

module.exports = rootRouter