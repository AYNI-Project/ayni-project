import { Router } from "express";
import categoriasController from "../controller/categoriasController";

const categoriasRoute = Router();

//obtener todos los conocimientos
categoriasRoute.get("/category", categoriasController.getCategorias);
//obtener el detalle de un conocimiento en concreto
categoriasRoute.get("/category/:id", categoriasController.getUnaCategoria);
//añadir un conocimiento
categoriasRoute.post("/category/upload", categoriasController.addCategoria);
//editar un conocimiento
categoriasRoute.put("/category/edit/:id", categoriasController.editCategoria);
categoriasRoute.patch("/category/edit/:id", categoriasController.editCategoria);
//eliminar un conocimiento
categoriasRoute.delete("/category/:id", categoriasController.deleteCategoria);

export default categoriasRoute;