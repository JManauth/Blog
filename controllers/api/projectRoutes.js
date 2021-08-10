const router = require('express').Router();
const { User, Article, Comment } = require('../../models');

//api/projects enpoint

router.get('/', async (req, res) => {
    try{
        const articleData = await Article.findAll({
            include: [{model: User, attributes:['user_name']}]
        });
        res.status(200).json(articleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE THINGS FOR ARTICLE
router.put('/title/:id', async (req, res) => {
    try{
        const updateTitle = await Article.update({title: req.body.new_title}, {
            where: {
                id: req.params.id,
            } 
        });
        res.status(200).json(updateTitle);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/body/:id', async (req, res) => {
    try{
        const updateBody = await Article.update({body: req.body.new_body}, {
            where: {
                id: req.params.id,
            } 
        });
        res.status(200).json(updateBody);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try{
        const newArticle = await Article.create(req.body);
        res.status(200).json(newArticle);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const articleData = await Article.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!articleData) {
            res.status(404).json({ message: 'No Article found with this id!' });
            return;
        }
        res.status(200).json(articleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;