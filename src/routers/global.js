import express from "express";
import {
  checkFormData,
  renderLoginPage,
  renderUserMainPage,
  renderErrorLoginPage,
} from "../controllers/user.js";
import { mainPage } from "../controllers/page.js";

export const globalRouter = express.Router();
globalRouter.get("/", mainPage);
globalRouter.get("/:id(\\d+)", renderUserMainPage);
globalRouter.route("/login").post(checkFormData).get(renderLoginPage);
globalRouter.get("/login-error", renderErrorLoginPage);
