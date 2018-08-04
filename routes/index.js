var express = require('express');
var router = express.Router(); 

var estado  = require('../models/estado');
var logradouro = require('../models/logradouro');
var bairro = require('../models/bairro');
 
/* GET home page. */
router.get('/cep', function(req, res, next) {
 
  logradouro.belongsTo(bairro, { foreignKey: 'bairro_id'});
  logradouro.findOne({ 
    where: {cep: '20715-270'},
    include: [
      bairro
  ],
  })
    .then(logradouro => {
    console.log( logradouro.bairro.nome );
  })

  res.render('index', { title: 'Express' });
});

module.exports = router;
