import Diary from "../models/Diary";

export const getLatests = async (req, res) => {
  const diaries = await Diary.find({}); //나중에 일기 너무 많아지면 한번에 가져오는 document 갯수 제한할 필요 있음, 최근 데이터부터 가져오게 하는 기능 추가 필요
  return res.render("latests", { title: "The Latest Posts", diaries });
};

export const getWriteDiary = (req, res) => {
  return res.render("write", { title: "Write a new diary" });
};

export const postWriteDiary = async (req, res) => {
  const { title, content } = req.body;

  const newEntry = await Diary.create({ title, content });
  console.log(newEntry);

  return res.redirect("/");
};

export const getEditDiary = async (req, res) => {
  const { id } = req.params;
  const diary = await Diary.findById(id);

  console.log(diary);
  return res.render("edit", { title: "Edit your diary", diary });
};

export const postEditDiary = (req, res) => {
  return res.redirect("/");
};
