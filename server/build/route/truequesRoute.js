"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var truequesController_1 = __importDefault(require("../controller/truequesController"));
var truequesRoute = (0, express_1.Router)();
//obtener lista de trueques
truequesRoute.get("/trades/", truequesController_1["default"].getTrueques);
// cuando usuario A inicia sesión se le muestra el total de peticiones de trueques pendientes a aceptar o rechazar
truequesRoute.get("/trades/pending/:id_usuario", truequesController_1["default"].getPendingTrueques);
// crear el trueque
truequesRoute.put("/trades/:id_trueque", truequesController_1["default"].createTrueque);
// //cambiar estado de pendiente a aceptado o rechazado
truequesRoute.put("/trades/:id_trueque", truequesController_1["default"].updateTrueque);
exports["default"] = truequesRoute;
