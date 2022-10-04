import { Response, Request } from "express";
import iTrueque from "../model/interfaces/iTrueque";
import truequeModel from "../model/truequesModel";

const truequeController = {

    getTrueques: async (req: Request, res: Response) => {
        const trueques: any = await truequeModel.getTrueques();
        res.json(trueques);
    },

    sendInterest: async (req: Request, res: Response) => {
        try {
            const {
                conocimiento1_usuario_id,
                conocimiento2_usuario_id,
                ...trueques
            }: iTrueque = req.body;

            const resultado: iTrueque = await truequeModel.sendInterest({ conocimiento1_usuario_id, conocimiento2_usuario_id });

            res.status(200).json({ message: `Se ha enviado tu solicitud pendiente de trueque con el ID ${resultado.id_trueque}` });
        } catch (err: any) {
            res.status(400).json({
                error: err,
            });
        };
    },
    getPendingTrueques: async (req: Request, res: Response) => {
        console.log(req.params)
        const param: any = req.params["pendiente"];
        const trueques: any = await truequeModel.getPendingTrueques(param);
        res.json(trueques);
    },
    // createTrueque: async (req: Request, res: Response) => {
    //     try {
    //         const {
    //             conocimiento1_usuario_id,
    //             conocimiento2_usuario_id,
    //             ...trueques
    //         }: iTrueque = req.body;

    //         const resultado: iTrueque = await truequeModel.createTrueque({ conocimiento1_usuario_id, conocimiento2_usuario_id });

    //         res.status(200).json({ message: `Has confirmado la solicitud trueque con el ID ${resultado.id_trueque}` });
    //     } catch (err: any) {
    //         res.status(400).json({
    //             error: err,
    //         });
    //     };
    // },
    // updateTrueque: async (req: Request, res: Response) => {
    //     try {
    //         const {
    //             conocimiento1_usuario_id,
    //             conocimiento2_usuario_id,
    //             ...trueques
    //         }: iTrueque = req.body;

    //         const resultado: iTrueque = await truequeModel.updateTrueque({ conocimiento1_usuario_id, conocimiento2_usuario_id });

    //         res.status(200).json({ message: `Has rechazado la solicitud de trueque con el ID ${resultado.id_trueque}` });
    //     } catch (err: any) {
    //         res.status(400).json({
    //             error: err,
    //         });
    //     };
    // }
}
export default truequeController;