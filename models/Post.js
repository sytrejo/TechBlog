const { Mode, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creates the post model
class Post extends Model { }

// defines the fields/columns of the Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id: {
            types: DataTypes.INTEGER,
            references: {
                model: 'user',
                key:'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;

