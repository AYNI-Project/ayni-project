import { Router } from "express";
import truequesController from "../controller/truequesController";

const truequesRoute = Router();

truequesRoute.get("/trades/", truequesController.getTrueques);

// enviar interes de un conocimiento
// truequesRoute.post("/users/", truequeController.getUsuarios);

// truequesRoute.get("/users/:id", truequeController.getUnUsuario);

// truequesRoute.post("/users/register", truequeController.addUsuario);

// truequesRoute.post("/users/login", truequeController.loginUsuario);

// truequesRoute.post("users/edit/:id", truequeController.editUsuario);

// truequesRoute.delete("/users/:id", truequeController.deleteUsuario);

export default truequesRoute;