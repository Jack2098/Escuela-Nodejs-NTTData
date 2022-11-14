import { Router } from "express";
import { createPdf } from "../controllers/pdf.controller";


const router = Router();

router.post('/', createPdf);

export { router };