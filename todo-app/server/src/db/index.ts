import mongoose from "mongoose";

mongoose.set('strictQuery',true);
mongoose
//비동기 방식으로 진행되며, 몽고스 DB 연결시 오류가 발생하면 catch함수 발생
  .connect("mongodb://127.0.0.1:27017/note-app")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });