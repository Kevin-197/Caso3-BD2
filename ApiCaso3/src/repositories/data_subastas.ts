import { Request, Response } from 'express';
import Articulo from "../models/subastas";

export const addArticulo_r = async (req: Request, res: Response): Promise<Response> => {
    req.query.PublishDate = new Date().toISOString();
    const articulo = await Articulo.findOne({ EmailDueño: req.query.EmailDueño?.toString(), NombreArticulo: req.query.NombreArticulo?.toString()});
    if (articulo) {
        return res.status(400).json({ msg: "El articulo ya existe" });
    }

    const newArticulo = new Articulo(req.query);
    await newArticulo.save();
    return res.status(201).json(newArticulo);
}

export const removeArticulo_r = async (req: Request, res: Response): Promise<Response> => {
    if (!req.query.NombreArticulo || !req.query.EmailDueño) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    const articulo = await Articulo.findOneAndUpdate({ EmailDueño: req.query.EmailDueño?.toString(), NombreArticulo: req.query.NombreArticulo?.toString(), Active: 1},{Active: 0},{new: true});
    if (articulo) {
        return res.status(201).json(articulo);

        
    }
    else{
        return res.status(400).json({ msg: "El articulo no existe" });
    }
    
}

export const addOffer_r = async (req: Request, res: Response): Promise<Response> => {
    if (!req.query.NombreArticulo || !req.query.EmailDueño || !req.query.Offer || !req.query.Nombreo || !req.query.Emailo) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    const articulo = await Articulo.findOneAndUpdate({EmailDueño: req.query.EmailDueño?.toString(), NombreArticulo: req.query.NombreArticulo?.toString(), Active: 1, 
        PrecioMaximo: {$lt:req.query.Offer}},{PrecioMaximo: req.query.Offer, $push: { Ofertas: { Monto: req.query.Offer, Nombre: req.query.Nombreo, Email: req.query.Emailo} }},{new: true});
    if (articulo) {
        return res.status(201).json(articulo);        
    }
    else{
        return res.status(400).json({ msg: "No se pudo dar la oferta" });
    }
    
}

export const findArtilo_r = async (req: Request, res: Response): Promise<Response> => {
    const list = await Articulo.find({Active: 1, ...req.query.Date ? { ExpDate: req.query.Date} : {}, ...req.query.Año ? {Año: req.query.Año} : {}, 
        ...req.query.PrecioMax ? {...req.query.PrecioMin ? { PrecioMaximo: {$gte: req.query.PrecioMin, $lte: req.query.PrecioMax}} : {}} : {}});
    return res.status(201).json(list);
    
}

export const showAll_r = async (req: Request, res: Response): Promise<Response> => {
    const list = await Articulo.find({Active: 1});
    return res.status(201).json(list);
    
}