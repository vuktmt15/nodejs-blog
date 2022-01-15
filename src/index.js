const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 3000
const db = require('./config/db')
const CourseController = require('./app/controllers/CourseController')
const rootRouter = require('./routers')

db.connect()

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '/public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.engine('hbs', handlebars({
    extname: ".hbs",
    helpers: {
        sum: (a, b) => a+b
    }
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))



app.use(rootRouter)

app.listen(port, () => {
    console.log(`App run on http://localhost:${port}`)
})