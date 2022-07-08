import express from "express";
import {
  renderTermsPage,
  renderMobilePage,
  renderUserInfoPage,
  signup,
} from "../controllers/user.js";
export const signupRouter = express.Router();
signupRouter.post("/", signup);
signupRouter.get("/terms", renderTermsPage);
signupRouter.get("/mobile", renderMobilePage);
signupRouter.get("/userInfo", renderUserInfoPage);
