import { Response, Request } from "express";
import favoritosModel from "../model/favoritosModel";
import iFavoritos from "../model/interfaces/iFavorito";

const favoritosController = {
    getMyFavoritos: async (req: Request, res: Response) => {
        const param: any = req.params["usuario"];
        const categorias: any = await favoritosModel.getMyFavoritos(param);
        res.json(categorias);
    },

    getUnFavorito: async (req: Request, res: Response) => {
        const param: any = req.params["id_favorito"];
        const categorias: any = await favoritosModel.getUnFavorito(param);
        res.json(categorias);
    },
    addFavorito: async (req: Request, res: Response) => {
        try {
            const {
                usuario_id,
                conocimientos_usuario_id,
                ...favorito
            }: iFavoritos = req.body;

            const resultado: iFavoritos = await favoritosModel.addFavorito({
                usuario_id,
                conocimientos_usuario_id,
                ...favorito
            });
            res.status(200).json({
                message: `Una nuevo favorito ${resultado.id_favorito} ha sido añadido con éxito.`,
            });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        }
    },
    deleteFavorito: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const resultado = await favoritosModel.deleteFavorito(parseInt(id));

            res.status(200).json({
                message: `Tu favorito ${resultado.id_favorito} ha sido eliminado con éxito.`,
            });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        }
    }
};

export default favoritosController;