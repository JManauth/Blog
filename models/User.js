const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,  
            primaryKey: true,
                 
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
                },
        },
    },
    {
        hooks: {
            beforeCreate: async (newTeacher) => {
            try {
                newTeacher.password = await bcrypt.hash(newTeacher.password, 10);
                return newTeacher;
            } catch (err) {
                console.log(err);
                return err;
            }
            },
            beforeUpdate: async (updatedTeacher) => {
            try {
                updatedTeacher.password = await bcrypt.hash(
                    updatedTeacher.password,
                10
                );
                return updatedTeacher;
            } catch (err) {
                console.log(err);
                return err;
            }
            },
        },
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    }
);

module.exports = User;