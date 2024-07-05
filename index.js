// 1번: 필요한 모듈을 가져옵니다.
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const fetchAndStoreSongs = require("./routes/song")

// 2번: Express 애플리케이션을 생성하고, 포트 번호를 설정합니다.
const app = express();
const port = process.env.PORT || 3000;

// 3번: .env 파일에서 MongoDB URI를 불러옵니다.
const MONGO_URI = process.env.MONGO_URI;

// 4번: Mongoose를 사용하여 MongoDB에 연결합니다.
mongoose.connect(MONGO_URI, {})
    .then(async() => {
        console.log("몽고DB를 성공적으로 연결했어요");
        // 애플리케이션의 나머지 로직을 이곳에 추가합니다.

        await fetchAndStoreSongs()
    })
    .catch(err => {
        console.error("몽고DB를 연결하는 중 오류가 발생했어요:", err);
    });

// 5번: JSON 요청 바디를 파싱하기 위한 미들웨어를 추가합니다.
app.use(express.json()); // JSON 요청 바디를 파싱하기 위한 미들웨어

// 6번: 루트 경로에 대한 간단한 핸들러를 추가합니다.
app.get("/", (req, res) => {
    res.send("잘 작동하고 있어요");
});

// 7번: 중앙 라우터를 사용합니다.
app.use("/api", require("./routes"));

// 8번: 서버를 지정된 포트에서 시작합니다.
app.listen(port, () => {
    console.log(`서버가 정상적으로 작동중이에요, 포트 : ${port}`);
});