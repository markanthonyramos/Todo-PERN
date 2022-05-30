create database todo_pern;

create table todos(
	todo_id serial primary key,
	description varchar(255),
	is_done boolean null
);