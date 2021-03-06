const express = require('express')
const path = require('path')
// const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000


var dbUri = process.env.MONGODB_URI

express()
  .set('views', './views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
