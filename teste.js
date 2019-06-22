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

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Squelize.STRING
    },
    conteudo:{
        type: Squelize.TEXT
    }
})
//model que cria uma tabela
 
//Postagem.sync({force:true})

//sync vai sincronizar o model com o bd

Postagem.create({
    titulo: "Programação",
    conteudo: "Programando em Node.js com Squelize"
})

const Comentarios = sequelize.define('comentarios',{
    nome:{
        type: Squelize.STRING
    },
    cometario:{
        type:Squelize.TEXT
    },
    email:{
        type:Squelize.TEXT
    } 
})

//Comentarios.sync({force:true})
//Comentar se não ele fica recriando a tabela.

