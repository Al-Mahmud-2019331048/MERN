const http=require('http');
const port=3000;
const hostName='127.0.0.1';
const fs=require('fs');

const myServer = http.createServer((req,res)=>{

const handleReadFile=(statusCode,fileLoc)=>{
    fs.readFile(fileLoc,(err,data)=>{
        res.writeHead(statusCode,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}

    if(req.url==='/'){
        handleReadFile(200,'./views/index.html');
    }
    else if(req.url==="/about"){
        handleReadFile(201,'./views/about.html');
    }
    else if(req.url==='/contract'){
        handleReadFile(202,'./views/contract.html');
    }
    else{
        handleReadFile(404,'./views/error.html');
    }
});

myServer.listen(port,hostName , ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
});