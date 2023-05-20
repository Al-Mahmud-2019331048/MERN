const http=require('http');
const port=3000;
const hostname='127.0.0.1';

const myServer= http.createServer((req,res)=>{
    // setting status code 
    res.writeHead(202,{'Content-Type':'text/plain'})
    res.write('Hello Peter!');
    // res.write('<h1>Hello Peter!</h1>');
    res.end();
    // res.end("<h1>Hello Mahmud!!!</h1>");
});

myServer.listen(port,hostname, ()=>{
    console.log(`Your server is running successfuly at http://${hostname}:${port}`);
});