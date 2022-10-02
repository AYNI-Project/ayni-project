import { Response, Request } from "express";
import usuariosModel from "../model/usuariosModel";
import { iUsuario, iUsuariologin } from "../model/interfaces/iUsuario";

const usuariosController = {
    getUsuarios: async (req: Request, res: Response) => {
        const usuarios: any = await usuariosModel.getUsuarios();
        res.json(usuarios);
    },
    getUnUsuario: async (req: Request, res: Response) => {
        const param: any = req.params["id"];
        const usuarios: any = await usuariosModel.getUnUsuario(param);
        res.json(usuarios);
    },
    addUsuario: async (req: Request, res: Response) => {
        try {
            const {
                foto,
                nombre,
                apellidos,
                ciudad,
                sobre_mi,
                email,
                password,
                telefono,
                opiniones,
                ...usuarios
            }: iUsuario = req.body;
            if (!email || !password) {
                res
                    .status(400)
                    .json({ message: "Porfavor, rellene todos los campos obligatorios." });
            }
            const resultado: iUsuario = await usuariosModel.addUsuario({
                foto,
                nombre,
                apellidos,
                ciudad,
                sobre_mi,
                email,
                password,
                telefono,
                opiniones,
                ...usuarios
            });

            res.status(200).json({
                message: `El usuario ${resultado.id_usuario} ha sido añadido con éxito.`,
            });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        }
    },
    loginController: async (req: Request, res: Response) => {
        try {
            const {
                email,
                password,
            }: iUsuariologin = req.body;

            if (!email || !password) {
                res
                    .status(400)
                    .json({ message: "Porfavor, rellena todos los campos obligatorios." });
            }
            const resultado: iUsuario = await usuariosModel.loginUsuario({
                email,
                password,
            });

            res.status(200).json({
                message: `El usuario ${resultado.id_usuario} ha iniciado sesión correctamente.`,
            });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        }
    },
};
export default usuariosController;
