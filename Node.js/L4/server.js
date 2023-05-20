const http=require('http');
const port=3000;
const hostname='127.0.0.1';

// creating server
// http.createServer((req,res)=>{
//     res.end("Hello Mahmud!");
// }).listen(3000);

const myServer= http.createServer((req,res)=>{
        res.end("<h1>Hello Mahmud!</h1>");
});

myServer.listen(port,hostname, ()=>{
    console.log(`Your server is running successfuly at http://${hostname}:${port}`);
});