import { Router } from "express";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";
import { registerOrderService } from "../services/upload";


const router = Router();

router.get('/', checkJwt, multerMiddleware.single('myfile'), registerOrderService);

export { router };