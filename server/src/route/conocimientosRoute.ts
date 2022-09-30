import { Router } from "express";
import conocimientosController from "../controller/conocimientosController";

const conocimientosRouter = Router();

//obtener todos los conocimientos
conocimientosRouter.get("/conocimientos", conocimientosController.getConocimientos);
//obtener el detalle de un conocimiento en concreto
conocimientosRouter.get("/conocimientos/:id", conocimientosController.getUnConocimiento);
//añadir un conocimiento
conocimientosRouter.post("/conocimientos/add", conocimientosController.addConocimiento);
//editar un conocimiento
conocimientosRouter.put("/conocimientos/edit/:id", conocimientosController.editConocimiento);
conocimientosRouter.patch("/conocimientos/edit/:id", conocimientosController.editConocimiento);
//eliminar un conocimiento
conocimientosRouter.delete("/conocimientos/:id", conocimientosController.deleteConocimiento
);

export default conocimientosRouter;