"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var usuariosController_1 = __importDefault(require("../controller/usuariosController"));
var usuariosRoute = (0, express_1.Router)();
usuariosRoute.get("/users/", usuariosController_1["default"].getUsuarios);
usuariosRoute.get("/users/:id", usuariosController_1["default"].getUnUsuario);
usuariosRoute.post("/users/register", usuariosController_1["default"].addUsuario);
usuariosRoute.post("/users/login", usuariosController_1["default"].loginUsuario);
usuariosRoute.post("users/edit/:id", usuariosController_1["default"].editUsuario);
usuariosRoute["delete"]("/users/:id", usuariosController_1["default"].deleteUsuario);
exports["default"] = usuariosRoute;
