import express from "express";
import {
  renderTermsPage,
  renderMobilePage,
  renderUserInfoPage,
} from "../controllers/user.js";
export const signupRouter = express.Router();

signupRouter.get("/terms", renderTermsPage);
signupRouter.get("/mobile", renderMobilePage);
signupRouter.get("/userInfo", renderUserInfoPage);
