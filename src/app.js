// Importing express
const express = require('express');
const app = express();

//----------------------------------

// imporing path variable 
const path = require('path');

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

//----------------------------------


// All Page Routes
// ---------------------------------
app.get('/index',(req,res)=>{
    res.render('index')
})








// Application startup port setup
//----------------------------------
app.listen(port, ()=>{
    console.log(`Application is running successfully on ${port}`);
})