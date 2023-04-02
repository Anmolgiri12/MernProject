import express from "express";
import userRouter from "./user.js";

let webRouter= express.Router();


webRouter.use("/",(req,res)=>{
    res.send('hello world')
});
webRouter.use("/user", userRouter)

export default webRouter;