"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var conocimientosRoute_1 = __importDefault(require("./route/conocimientosRoute"));
var usuariosRoute_1 = __importDefault(require("./route/usuariosRoute"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
// const nodemailer = require('nodemailer');
// const router = express.Router();
// app.use("/", router);
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(conocimientosRoute_1["default"]);
app.use(usuariosRoute_1["default"]);
app.get("/", function (req, res) {
    res.json("Hey there! Welcome to AYNI.");
});
exports["default"] = app;
