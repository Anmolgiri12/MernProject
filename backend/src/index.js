import http from "http";
import express from 'express';
import dotenv from "dotenv";
import webRouter from "./router/index.js";
import connection from "./config/connection.js";
dotenv.config();

const app =express();
const server= http.createServer(app);


app.use(express.json());
app.use(express.urlencoded({extented:true}));

connection();

app.use("/",webRouter);

let port = process.env.PORT || 3000;


server.listen(port,()=>{
    console.log(`server is running in port ${port}`);
});