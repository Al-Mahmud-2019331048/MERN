const express=require("express");
const router=express.Router();

// http://localhost:3000/api/users/....

router.get("/register", (req,res)=>{
    res.send("<h1>I am a register page\n</h1>");
});

router.get("/login",(req,res)=>{
    res.send("<h1>I am a login page\n</h1>");
});


//exporting router to router.js
module.exports= router;