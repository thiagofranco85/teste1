/* jshint indent: 2 */


var Sequelize = require('sequelize');
var sequelize = require('../config/sequelize');

var estado = require('../models/estado');

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


var cidade = cidade(sequelize, Sequelize.DataTypes);

cidade.belongsTo(estado, {foreignKey: 'estado_id'});
module.exports = cidade;

