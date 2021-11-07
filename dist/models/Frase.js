"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frase = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../instances/pg");
exports.Frase = pg_1.sequelize.define('Frase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    autor: {
        type: sequelize_1.DataTypes.STRING
    },
    txt: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'poemas',
    timestamps: false
});
