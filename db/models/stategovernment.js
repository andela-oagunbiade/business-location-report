'use strict';
module.exports = (sequelize, DataTypes) => {
  const StateGovernment = sequelize.define('StateGovernment', {
    name: DataTypes.INTEGER
  }, {});
  StateGovernment.associate = function(models) {
    models.StateGovernment.hasMany(models.LocalGovernment, { foreignKey: 'stateGovernmentID' })
  };
  return StateGovernment;
};
