import express, { Request, Response } from "express";
import cors from "cors";
import conocimientosRouter from "./route/conocimientosRoute";
import usuariosRouter from "./route/usuariosRoute";
import dotenv from 'dotenv';

dotenv.config();

// const nodemailer = require('nodemailer');
// const router = express.Router();
// app.use("/", router);

const app = express();
app.use(cors());
app.use(express.json());
app.use(conocimientosRouter);
app.use(usuariosRouter)

app.get("/", (req: Request, res: Response) => {
    res.json("Hey there! Welcome to AYNI.");
});

export default app;