var http = require('http')
var express = require('express')
var routing = require('./requestRouting.js')


var PORT = 8080
var app = express()
app.use(routing)

var Server = http.createServer(app)
Server.listen(PORT, function(){
  // Poner un mensaje en la consola
  console.log("Servidor funcionando en el puerto " + PORT)
});
