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
Object.defineProperty(exports, "__esModule", { value: true });
exports.radomFrase = exports.deleteFrase = exports.updateFrase = exports.getFrase = exports.allFrases = exports.createFrase = exports.ping = void 0;
const sequelize_1 = require("sequelize");
const Frase_1 = require("../models/Frase");
const ping = (req, res) => {
    res.json({ pong: true });
};
exports.ping = ping;
const createFrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { autor, txt } = req.body;
    let newFrase = yield Frase_1.Frase.create({
        autor,
        txt
    });
    res.status(201).json({ id: newFrase.id, autor, txt });
});
exports.createFrase = createFrase;
const allFrases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let allFrases = yield Frase_1.Frase.findAll();
    res.json({ allFrases });
});
exports.allFrases = allFrases;
const getFrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let frase = yield Frase_1.Frase.findByPk(id);
    if (frase) {
        res.json({ frase }).status(200);
    }
    else {
        res.json({ error: 'Frase não encontrada' });
    }
});
exports.getFrase = getFrase;
const updateFrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let { autor, txt } = req.body;
    let frase = yield Frase_1.Frase.findByPk(id);
    if (frase) {
        frase.autor = autor;
        frase.txt = txt;
        yield frase.save();
        res.json({ frase });
    }
    else {
        res.json({ error: 'Frase não encontrada' });
    }
    res.json({});
});
exports.updateFrase = updateFrase;
const deleteFrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    yield Frase_1.Frase.destroy({ where: { id } });
    res.json({});
});
exports.deleteFrase = deleteFrase;
const radomFrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let frase = yield Frase_1.Frase.findOne({
        order: [
            sequelize_1.Sequelize.fn('RANDOM')
        ]
    });
    if (frase) {
        res.json({ frase });
    }
    else {
        res.json({ error: 'Não a frases cadastradas' });
    }
});
exports.radomFrase = radomFrase;
