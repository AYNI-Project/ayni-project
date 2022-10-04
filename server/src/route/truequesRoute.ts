import { Router } from "express";
import truequesController from "../controller/truequesController";

const truequesRoute = Router();

//obtener lista de trueques
truequesRoute.get("/trades/", truequesController.getTrueques);
// cuando usuario A inicia sesión se le muestra el total de peticiones de trueques pendientes a aceptar o rechazar
truequesRoute.get("/trades/pending/:id_usuario", truequesController.getPendingTrueques);
// crear el trueque
truequesRoute.post("/trades/:id_trueque", truequesController.createTrueque);
// //cambiar estado de pendiente a aceptado o rechazado
truequesRoute.put("/trades/:id_trueque", truequesController.updateTrueque);

export default truequesRoute;