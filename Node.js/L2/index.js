const fs=require('fs');

// console.log(fs);

// create and write file 
// fs.writeFile('demo1.txt','This is a sample text',function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successful!");
//     }
// });

// appending 
// fs.appendFile('demo1.txt','\nMy name is Mahmud', (err)=>{
//     if(err) console.log(err);
//     else console.log("Successful!");
// });

// read from file 
// fs.readFile('demo1.txt','utf-8',(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data);
// });

// rename fie 
// fs.rename('demo1.txt','demo2.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log("Successful!");
// })

// delete fie 
// fs.unlink('demo2.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log("Successfully deleted");
// });

// exist or not 
// fs.exists('demo2.txt',(result)=>{
//     if(result) console.log("Found");
//     else console.log("Not found");
// })


// for synchronize , easy to emplement
fs.writeFileSync('demo.txt',"Sync file created");