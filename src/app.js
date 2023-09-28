// Import Section
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

//----------------------------------

// Intializing path for both server and local
const port = process.env.PORT || 8081;

//----------------------------------

// Setting static files to use
const staticPath = path.join(__dirname,'..','public');
app.use(express.static(staticPath))

//----------------------------------

// Setting view engine and views files to use
const templatePath = path.join(__dirname,'..','views');
app.set('view engine','hbs');
app.set('views',templatePath)

// Setting the partials
const partialPath = path.join(__dirname,'..','partials');
hbs.registerPartials(partialPath);

//----------------------------------


// All Page Routes
// ---------------------------------
// Home page
app.get('/',(req,res)=>{
    res.render('index',{
        name: 'Arunava'
    })
})

// weather page
app.get('/weather',(req,res)=>{
    res.render('weather')
})

// About page
app.get('/about',(req,res)=>{
    res.render('about')
})

// 404 error page
app.get('*',(req,res) => {
    res.render('404');
})








// Application startup port setup
//----------------------------------
app.listen(port, ()=>{
    console.log(`Application is running successfully on ${port}`);
})