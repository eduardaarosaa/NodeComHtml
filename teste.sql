create table usuarios(
    id int(11) auto_increment primary key,
    nome varchar(30),
    email varchar(40),
    idade int(4) 
);

insert into usuarios(nome,email,idade)values('Joao','joao@gmail.com',22);

select * from usuarios where idade = 20;

delete from usuarios where nome = 'Joao';

update usuarios set idade = 16 where nome = 'Milena';