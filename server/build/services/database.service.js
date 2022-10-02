"use strict";
exports.__esModule = true;
exports.connection = void 0;
var pg_1 = require("pg");
var config_1 = require("./config");
var url = (0, config_1.config)();
var connection = function () {
    try {
        var client = new pg_1.Pool({
            connectionString: url,
            ssl: { rejectUnauthorized: false }
        });
        console.log("Connected successfully to database server");
        if (client != undefined) {
            return client;
        }
        else {
            throw Error;
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.connection = connection;
