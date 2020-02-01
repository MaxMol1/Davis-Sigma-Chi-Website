const path = require('path')
const express = require('express')
const hbs = require('hbs')

var PORT = process.env.PORT || 8000
const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))

// Render main page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Physics Quiz App',
    })
})

// Render details page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
    })
})

// Render officers page
app.get('/philanthropy', (req, res) => {
    res.render('philanthropy', {
        title: 'Philanthropy',
    })
})

// Render officers page
app.get('/officers', (req, res) => {
    res.render('officers', {
        title: 'Officers',
    })
})

// 404 pages
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
    })
})

app.listen(PORT, () => {
    console.log('Server is up on port 8000')
})
