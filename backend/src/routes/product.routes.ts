import  {Router} from "express";
import { getProducts } from "../controllers/product.controller.js";
const router = Router();
console.log("product router cargado");
router.get('/', getProducts);
export default router;