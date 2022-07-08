import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import FileStore from "session-file-store";
import { globalRouter } from "./routers/global.js";
import { signupRouter } from "./routers/singup.js";

const app = express();
const PORT = process.env.PORT || 4000;
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "my key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.static("src/style"));
app.use(express.static("src/img"));

app.use("/", globalRouter);
app.use("/signup", signupRouter);
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT} 🚀`));
