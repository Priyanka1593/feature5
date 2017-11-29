const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
var app=express();
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{
    var now=new Date().toString();
    var log=`${now}: ${req.method} : ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log+'\n');
    next();
});
app.get('/',(req,res)=>{
    //res.send('<h1>Hello Express</h1>');
    res.render('home.hbs',{
        pageTitle:"Home Page",
        pageDescription:"Welcome to Home Page",
        currentYear:new Date().getFullYear()
    });
});  

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:"About Page...by Priya",
        currentYear:new Date().getFullYear()
    });
});
app.listen(3000, ()=>{
    console.log('Listening to the 3000');
});