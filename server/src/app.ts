import express, { Request, Response } from "express";
import cors from "cors";
import conocimientosRouter from "./route/conocimientosRoute";
import usuarioRoute from "./route/usuarioRoute";

const app = express();
app.use(cors());
app.use(express.json());
app.use(conocimientosRouter);
app.use(usuarioRoute)

app.get("/", (req: Request, res: Response) => {
    res.json("Hey there! Welcome to AYNI.");
});

export default app;