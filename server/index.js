const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors())
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'f6ee5b160e9141e8a59a037cecde5b4b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
    rollbar.info('inside homepage')
})

app.use(express.static('public'))

const port = process.env.PORT || 4005

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})