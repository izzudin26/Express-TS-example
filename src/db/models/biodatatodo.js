'use strict';
module.exports = (sequelize, DataTypes) => {
  const BiodataTodo = sequelize.define('BiodataTodo', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  BiodataTodo.associate = function(models) {
    // associations can be defined here
  };
  return BiodataTodo;
};