/***
'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n Welcome to the world');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
***/


const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');

const path = __dirname + '/views/';
const port = 8080;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/sharks',function(req,res){
  res.sendFile(path + 'sharks.html');
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
