import express from "express";
import { mainPage, loginPage } from "../controllers/page.js";

export const globalRouter = express.Router();
globalRouter.get("/", mainPage);
globalRouter.get("/login", loginPage);
