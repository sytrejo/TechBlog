const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//Creates the User model
class User extends Model{
    //sets up the method to run on session/instance data per user to check password
    checkPassword(loginPW){
        return bcrypt.compareSynce(loginPW, this.password);
    }
}

//creates and defines columns and configuration of the user model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNule: false,
            validate: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [4]
                }
            }
        },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
          // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
            }          
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
