const Squelize = require('sequelize');
const sequelize = new Squelize('sistemaDeCadastro','root','',{
    host:"localhost",
    dialect:'mysql'
});

sequelize.authenticate().then(function(){
    console.log("conectado");
}).catch(function(erro){
    console.log("Falha ao conectar" + erro);
});
//Authenticate - essa função verifica se o bd conectou;


 