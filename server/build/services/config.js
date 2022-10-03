"use strict";
exports.__esModule = true;
exports.secret = exports.config = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var config = function () {
    var uri = process.env.HEROKU_POSTGRESQL_YELLOW_URL;
    return uri;
};
exports.config = config;
exports.secret = process.env.SECRET || "";
