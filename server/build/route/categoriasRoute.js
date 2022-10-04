"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var categoriasController_1 = __importDefault(require("../controller/categoriasController"));
var categoriasRoute = (0, express_1.Router)();
//obtener todas las categorias
categoriasRoute.get("/category", categoriasController_1["default"].getCategorias);
//obtener el detalle de una categoria
categoriasRoute.get("/category/:id", categoriasController_1["default"].getUnaCategoria);
//añadir una nueva categoria
categoriasRoute.post("/category/upload", categoriasController_1["default"].addCategoria);
//editar una categoria
categoriasRoute.put("/category/edit/:id", categoriasController_1["default"].editCategoria);
categoriasRoute.patch("/category/edit/:id", categoriasController_1["default"].editCategoria);
//eliminar una categoria
categoriasRoute["delete"]("/category/:id", categoriasController_1["default"].deleteCategoria);
exports["default"] = categoriasRoute;
