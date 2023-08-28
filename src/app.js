const express = require('express');

const app = express();

const port = 8081;

app.get('/',(req,res)=>{
    res.send("Express Working");
})

app.listen(port, ()=>{
    console.log(`Application is running on ${port}`);
})