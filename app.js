const { request, response } = require('express');
const express = require('express');

const app = express();

// GET, PUT, POST, DELETE 

app.get('/' , (request,response, next) => {
    response.sendFile(__dirname +'/index.html');
})

app.get('/home', (request,response, next) => {
    response.sendFile(__dirname +'/home.html');
    console.log(__dirname);
})

app.get('/contact', (request,response, next) => {
    console.log(request);
    response.sendFile(__dirname +'/contact.html');
})


function logger(request, response){
    console.log(req.originalUrl);
    next();
}

// Server Started;

app.listen(3000, () => console.log("My first app listening on port 3000!"));