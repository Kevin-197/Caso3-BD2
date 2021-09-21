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
exports.showAllJSON_r = exports.showAll_r = exports.findArtiloJSON_r = exports.findArtilo_r = exports.addOffer_r = exports.removeArticulo_r = exports.addArticulo_r = void 0;
const subastas_1 = __importDefault(require("../models/subastas"));
const addArticulo_r = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    req.query.PublishDate = new Date().toISOString();
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
const findArtilo_r = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield subastas_1.default.find(Object.assign(Object.assign(Object.assign({ Active: 1 }, req.query.Date ? { ExpDate: req.query.Date } : {}), req.query.Año ? { Año: req.query.Año } : {}), req.query.PrecioMax ? Object.assign({}, req.query.PrecioMin ? { PrecioMaximo: { $gte: req.query.PrecioMin, $lte: req.query.PrecioMax } } : {}) : {}))
        .lean().exec(function (err, subastas) {
        res.status(201).render('index', { subastas });
    });
});
exports.findArtilo_r = findArtilo_r;
const findArtiloJSON_r = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield subastas_1.default.find(Object.assign(Object.assign(Object.assign({ Active: 1 }, req.query.Date ? { ExpDate: req.query.Date } : {}), req.query.Año ? { Año: req.query.Año } : {}), req.query.PrecioMax ? Object.assign({}, req.query.PrecioMin ? { PrecioMaximo: { $gte: req.query.PrecioMin, $lte: req.query.PrecioMax } } : {}) : {}));
    return res.status(201).json(list);
});
exports.findArtiloJSON_r = findArtiloJSON_r;
const showAll_r = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lista = yield subastas_1.default.find({ Active: 1 }).lean()
        .exec(function (err, subastas) {
        res.status(201).render('index', { subastas });
    });
});
exports.showAll_r = showAll_r;
const showAllJSON_r = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield subastas_1.default.find({ Active: 1 });
    return res.status(201).json(list);
});
exports.showAllJSON_r = showAllJSON_r;
