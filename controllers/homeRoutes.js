const router = require('express').Router();
const { Article, Comment, User } = require('../models');

router.get('/', async (req, res) => {
    try{
        const dbArticleData = await Article.findAll({
            attributes: {exclude: ['id', 'author_id']},
            include: [{model: User, attributes:['user_name']}]
        });

        const articles = dbArticleData.map((article) => 
        article.get({plain:true })
        );
        res.render('homepage', {
            articles,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/newArticle', async (req, res) => {
    res.render('newArticle');
});


module.exports = router;
