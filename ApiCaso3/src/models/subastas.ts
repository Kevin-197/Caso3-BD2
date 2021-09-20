import { model, Schema, Document } from 'mongoose';


const Subastas = new Schema(
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

  export default model("Subasta", Subastas);