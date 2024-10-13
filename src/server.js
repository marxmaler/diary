import "./db.js";
import "./models/Diary.js";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import diaryRouter from "./routers/diaryRouter.js";

const app = express();
const PORT = 1301;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
