const express = require('express');
const morgan = require('morgan'); 
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://bolu-idan:test1234@nodebolu.mdvwkog.mongodb.net/node-idan?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result)=> app.listen(3000))
.catch((err)=> console.log(err));

// register view engine
app.set('view engine','ejs');

// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandBox routes
app.get('/add-blog', (req,res)=>{
    const blog=new Blog({
        title: 'Idan\'s new blog volume 2',
        snippet: 'about my new blog',
        body: 'more about idan\'s latest blog'
    });

    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    });
});

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.get('/single-blog',(req,res)=>{
    Blog.findById('64ce3f2f522381756261373a')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })

})


// route
app.get('/',(req,res)=>{
    const blogs=[
        {title:'learn JavaScript in 3days, lol',snippet:'fuck around and find out'},
        {title:'become a forex trader in 2weeks, lmao',snippet:'the market is your friend, earn from it'},
        {title:'plans for the future?',snippet:'live a very fulfilled life, make Daddy proud'}
    ];
    res.render('index',{title:'Homee',blogs});
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new Blog'});
})

// 404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})
