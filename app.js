const mongoose = require('mongoose')
const express = require('express')

const db = require('./config/creds')

const app = express()
const port = 3000


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            app.listen(port)
            console.log('Database connected!!')
        })
        .catch(err => console.log(err))