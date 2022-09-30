import { Router } from "express";
import usuarioController from "../controller/usuarioController";

const usuarioRoute = Router();

usuarioRoute.get("/usuarios/", usuarioController.getUsuarios);

usuarioRoute.get("/usuarios/:id", usuarioController.getUnUsuario);

usuarioRoute.post("/usuarios/register",usuarioController.addUsuario);

usuarioRoute.post("/usuarios/login", usuarioController.loginController);

// usuarioRoute.put("usuarios/edit/:id", usuarioController.editUsuario);

// usuarioRoute.delete("/conocimientos/:id", usuarioController.deleteUsuario);

export default usuarioRoute;
