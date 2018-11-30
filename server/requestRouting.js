var express = require('express')
var path = require('path')
var router = express.Router()

var viewsPath = path.join(__dirname, '../public/')

router.get('/users', function(req, res){
  res.sendFile(viewsPath + 'users.html')
})

router.get('/admin', function(req, res){
  res.sendFile(viewsPath + 'admin.html')
})

router.get('/dashboard', function(req, res){
  res.sendFile(viewsPath + 'dashboard.html')
})

router.all('/*', function(req, res){
  res.send('No se encontro el recurso solicitado')
})

module.exports = router
