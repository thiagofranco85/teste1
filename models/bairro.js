/* jshint indent: 2 */

var Sequelize = require('sequelize');
var sequelize = require('../config/sequelize');

bairro = function(sequelize, DataTypes) {
  return sequelize.define('bairro', {
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
    cidade_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'id'
      }
    },
    lojista_id: {
      type: DataTypes.INTEGER(13),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'bairro',
    timestamps: false
  });
};

module.exports = bairro(sequelize, Sequelize.DataTypes)
