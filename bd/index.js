const { Sequelize } = require('sequelize');

const bd = {};

const options = {
    username : 'admin',
    password : 'notes123',
    database : 'notes',
    dialect : 'mysql',
    host : 'notes.cgssmrnlwpdu.us-east-2.rds.amazonaws.com',
};

const sequelize = new Sequelize(options);

sequelize.authenticate().then(() => {
    console.log("Conectado ao banco de dados " + options.database);
}).catch(erro =>{
    console.log('Erro ao se conectar ao banco '+ options.database);
    console.log(erro);
});

bd.Sequelize = Sequelize;

module.exports = bd;