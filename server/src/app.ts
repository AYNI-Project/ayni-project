import express, { Request, Response } from "express";
import cors from "cors";
import conocimientosRouter from "./route/conocimientosRoute";
import usuarioRoute from "./route/usuariosRoute";

// const nodemailer = require('nodemailer');
const app = express();
// const router = express.Router();
// app.use("/", router);
app.use(cors());
app.use(express.json());
app.use(conocimientosRouter);
app.use(usuarioRoute)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get("/", (req: Request, res: Response) => {
    res.json("Hey there! Welcome to AYNI.");
});

export default app;