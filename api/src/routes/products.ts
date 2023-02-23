
import { Router } from "express";
import { getProducts } from "../controllers/products";

const productRouter = Router();

// // GET => endpoint: http://localhost:8000/products/

productRouter.get("/", getProducts);

export default productRouter;


