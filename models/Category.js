const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, //type of data
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, //autocount up for ID
    },

    category_name: {
      type: DataTypes.STRING, //type of data
      allowNull: false,
    },
  },

  {
    sequelize, //connect to sequelize database category
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
