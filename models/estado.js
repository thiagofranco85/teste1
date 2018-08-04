/* jshint indent: 2 */

var Sequelize = require('sequelize');
var sequelize = require('../config/sequelize');

var estado = function(sequelize, DataTypes) {
  return sequelize.define('estado', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sigla: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'estado',
    timestamps: false
  });
};


module.exports = estado(sequelize, Sequelize.DataTypes)
