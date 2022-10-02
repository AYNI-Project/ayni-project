import { Router } from "express";
import conocimientosController from "../controller/conocimientosController";

const conocimientosRoute = Router();

//obtener todos los conocimientos
conocimientosRoute.get("/knowledge", conocimientosController.getConocimientos);
//obtener el detalle de un conocimiento en concreto
conocimientosRoute.get("/knowledge/:id", conocimientosController.getUnConocimiento);
//añadir un conocimiento
conocimientosRoute.post("/knowledge/upload", conocimientosController.addConocimiento);
//editar un conocimiento
conocimientosRoute.put("/knowledge/edit/:id", conocimientosController.editConocimiento);
conocimientosRoute.patch("/knowledge/edit/:id", conocimientosController.editConocimiento);
//eliminar un conocimiento
conocimientosRoute.delete("/knowledge/:id", conocimientosController.deleteConocimiento);

export default conocimientosRoute;