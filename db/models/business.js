'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    numberOfFemale: DataTypes.INTEGER,
    numberOfMale: DataTypes.INTEGER,
    localGovernmentID: DataTypes.INTEGER
  }, {});
  Business.associate = function(models) {
    this.belongsTo(models.LocalGovernment, {
      onDelete: 'CASCADE',
      foreignKey: 'localGovernmentID'
    })
  };
  return Business;
};

