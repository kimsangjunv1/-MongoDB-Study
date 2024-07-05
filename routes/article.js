const express = require('express');
const router = express.Router();
const Article = require('../models/Article'); // 모델 스키마

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
        // populate: 'author' 필드를 참조하여 관련된 사용자 정보를 함께 가져옵니다.
        // 즉, article 문서에서 'author' 필드에 저장된 ObjectId를 통해 해당 사용자 문서를 가져와서 article 문서에 추가합니다.
        const articles = await Article.find().populate("author");
        res.json(articles);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// 게시물 삭제 라우트
router.delete('/:id', async (req, res) => {
    try {
        // findByIdAndDelete: 주어진 id를 가진 문서를 찾아 삭제합니다.
        // req.params.id: URL 경로에서 'id' 매개변수를 가져옵니다.
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
        // findByIdAndUpdate: 주어진 id를 가진 문서를 찾아 업데이트합니다.
        // { new: true }: 업데이트된 문서를 반환합니다.
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