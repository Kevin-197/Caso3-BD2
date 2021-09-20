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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAll_r = exports.addOffer_r = exports.removeArticulo_r = exports.addArticulo_r = void 0;
const subastas_1 = __importDefault(require("../models/subastas"));
const addArticulo_r = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const articulo = yield subastas_1.default.findOne({ EmailDueño: (_a = req.query.EmailDueño) === null || _a === void 0 ? void 0 : _a.toString(), NombreArticulo: (_b = req.query.NombreArticulo) === null || _b === void 0 ? void 0 : _b.toString() });
    if (articulo) {
        return res.status(400).json({ msg: "El articulo ya existe" });
    }
    const newArticulo = new subastas_1.default(req.query);
    yield newArticulo.save();
    return res.status(201).json(newArticulo);
});
exports.addArticulo_r = addArticulo_r;
const removeArticulo_r = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    if (!req.query.NombreArticulo || !req.query.EmailDueño) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    const articulo = yield subastas_1.default.findOneAndUpdate({ EmailDueño: (_c = req.query.EmailDueño) === null || _c === void 0 ? void 0 : _c.toString(), NombreArticulo: (_d = req.query.NombreArticulo) === null || _d === void 0 ? void 0 : _d.toString(), Active: 1 }, { Active: 0 }, { new: true });
    if (articulo) {
        return res.status(201).json(articulo);
    }
    else {
        return res.status(400).json({ msg: "El articulo no existe" });
    }
});
exports.removeArticulo_r = removeArticulo_r;
const addOffer_r = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    if (!req.query.NombreArticulo || !req.query.EmailDueño || !req.query.Offer || !req.query.Nombreo || !req.query.Emailo) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    const articulo = yield subastas_1.default.findOneAndUpdate({ EmailDueño: (_e = req.query.EmailDueño) === null || _e === void 0 ? void 0 : _e.toString(), NombreArticulo: (_f = req.query.NombreArticulo) === null || _f === void 0 ? void 0 : _f.toString(), Active: 1,
        PrecioMaximo: { $lt: req.query.Offer } }, { PrecioMaximo: req.query.Offer, $push: { Ofertas: { Monto: req.query.Offer, Nombre: req.query.Nombreo, Email: req.query.Emailo } } }, { new: true });
    if (articulo) {
        return res.status(201).json(articulo);
    }
    else {
        return res.status(400).json({ msg: "No se pudo dar la oferta" });
    }
});
exports.addOffer_r = addOffer_r;
const showAll_r = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield subastas_1.default.find({ Active: 1 });
    return res.status(201).json(list);
});
exports.showAll_r = showAll_r;
