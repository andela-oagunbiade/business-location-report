'use strict';
module.exports = (sequelize, DataTypes) => {
  const LocalGovernment = sequelize.define('LocalGovernment', {
    name: DataTypes.STRING,
    stateID: DataTypes.INTEGER
  }, {});
  LocalGovernment.associate = function(models) {
    // associations can be defined here
    models.LocalGovernment.belongsTo(models.State, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'stateID',
        allowNull: false
      }
    })

    models.LocalGovernment.hasMany(models.Business, { as: 'localGovernmentID' })
  };
  return LocalGovernment;
};
