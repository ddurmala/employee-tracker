\c postgres;

DROP DATABASE IF EXISTS employee_teacker_db;

CREATE DATABASE employee_teacker_db;

\c employee_teacker_db;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    dept_name VARCHAR(30)
)

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department INT NOT NULL,
    FOREIGN KEY(department) REFERENCES departments(id)
)

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY(role_id) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employees(id)
)