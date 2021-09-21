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
exports.showAllJSON = exports.showAll = exports.addOffer = exports.findArticuloJSON = exports.findArticulo = exports.removeArticulo = exports.addArticulo = void 0;
const data_subastas_1 = require("../repositories/data_subastas");
const addArticulo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.NombreDueño || !req.query.EmailDueño || !req.query.ExpDate) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    else {
        return (0, data_subastas_1.addArticulo_r)(req, res);
    }
});
exports.addArticulo = addArticulo;
const removeArticulo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.NombreArticulo || !req.query.EmailDueño) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    else {
        return (0, data_subastas_1.removeArticulo_r)(req, res);
    }
});
exports.removeArticulo = removeArticulo;
const findArticulo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, data_subastas_1.findArtilo_r)(req, res);
});
exports.findArticulo = findArticulo;
const findArticuloJSON = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, data_subastas_1.findArtiloJSON_r)(req, res);
});
exports.findArticuloJSON = findArticuloJSON;
const addOffer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.query.NombreArticulo || !req.query.EmailDueño || !req.query.Offer || !req.query.Nombreo || !req.query.Emailo) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    else {
        return (0, data_subastas_1.addOffer_r)(req, res);
    }
});
exports.addOffer = addOffer;
const showAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, data_subastas_1.showAll_r)(req, res);
});
exports.showAll = showAll;
const showAllJSON = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, data_subastas_1.showAllJSON_r)(req, res);
});
exports.showAllJSON = showAllJSON;
