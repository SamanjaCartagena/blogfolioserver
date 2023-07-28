const express = require('express');
const http= require('http');
const fs = require('fs');
const cors= require('cors');
const port=4000;
const app = express();

app.use(cors());

const server= http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'})
  fs.readFile('index.html', function(error,data){
      if(error){
          res.writeHead(404)
          res.write('Error: File not found')
      }else{
          res.write(data)
          console.log('Reading the index file');
      }
      res.end()
  })
  

})
app.route('/').get((req, res, next) => {
  res.sendFile(__dirname + '/index.html');
})
app.get('/twitter', (req, res) => {
  res.sendFile(__dirname + '/twitter.html');
})
app.listen(port, function(error){
  if(error){
      console.log('Something went wrong', error)
  }
  else{
      console.log('Server is listening on port '+port);
  }
})