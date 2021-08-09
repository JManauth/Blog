const Article = require('./Article');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Article, {
    foreignKey: 'author_id',
});

User.hasMany(Comment, {
    foreignKey: 'author_id',
});

Article.hasMany(Comment, {
    foreignKey: 'article_id',
});

Article.belongsTo(User, {
    foreignKey: 'author_id',
});

Comment.belongsTo(Article, {
    foreignKey: 'article_id',
});

Comment.hasOne(User, {
    foreignKey: 'author_id',
});

module.exports = {
    Article,
    Comment,
    User,
};