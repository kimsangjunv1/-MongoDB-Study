const express = require("express");
const router = express.Router();
const User = require("../models/User");

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

module.exports = router;