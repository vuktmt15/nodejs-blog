const express = require('express')
const rootRouter = express.Router()
const courseRoute = require('./course')
const meRoute = require('./me')
const siteRouter = require('./site')

rootRouter.use('/courses', courseRoute)
rootRouter.use('/me', meRoute)
rootRouter.use('/', siteRouter)

module.exports = rootRouter