/* jshint indent: 2 */


var Sequelize = require('sequelize');
var sequelize = require('../config/sequelize');


cidade = function(sequelize, DataTypes) {
  return sequelize.define('cidade', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    estado_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'estado',
        key: 'id'
      }
    }
  }, {
    tableName: 'cidade',
    timestamps: false
  });
};


module.exports = cidade(sequelize, Sequelize.DataTypes)

