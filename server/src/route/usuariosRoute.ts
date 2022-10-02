import { Router } from "express";
import usuariosController from "../controller/usuariosController";

const usuariosRoute = Router();

usuariosRoute.get("/users/", usuariosController.getUsuarios);

usuariosRoute.get("/users/:id", usuariosController.getUnUsuario);

usuariosRoute.post("/users/register",usuariosController.addUsuario);

usuariosRoute.post("/users/login", usuariosController.loginUsuario);

usuariosRoute.post("users/edit/:id", usuariosController.editUsuario);

usuariosRoute.delete("/users/:id", usuariosController.deleteUsuario);

export default usuariosRoute;
