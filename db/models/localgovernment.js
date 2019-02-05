'use strict';
module.exports = (sequelize, DataTypes) => {
  const LocalGovernment = sequelize.define('LocalGovernment', {
    name: DataTypes.STRING,
    stateGovernmentID: DataTypes.INTEGER
  }, {});
  LocalGovernment.associate = function(models) {
    models.LocalGovernment.belongsTo(models.StateGovernment, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'stateGovernmentID',
        allowNull: false
      }
    })

    models.LocalGovernment.hasMany(models.Business, { foreignKey: 'localGovernmentID' })
  };
  return LocalGovernment;
};
