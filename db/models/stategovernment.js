'use strict';
module.exports = (sequelize, DataTypes) => {
  const StateGovernment = sequelize.define('StateGovernment', {
    name: DataTypes.INTEGER,
    federalGovernmentID: DataTypes.INTEGER
  }, {});
  StateGovernment.associate = function(models) {
    models.StateGovernment.belongsTo(models.FederalGovernment, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'federalGovernmentID',
        allowNull: false
      }
    })

    models.StateGovernment.hasMany(models.LocalGovernment, { foreignKey: 'stateGovernmentID' })
  };
  return StateGovernment;
};
