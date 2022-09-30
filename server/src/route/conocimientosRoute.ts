import { Router } from "express";
import conocimientosController from "../controller/conocimientosController";

const conocimientosRoute = Router();

//obtener todos los conocimientos
conocimientosRoute.get("/conocimientos", conocimientosController.getConocimientos);
//obtener el detalle de un conocimiento en concreto
conocimientosRoute.get("/conocimientos/:id", conocimientosController.getUnConocimiento);
//añadir un conocimiento
conocimientosRoute.post("/conocimientos/add", conocimientosController.addConocimiento);
//editar un conocimiento
conocimientosRoute.put("/conocimientos/edit/:id", conocimientosController.editConocimiento);
conocimientosRoute.patch("/conocimientos/edit/:id", conocimientosController.editConocimiento);
//eliminar un conocimiento
conocimientosRoute.delete("/conocimientos/:id", conocimientosController.deleteConocimiento
);

export default conocimientosRoute;