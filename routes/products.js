import express from "express";
import { getAllProducts } from "../services/products.service.js";
import auth from "../middlwares/auth.js";

const router = express.Router();

router.post("/", auth ,async (req, res) => {
    try{
        const products = await getAllProducts();
        res.status(200).send(products);
    }catch(err){
        res.status(err.status || 500).send(err.message || 'Internal Server Error');
    }
});

export default router;