const express = require("express");
const router = express.Router();

// 1. 각 라우트를 불러옵니다.
const userRoutes = require("./user");
const articleRoutes = require("./article");
const songRoutes = require("./song");

// 2. 각 라우트를 중앙 라우터에 연결합니다.
router.use("/users", userRoutes);
router.use("/articles", articleRoutes);
router.use("/songs", songRoutes);

module.exports = router;