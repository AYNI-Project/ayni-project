import express, {Request,Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import "./App.css";

dotenv.config()

const app = (express.json);
app.use(cors())

app.get('/',(req:Request,res:Response)=>{
    res.json('hello world');
})

export default app;
