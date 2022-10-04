"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var database_service_1 = require("../services/database.service");
var Trueques = /** @class */ (function () {
    function Trueques(client) {
        this.client = client;
    }
    // obtener todos los trueques de la base de datos
    Trueques.prototype.getTrueques = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryStr, resultado, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryStr = "SELECT * FROM trueques";
                        return [4 /*yield*/, this.client.query(queryStr, [])];
                    case 1:
                        resultado = _a.sent();
                        return [2 /*return*/, resultado.rows];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // cuando usuario A inicia sesión se le muestra el total de peticiones de trueques pendientes a aceptar o rechazar
    Trueques.prototype.getPendingTrueques = function (trueque) {
        return __awaiter(this, void 0, void 0, function () {
            var queryStr, resultado, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryStr = 'SELECT * from "trueques" WHERE conocimiento1_usuario_id IN (SELECT id_conocimientos_usuario from "conocimientos_usuario" where usuario_id = 1)';
                        return [4 /*yield*/, this.client.query(queryStr)];
                    case 1:
                        resultado = _a.sent();
                        return [2 /*return*/, resultado.rows[0]];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // //crear el trueque
    Trueques.prototype.createTrueque = function (trueque) {
        return __awaiter(this, void 0, void 0, function () {
            var queryStr, values, resultado, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryStr = "INSERT INTO trueques(conocimiento1_usuario_id, conocimiento2_usuario_id, estado) VALUES ($1, $2, $3) returning *";
                        values = [
                            trueque.conocimiento1_usuario_id,
                            trueque.conocimiento2_usuario_id,
                            "pendiente",
                        ];
                        return [4 /*yield*/, this.client.query(queryStr, values)];
                    case 1:
                        resultado = _a.sent();
                        return [2 /*return*/, resultado.rows[0]];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // //cambiar estado de pendiente a aceptado o rechazado
    Trueques.prototype.updateTrueque = function (trueque) {
        return __awaiter(this, void 0, void 0, function () {
            var queryStr, values, resultado, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryStr = 'UPDATE trueques SET estado = $1 WHERE id_trueque = $2 returning *';
                        values = [
                            trueque.id_trueque,
                            trueque.estado
                        ];
                        return [4 /*yield*/, this.client.query(queryStr, values)];
                    case 1:
                        resultado = _a.sent();
                        return [2 /*return*/, resultado.rows[0]];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Trueques;
}());
exports["default"] = new Trueques((0, database_service_1.connection)());
