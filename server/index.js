

const express = require('express')
var cors = require('cors')
var uniqid = require('uniqid')
const app = express()
var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
  }));

  app.use(bodyParser.json());
var servers = [
  {name : "Unime", address : "https://unime.io", due : new Date(), id : uniqid()},
  {name : "PRStash", address : "https://prstash.com", due : new Date(),id : uniqid()},
  {name : "Personal", address : "https://leonardmelnik.com", due : new Date(),id : uniqid()},
  {name : "WooCommerce to QB", address : "https://unime.io", due : new Date(),id : uniqid()}]

app.get('/', async (req, res) => {
    // Do something here
    res.json([
      {name : "Bob", tag : "School", due : new Date()},
      {name : "Jeff", tag : "School", due : new Date()},

      {name : "Fred", tag : "School", due : new Date()},

      {name : "Mercery", tag : "School", due : new Date()}]

   
  
  )
  })
  app.get('/servers', async (req, res) => {
    // Do something here
    res.json(
servers
   
  
  )
  })
  app.post('/addServer', async (req, res) => {
    var newServer = req.body
    console.log(newServer)
    newServer.id = uniqid()
    servers.push(newServer)
    console.log("adding new server")
    // Do something here
    res.json(
      {status : true}
  
  
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