import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/user.routes.js";
import messageRouter from "./routes/message.routes.js";
import { app, server } from "./socket/socket.js";
dotenv.config()


app.use(cors({
    origin:"https://chat-application-frontend-gpeb.onrender.com",credentials:true
}))
const Port=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/message",messageRouter)
app.get("/",(req,res)=>{
    res.send("hello ")
})
server.listen(Port,()=>{
    connectdb();
    console.log("server is running...")
})
