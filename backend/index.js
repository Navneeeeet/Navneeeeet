import e from "express";

const app=e();

app.get("/",(req,res)=>{
    res.send({
        message:"Hey my server is running",
        success:true
    })
})

app.listen(3200,() =>{
    console.log("Server running on port 3200");
});