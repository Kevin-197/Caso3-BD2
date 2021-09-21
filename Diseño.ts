const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Caso3');


const Subastas = mongoose.model('Subastas', 
{ 
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
