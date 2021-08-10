const {Article} = require('../models');

const ArticleData = [
    {
        id: 1,
        title: 'What is web Dev?',
        body: 'Body for this article would go here this is a test seed',
        author_id: 1,
    }
]

const seedArticleData = () => Article.bulkCreate(ArticleData);

module.exports = seedArticleData;