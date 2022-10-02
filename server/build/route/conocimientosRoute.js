"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var conocimientosController_1 = __importDefault(require("../controller/conocimientosController"));
var conocimientosRoute = (0, express_1.Router)();
//obtener todos los conocimientos
conocimientosRoute.get("/knowledge", conocimientosController_1["default"].getConocimientos);
//obtener el detalle de un conocimiento en concreto
conocimientosRoute.get("/knowledge/:id", conocimientosController_1["default"].getUnConocimiento);
//añadir un conocimiento
conocimientosRoute.post("/knowledge/upload", conocimientosController_1["default"].addConocimiento);
//editar un conocimiento
conocimientosRoute.put("/knowledge/edit/:id", conocimientosController_1["default"].editConocimiento);
conocimientosRoute.patch("/knowledge/edit/:id", conocimientosController_1["default"].editConocimiento);
//eliminar un conocimiento
conocimientosRoute["delete"]("/knowledge/:id", conocimientosController_1["default"].deleteConocimiento);
exports["default"] = conocimientosRoute;
