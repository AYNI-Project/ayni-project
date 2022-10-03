import { Response, Request } from "express";
import categoriasModel from "../model/categoriasModel";
import iCategoria from "../model/interfaces/iCategoria";

const categoriasController = {
    getCategorias: async (req: Request, res: Response) => {
        const categorias: any = await categoriasModel.getCategorias();
        res.json(categorias);
    },

    getUnaCategoria: async (req: Request, res: Response) => {
        const param: any = req.params["id"];
        const categorias: any = await categoriasModel.getUnaCategoria(param);
        res.json(categorias);
    },

    addCategoria: async (req: Request, res: Response) => {
        try {
            const {
                nombre,
                imagen,
                ...categorias
            }: iCategoria = req.body;

            if (
                !nombre
            )
                res.status(400).json({ message: "Por favor, rellena los campos obligatorios." });

            const resultado: iCategoria = await categoriasModel.addCategoria({
                nombre,
                imagen,
                ...categorias
            });
            res.status(200).json({
                message: `Una nueva categoria ${resultado.id_categoria} ha sido añadida con éxito.`,
            });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        }
    },

    editCategoria: async (req: Request, res: Response) => {
        try {
            const id_categoria: any = req.params.id;
            const categorias: iCategoria = req.body;

            const resultado: iCategoria = await categoriasModel.editCategoria(
                id_categoria,
                categorias
            );
            res
                .status(200)
                .json({
                    message: `Tu categoria ${resultado.id_categoria} ha sido editada con éxito.`,
                });
        } catch (err) {
            return res.status(400).json({
                error: err,
            });
        }
    },
    deleteCategoria: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const resultado: any = await categoriasModel.deleteCategoria(parseInt(id));

            res.status(200).json({
                message: `Tu categoria ${resultado.id_categoria} ha sido borrada con éxito.`,
            });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        }
    }
};

export default categoriasController;