CREATE DATABASE IF NOT EXISTS company;

USE company;

create table employees(
	id int(11) not null auto_increment,
    name varchar(45) default null,
    salary int (11) default null,
    primary key (id)
);
Describe employees;