const Sequelize = require ('sequelize');

const sequelize = new Sequelize({
    host: 'thiagofranco.com.br',
    database: 'thiag835_reformeaqui',
    username: 'thiag835_admin',
    password: 'thiag835_adminAdministrador',
    dialect: 'mysql'
  });


module.exports = sequelize;



 // sequelize-auto -h thiagofranco.com.br -d thiag835_reformeaqui -u thiag835_admin -x thiag835_adminAdministrador  -p 3306  --dialect mysql -t estado