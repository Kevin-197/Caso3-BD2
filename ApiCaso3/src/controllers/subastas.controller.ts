import { Request, Response } from 'express';
import {addArticulo_r, showAll_r, removeArticulo_r, addOffer_r, findArtilo_r, showAllJSON_r, findArtiloJSON_r} from "../repositories/data_subastas";

export const addArticulo = async (req: Request, res: Response): Promise<Response> => {
    if (!req.query.NombreDueño || !req.query.EmailDueño || !req.query.ExpDate) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    else{
        return addArticulo_r(req,res)
    }
}


export const removeArticulo = async (req: Request, res: Response): Promise<Response> => {
    if (!req.query.NombreArticulo || !req.query.EmailDueño) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    else{
        return removeArticulo_r(req,res);
    }
    
}

export const findArticulo = async (req: Request, res: Response) => {    
    findArtilo_r(req,res);
}

export const findArticuloJSON = async (req: Request, res: Response): Promise<Response> => {     
    return findArtiloJSON_r(req,res);     
} 

export const addOffer = async (req: Request, res: Response): Promise<Response> => {
    if (!req.query.NombreArticulo || !req.query.EmailDueño || !req.query.Offer || !req.query.Nombreo || !req.query.Emailo) {
        return res.status(400).json({ msg: "Please. complete in the information" });
    }
    else{
        return addOffer_r(req,res);
    }
    
}

export const showAll = async (req: Request, res: Response) => {
    showAll_r(req,res);
    
}

export const showAllJSON = async (req: Request, res: Response): Promise<Response> => { 
    return showAllJSON_r(req,res); 
} 
