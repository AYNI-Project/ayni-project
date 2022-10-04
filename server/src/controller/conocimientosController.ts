import { Response, Request } from "express";
import conocimientosModel from "../model/conocimientosModel";
import iConocimiento from "../model/interfaces/iConocimiento";

const conocimientosController = {
    getConocimientos: async (req: Request, res: Response) => {
        const conocimientos: any = await conocimientosModel.getConocimientos();
        res.json(conocimientos);
    },

    getUnConocimiento: async (req: Request, res: Response) => {
        const param: any = req.params["id"];
        const conocimientos: any = await conocimientosModel.getUnConocimiento(param);
        res.json(conocimientos);
    },
    getConocimientosByCategoryId: async (req: Request, res: Response) => {
        const param: any = req.params["category_id"];
        const conocimientos: any = await conocimientosModel.getConocimientosByCategoryId(param);
        res.json(conocimientos);
    },
    addConocimiento: async (req: Request, res: Response) => {
        try {
            const {
                titulo,
                descripcion,
                imagen,
                estado,
                ...conocimientos
            }: iConocimiento = req.body;

            if (
                !titulo ||
                !descripcion ||
                !imagen ||
                !estado
            )
                res.status(400).json({ message: "Por favor, rellena los campos obligatorios." });

            const resultado: iConocimiento = await conocimientosModel.addConocimiento({
                titulo,
                descripcion,
                imagen,
                estado,
                ...conocimientos,
            });
            res.status(200).json({
                message: `Tu oferta ${resultado.id_conocimientos_usuario} ha sido añadida con éxito.`,
            });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        }
    },
    editConocimiento: async (req: Request, res: Response) => {
        try {
            const id: any = req.params.id;
            const conocimientos: iConocimiento = req.body;

            const resultado: iConocimiento = await conocimientosModel.editConocimiento(
                id,
                conocimientos
            );
            res
                .status(200)
                .json({
                    message: `Tu oferta ${resultado.id_conocimientos_usuario} ha sido editada con éxito.`,
                });
        } catch (err) {
            return res.status(400).json({
                error: err,
            });
        }
    },
    deleteConocimiento: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const resultado: any = await conocimientosModel.deleteConocimiento(parseInt(id));

            res.status(200).json({
                message: `Tu oferta ${resultado.id_conocimientos_usuario} ha sido borrada con éxito.`,
            });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        }
    }
};

export default conocimientosController;