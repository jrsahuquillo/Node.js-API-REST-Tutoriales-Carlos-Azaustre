'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Database conection error: ${err}`)
  }
  console.log('Database conection established...')

  app.listen(config.port, () => {
    console.log(`API REST running in http://localhost:${config.port}`)
  })
})
