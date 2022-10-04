"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var usuariosModel_1 = __importDefault(require("../model/usuariosModel"));
var usuariosController = {
    getUsuarios: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var usuarios;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, usuariosModel_1["default"].getUsuarios()];
                case 1:
                    usuarios = _a.sent();
                    res.json(usuarios);
                    return [2 /*return*/];
            }
        });
    }); },
    getUnUsuario: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var param, usuarios;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    param = req.params["id"];
                    return [4 /*yield*/, usuariosModel_1["default"].getUnUsuario(param)];
                case 1:
                    usuarios = _a.sent();
                    console.log(usuarios);
                    res.json(usuarios);
                    return [2 /*return*/];
            }
        });
    }); },
    addUsuario: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, foto, nombre, apellidos, ciudad, sobre_mi, email, password, telefono, opiniones, usuarios, resultado, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, foto = _a.foto, nombre = _a.nombre, apellidos = _a.apellidos, ciudad = _a.ciudad, sobre_mi = _a.sobre_mi, email = _a.email, password = _a.password, telefono = _a.telefono, opiniones = _a.opiniones, usuarios = __rest(_a, ["foto", "nombre", "apellidos", "ciudad", "sobre_mi", "email", "password", "telefono", "opiniones"]);
                    if (!email || !password) {
                        res
                            .status(400)
                            .json({ message: "Porfavor, rellene todos los campos obligatorios." });
                    }
                    return [4 /*yield*/, usuariosModel_1["default"].addUsuario(__assign({ foto: foto, nombre: nombre, apellidos: apellidos, ciudad: ciudad, sobre_mi: sobre_mi, email: email, password: password, telefono: telefono, opiniones: opiniones }, usuarios))];
                case 1:
                    resultado = _b.sent();
                    res.status(200).json({
                        message: "El usuario ".concat(resultado.id_usuario, " ha sido a\u00F1adido con \u00E9xito.")
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    res.status(400).json({
                        error: err_1
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    loginUsuario: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, resultado, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!email || !password) {
                        res
                            .status(400)
                            .json({ message: "Porfavor, rellena todos los campos obligatorios." });
                    }
                    return [4 /*yield*/, usuariosModel_1["default"].loginUsuario({
                            email: email,
                            password: password
                        })];
                case 1:
                    resultado = _b.sent();
                    res.status(200).json({
                        message: "El usuario ".concat(resultado.id_usuario, " ha iniciado sesi\u00F3n correctamente.")
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _b.sent();
                    res.status(400).json({
                        error: err_2
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    editUsuario: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, usuario, resultado, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    usuario = req.body;
                    return [4 /*yield*/, usuariosModel_1["default"].editUsuario(usuario, id)];
                case 1:
                    resultado = _a.sent();
                    res
                        .status(200)
                        .json({
                        message: "Tu perfil ".concat(resultado.id_usuario, " ha sido editado con \u00E9xito.")
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    return [2 /*return*/, res.status(400).json({
                            error: err_3
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    deleteUsuario: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, resultado, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, usuariosModel_1["default"].deleteUsuario(parseInt(id))];
                case 1:
                    resultado = _a.sent();
                    res.status(200).json({
                        message: "Tu perfil ".concat(resultado.id_usuario, " ha sido eliminado con \u00E9xito.")
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    res.status(400).json({
                        error: err_4
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
exports["default"] = usuariosController;
