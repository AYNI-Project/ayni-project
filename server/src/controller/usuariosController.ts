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
    loginUsuario: async (req: Request, res: Response) => {
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
    editUsuario: async (req: Request, res: Response) => {
        try {
            const id: any = req.params.id;
            const usuario: iUsuario = req.body;

            const resultado: iUsuario = await usuariosModel.editUsuario(
                id,
                usuario
            );
            res
                .status(200)
                .json({
                    message: `Tu perfil ${resultado.id_usuario} ha sido editado con éxito.`,
                });
        } catch (err) {
            return res.status(400).json({
                error: err,
            });
        }
    },
    deleteUsuario: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const resultado: any = await usuariosModel.deleteUsuario(parseInt(id));

            res.status(200).json({
                message: `Tu perfil ${resultado.id_usuario} ha sido borrado con éxito.`,
            });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        }
    }
};
export default usuariosController;
