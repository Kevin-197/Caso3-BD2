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
exports.addArticulo = void 0;
const subastas_1 = __importDefault(require("../models/subastas"));
const addArticulo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!req.query.NombreDueño || !req.query.EmailDueño || !req.query.ExpDate) {
        return res.status(400).json({ msg: "Please. Send your email and password" });
    }
    const articulo = yield subastas_1.default.findOne({ EmailDueño: (_a = req.query.EmailDueño) === null || _a === void 0 ? void 0 : _a.toString(), NombreArticulo: (_b = req.query.NombreArticulo) === null || _b === void 0 ? void 0 : _b.toString() });
    if (articulo) {
        return res.status(400).json({ msg: "El articulo ya existe" });
    }
    const newArticulo = new subastas_1.default(req.query);
    yield newArticulo.save();
    return res.status(201).json(newArticulo);
});
exports.addArticulo = addArticulo;
