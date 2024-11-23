import express, { Router } from "express"
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/ticket.controller.js";


const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;