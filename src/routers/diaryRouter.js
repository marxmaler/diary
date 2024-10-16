import express from "express";
import {
  getEditDiary,
  getWriteDiary,
  postEditDiary,
  postWriteDiary,
} from "../controllers/diaryController";

const diaryRouter = express.Router();

diaryRouter.route("/write").get(getWriteDiary).post(postWriteDiary);
// diaryRouter.route("/read/:id").get(getReadDiary);
diaryRouter.route("/edit/:id").get(getEditDiary).post(postEditDiary);
// diaryRouter.route("/delete/:id").get(getDeleteDiary).post(postDeleteDiary);

export default diaryRouter;
