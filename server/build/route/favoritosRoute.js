"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var favoritosController_1 = __importDefault(require("../controller/favoritosController"));
var favRoute = (0, express_1.Router)();
//obtener todos los favoritos
favRoute.get("/user/myfavorites", favoritosController_1["default"].getMyFavoritos);
//obtener el detalle de un favorito en concreto
favRoute.get("/user/myfavorites/:id", favoritosController_1["default"].getUnFavorito);
//añadir un favorito
favRoute.post("/user/myfavorites/", favoritosController_1["default"].addFavorito);
//eliminar un favorito
favRoute["delete"]("/user/myfavorites/:id", favoritosController_1["default"].deleteFavorito);
exports["default"] = favRoute;
