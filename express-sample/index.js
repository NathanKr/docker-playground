console.log('app is loading');

const express = require('express');
const app = express()
const PORT=8080;

app.get('/',(req,res)=>{
    res.send("<h1>Welcome Nathan Krasney</h1>")
})

app.listen(PORT,()=>{
    console.log(`app is listening on port : ${PORT}`);
    
})



