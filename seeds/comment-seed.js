const {Comment} = require('../models');

const CommentData = [
    {
        body: 'sup foo this is a test comment',
        author_id: 2,
        article_id: 1, 
    }
]

const seedCommentData = () => Comment.bulkCreate(CommentData);

module.exports = seedCommentData;