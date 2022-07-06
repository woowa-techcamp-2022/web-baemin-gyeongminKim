import express from "express";
import { login } from "../controllers/login.js";
import { mainPage, loginPage } from "../controllers/page.js";

export const globalRouter = express.Router();
globalRouter.get("/", mainPage);
globalRouter.route("/login").post(login).get(loginPage);
