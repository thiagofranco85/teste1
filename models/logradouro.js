/* jshint indent: 2 */


var Sequelize = require('sequelize');
var sequelize = require('../config/sequelize');

var bairro =  require('../models/bairro');


logradouro = function(sequelize, DataTypes) {
  return sequelize.define('logradouro', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ''
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    cep: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    bairro_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'bairro',
        key: 'id'
      }
    },
    lojista_id: {
      type: DataTypes.INTEGER(13),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'logradouro',
    timestamps: false, 
  },
 
);
};
 
var logradouro = logradouro(sequelize, Sequelize.DataTypes);
logradouro.belongsTo(bairro, { foreignKey: 'bairro_id'});
module.exports = logradouro;