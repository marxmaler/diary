import express from "express";
import { getLatests } from "../controllers/diaryController";

const globalRouter = express.Router();

globalRouter.route("/").get(getLatests);

export default globalRouter;
