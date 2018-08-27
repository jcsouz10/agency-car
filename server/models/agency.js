'use strict';
module.exports = (sequelize, DataTypes) => {
  const agency = sequelize.define('agency', {
    name: DataTypes.STRING,
    place: DataTypes.STRING
  }, {});
  agency.associate = function(models) {
    agency.hasMany(models.car, {
      foreingKey: "agencyId",
      as: "cars"
    })
  };
  return agency;
};