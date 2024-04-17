import express from "express";
import {
  mostrarBici,
  home,
  addBicycle,
  editBicycle,
  deleteBicycle,
} from "../controller/controller.js";
const router = express.Router();

router.get("/", home);

router.get("/bicicletas", mostrarBici);

router.post("/bicicleta", addBicycle);

router.put("/bicicleta/:id", editBicycle);

router.delete("/bicicleta/:id", deleteBicycle);

export default router;
