import express from "express";
import { mostrarBici, home } from "../controller/controller.js";
const router = express.Router();





router.get("/", home)

router.get("/bicicletas", mostrarBici)

export default router