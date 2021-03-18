

const express = require('express')
var cors = require('cors')

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
    // Do something here
    res.json([
      {name : "Bob", tag : "School", due : new Date()},
      {name : "Bob", tag : "School", due : new Date()},

      {name : "Bob", tag : "School", due : new Date()},

      {name : "Bob", tag : "School", due : new Date()}]

   
  
  )
  })
  app.get('/sections', async (req, res) => {
    // Do something here
    res.json([
      {name :"School", textColor : "#ff9966", backgroundColor : "#fffff"},
      {name :"Personal", textColor : "#660066", backgroundColor : "#fffff"},
      {name :"Work", textColor : "#cc3300", backgroundColor : "#fffff"},
  
  
  
  ]
     

   
  
  )
  })
app.post('/', async (req, res) => {
    // Do something here
    console.log("reqiest")
    res.json({id : "1209h91u2hbdipub"})
  })

  app.listen(8000)