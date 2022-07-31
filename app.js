const express = require('express')
const app = express()
const cors = require('cors')
const transactionsController = require('./controllers/transactionsController.js')
const { response } = require('express')

app.use(express.json())
app.use(cors())

app.get('/', (request, response)=>{
  response.send('Welcome to the Back-end of our Budgeting Application')
})

app.use('/transactions', transactionsController);

app.get('*',(request, response)=>{
  response.status(404).json({
    error: 'Page Not Found'
  })
})

module.exports = app