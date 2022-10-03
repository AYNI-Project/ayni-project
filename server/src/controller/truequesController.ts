import { Response, Request } from "express";
import truequeModel from "../model/truequesModel";

const truequeController = {

    getTrueques: async (req: Request, res: Response) => {
        const trueques: any = await truequeModel.getTrueques();
        res.json(trueques);
    },

};

export default truequeController;