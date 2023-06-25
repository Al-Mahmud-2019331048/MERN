const express=require("express");
const app=express();

// importing userRouter.router 
const userRouter=require("./routes/users.route");
// url -> api/users/...... 
app.use("/api/users",userRouter);

// home route 
app.get("/",(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+"/views/index.html");
    res.cookie("name","Mahmud");
    res.cookie("age","23");
    res.end();
});

app.use("/register",(req,res)=>{
    res.statusCode=201;
    res.sendFile(__dirname+"/views/register.html");
    // res.redirect("/login");
});

// error page 
app.use((req,res)=>{
    res.send("<h1>404</h1> <br>Page not found\n");
});


// app.get("/about",(req,res)=>{
//     res.send("I am a get request at about route\n");
//     res.end();

// });

// app.post("/",(req,res)=>{
//     res.send("I am a post request at home route\n");
//     res.end();
// });

// app.put("/",(req,res)=>{
//     res.send("I am a put request at home route\n");
//     res.end();
// });

// app.delete("/",(req,res)=>{
//     res.send("I am a delete request at home route\n");
//     res.end();
// });


module.exports=app;