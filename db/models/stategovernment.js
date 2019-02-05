'use strict';
module.exports = (sequelize, DataTypes) => {
  const StateGovernment = sequelize.define('StateGovernment', {
    name: DataTypes.INTEGER
  }, {});
  StateGovernment.associate = function(models) {
    // associations can be defined here
    models.StateGovernment.hasMany(models.LocalGovernment, { as: 'stateID'})
  };
  return StateGovernment;
};
