// 모델 구조에 맞는 route 별 액션 : 게시물

const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// 게시물 등록 라우트
router.post('/create', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newArticle = new Article({ title, content, author });
        await newArticle.save();
        res.status(201).send('Article created successfully');
    } catch (error) {
        res.status(400).send('Error creating article');
    }
});

// 게시물 목록 조회 라우트
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find().populate('author');
        res.json(articles);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// 게시물 삭제 라우트
router.delete('/:id', async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).send('Article not found');
        }
        res.status(200).send('Article deleted successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// 게시물 수정 라우트
router.put('/:id', async (req, res) => {
    try {
        const { title, content } = req.body;
        const article = await Article.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!article) {
            return res.status(404).send('Article not found');
        }
        res.status(200).send('Article updated successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;