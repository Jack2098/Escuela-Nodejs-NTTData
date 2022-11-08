import { Router } from "express";
import {
  addItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/items.controller";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/:id", checkJwt, getItem);
router.get("/", checkJwt, getItems);
router.post("/", checkJwt, addItem);
router.put("/:id", checkJwt, updateItem);
router.delete("/:id", checkJwt, deleteItem);

export { router };
