//코드가 변경될때마다 재빌드하는 번거러움을 없애기 위해 npm js.com -> ts node dev
import express from "express";

// create a server
const app = express();

app.get("/",(request,response) => {
    response.send("<h1>Hello World!!!나는 김주현이다.<h1>");
});


// listen to some port
app.listen(8000,() => {
    console.log("listening");
});