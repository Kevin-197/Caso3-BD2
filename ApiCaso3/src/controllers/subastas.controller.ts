import { Request, Response } from 'express';
import Articulo from "../models/subastas";

export const addArticulo = async (req: Request, res: Response): Promise<Response> => {
    if (!req.query.NombreDueño || !req.query.EmailDueño || !req.query.ExpDate) {
        return res.status(400).json({ msg: "Please. Send your email and password" });
    }
    const articulo = await Articulo.findOne({ EmailDueño: req.query.EmailDueño?.toString(), NombreArticulo: req.query.NombreArticulo?.toString()});
    if (articulo) {
        return res.status(400).json({ msg: "El articulo ya existe" });
    }

    const newArticulo = new Articulo(req.query);
    await newArticulo.save();
    return res.status(201).json(newArticulo);
}

export const showAll = async (req: Request, res: Response): Promise<Response> => {
    const list = await Articulo.find({Active: 1});
    return res.status(201).json(list);
    
}

