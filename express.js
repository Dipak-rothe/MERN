const express = require("express");
const app=express();
const PORT=3000;
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/views/portfolio.html");
  app.use(express.static(__dirname + "/views"));
})
app.listen(PORT,()=>{
  console.log("SERVER IS RUNNING ON LOCALHOST");
})   