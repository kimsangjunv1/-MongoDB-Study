const express = require("express");
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const MONGO_URI = process.env.MONGO_URI; // .env 파일에 MongoDB URI를 저장하고 불러옵니다.

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
        // 애플리케이션의 나머지 로직을 이곳에 추가합니다.
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

app.use(express.json()) // JSON 요청 바디를 파싱하기 위한 미들웨어
app.use("/api/users", require("./routes/user")); // 사용자 라우트를 사용

app.listen(port, () => {
    console.log(`서버가 정상적으로 작동중이에요, 포트 : ${port}`)
})