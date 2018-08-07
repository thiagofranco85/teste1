var express = require('express');
var router = express.Router(); 

var estado  = require('../models/estado');
var logradouro = require('../models/logradouro');
var bairro = require('../models/bairro');
var cidade = require('../models/cidade');

var sequelize = require('../config/sequelize'); 
/* GET home page. */
router.get('/cep/:cep', function(req, res, next) {
  var cep = req.params.cep 

  if( cep.indexOf("-") == -1){
    cep = cep.substring(0,5) + "-" +  cep.substring(5,8)
  }
   
 
  logradouro.findOne({  
    where: {cep: cep},
    include: [
      {
        model: bairro, 
        include: [{
          model: cidade, 
          include: [{
            model: estado
          }]
        }]
      }
  ],
  })
    .then(logradouro => { 
 

      if( logradouro != null ){
        var resposta  = {
          "logradouro": logradouro.tipo + " " + logradouro.nome,
          "bairro" : logradouro.bairro.nome,
          "cidade" : logradouro.bairro.cidade.nome,
          "estado": logradouro.bairro.cidade.estado.nome,
          "uf": logradouro.bairro.cidade.estado.sigla
        }
  
        res.end(JSON.stringify(resposta));
      }else{
        res.end('CEP inválido!');
      }
      
      //console.log( logradouro.bairro.cidade.estado.sigla );
  });


   

 // res.render('index', { title: 'Express' });
});

module.exports = router;
