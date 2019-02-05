'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    numberOfFemale: DataTypes.INTEGER,
    numberOfMale: DataTypes.INTEGER,
    localGovernmentId: DataTypes.INTEGER
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    models.Business.belongsTo(models.LocalGovernment, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'localGovermentID',
        allowNull: false
      }
    })
  };
  return Business;
};

