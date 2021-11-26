const { request } = require('express');

const { Sequelize, DataTypes } = require('sequelize');

const inicialiarUsuario = require("./Usuario");

const inicialiarNota = require("./Nota");

const inicialiarChecklist = require("./Checklist");

let bd = {};

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

const Usuario = inicialiarUsuario(sequelize,DataTypes);

const Nota = inicialiarNota(sequelize, DataTypes);

const Checklist = inicialiarChecklist(sequelize, DataTypes);

Nota.hasMany(Checklist, { as: 'checklist', foreignKey: 'notaId'});
Nota.belongsTo(Usuario, { as: "usuario", foreignKey: "usuarioId"});

bd = {Usuario, Nota, Checklist};

bd.Sequelize = Sequelize;
bd.sequelize = sequelize;

module.exports = bd;