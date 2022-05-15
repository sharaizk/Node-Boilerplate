const express = require('express')
const cors = require('cors')
const fileupload = require('express-fileupload')

// === Improved Security ===
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')

const app = express()

// === DB Connection ===

const database = require('./config/database')


// === CORS Enabled ===
app.use(cors())

// === import Routes here ===

// === Enabling file uplod
app.use(fileupload())

// === Adding Secuirty ===

app.use(mongoSanitize())
app.use(xss())

app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true }))

// === Connecting the DB ===
database.connect()

// === Initiate Routes Here ===

module.exports=app
