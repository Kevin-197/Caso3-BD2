"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Subastas = new mongoose_1.Schema({
    NombreArticulo: String,
    Descripción: String,
    Año: Number,
    FotoUrl: String,
    PrecioInicial: Number,
    PrecioMaximo: Number,
    PublishDate: Date,
    ExpDate: Date,
    NombreDueño: String,
    EmailDueño: String,
    Active: Boolean,
    Ofertas: [
        {
            Monto: Number,
            Nombre: String,
            Email: String
        }
    ]
});
exports.default = (0, mongoose_1.model)("Subasta", Subastas);
