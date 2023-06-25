const express=require("express");
const app=express();

const PORT=3001;

// http://localhost:3001/?id=101&age=23
app.get("/",(req,res)=>{
    // const id=req.query.id;
    // const age=req.query.age;
    const {id,age}=req.query;
    res.send(`Student id is: ${id} and age:${age}`);
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});