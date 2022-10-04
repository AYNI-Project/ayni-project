import { Router } from "express";
import categoriasController from "../controller/categoriasController";

const categoriasRoute = Router();

//obtener todas las categorias
categoriasRoute.get("/category", categoriasController.getCategorias);
//obtener el detalle de una categoria
categoriasRoute.get("/category/:id", categoriasController.getUnaCategoria);
//añadir una nueva categoria
categoriasRoute.post("/category/upload", categoriasController.addCategoria);
//editar una categoria
categoriasRoute.put("/category/edit/:id", categoriasController.editCategoria);
categoriasRoute.patch("/category/edit/:id", categoriasController.editCategoria);
//eliminar una categoria
categoriasRoute.delete("/category/:id", categoriasController.deleteCategoria);

export default categoriasRoute;