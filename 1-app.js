const express=require('express');

//express app
const app=express();

// register view engine
app.set('view engine','ejs');

//listen for request
app.listen(3000);

app.get('/',(req,res)=>{
    //res.send('<p>home pagee</p>');
    res.sendFile('./views/index.html',{ root: __dirname });
});

app.get('/about',(req,res)=>{
    //res.send('<p>about pagee</p>');
    res.sendFile('./views/about.html',{ root: __dirname });
});

// re-direct
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

// 404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{ root: __dirname });
})
