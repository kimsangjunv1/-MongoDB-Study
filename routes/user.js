const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 모델 구조에 맞는 route 별 액션 : 회원

// 사용자 생성 라우트
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });

        await newUser.save();

        res.status(201).send("User created successfully");
    } catch (error) {
        res.status(400).send("Error creating User");
    }
})

// 사용자 목록 조회 라우트
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;