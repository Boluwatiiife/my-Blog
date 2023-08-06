const http=require('http');
const fs=require('fs');
const _=require('lodash');

const server=http.createServer((req,res)=>{

    //lodash
    const numm=_.random(0,12);
    console.log(numm);

    const greet=_.once(()=>{
        console.log('hello idann!')
    });
    greet();
    greet();

    //set header content type
    res.setHeader('Content-Type','text/html');

    let path='./views/';
    switch(req.url){
        case '/':
            path +='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path +='about.html';
            res.statusCode=200;
            break;   
        case '/about-life':
            res.statusCode=301;// Re-direct.
            res.setHeader('Location','/about');
            res.end();
            break;       
        default:
            path +='404.html';
            res.statusCode=404;
            break;       
    }

    //send at html file
    fs.readFile(path,(err,data)=>{//err and data(the data your're reading)
        if(err){
            console.log(err)
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000');
})