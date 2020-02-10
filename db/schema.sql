DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL
);

USE burgers_db;
DROP TABLE burgers;

USE burgers_db;
SELECT * FROM burgers;