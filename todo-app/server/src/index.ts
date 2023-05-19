//코드가 변경될때마다 재빌드하는 번거러움을 없애기 위해 npm js.com -> ts node dev
import express from "express";
import './db';


// create a server
const app = express();

app.use(express.json());

//아래 방법을 통해 포스트맨 raw.json을 생성하여 데이터를 가져올 수 있습니다.
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//데이터(포스트맨 body)를 불러올 수 있음
// app.use((req, res, next) => {
//     req.on("data",(chunk) => {
//         req.body = JSON.parse(chunk);
//         next();
//     });
//   });

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "I am listening!" });
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.json({ message: "I am listening! to create" });
});

// listen to some port
app.listen(8000, () => {
  console.log("listening");
});
