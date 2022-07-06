import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import { globalRouter } from "./routers/global.js";

const app = express();
const PORT = 4000;
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static("src/style"));
app.use(express.static("src/img"));

app.use("/", globalRouter);
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT} 🚀`));
