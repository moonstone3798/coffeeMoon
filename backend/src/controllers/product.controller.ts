import type {Request, Response} from "express";
import { getAllProducts } from "../services/product.service.js";

export const getProducts = async(req: Request, res: Response )=>{
     try {
         const page = Number(req.query.page) || 1;
         const limit = Number(req.query.limit) || 10;

         const products = await getAllProducts(page, limit);
         res.json({data: products, pagination: {page, limit}});
     } catch(error) {
         res.status(500).json({error: "Error al obtener los productos"});
     }
}