/* jshint indent: 2 */


var Sequelize = require('sequelize');
var sequelize = require('../config/sequelize');

var cidade =  require('../models/cidade');

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

var bairro =  bairro(sequelize, Sequelize.DataTypes);
bairro.belongsTo(cidade, {foreignKey: 'cidade_id'});
module.exports = bairro;
