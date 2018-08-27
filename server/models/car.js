'use strict';
module.exports = (sequelize, DataTypes) => {
  const car = sequelize.define('car', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    year: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  car.associate = function(models) {
   car.belongsTo(models.agency, {
     foreingKey: "agencyId",
     onDelete: "CASCADE"
   })
  };
  return car;
};