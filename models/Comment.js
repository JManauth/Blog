const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,  
            primaryKey: true,
                 
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false, 
            primaryKey: true,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        article_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'article',
                key: 'id'
            },
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;