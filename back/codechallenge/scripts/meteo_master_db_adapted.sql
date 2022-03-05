
-- sql server configuration

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- create database schema `meteo`

create database meteo;

-- create table tbl_mast_meteo_stations and insert data

CREATE TABLE `tbl_mast_meteo_stations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `tbl_mast_meteo_stations` (`id`, `name`, `longitude`, `latitude`) VALUES
(1, 'Meteo 1', 41.646749, -0.586661),
(2, 'Meteo 2', 40.168905, -2.826892),
(3, 'Meteo 3', 41.794352, -6.34098),
(4, 'Meteo 4', 41.974296, 2.026942);

-- create table tbl_mast_meteo_variables and insert data

CREATE TABLE `tbl_mast_meteo_variables` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `unit` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `tbl_mast_meteo_variables` (`id`, `name`, `unit`) VALUES
(1, 'Temperature', 'ºC'),
(2, 'Wind', 'km/h'),
(3, 'Precipitation', 'mm'),
(4, 'Presure', 'hPa'),
(5, 'Humidity', '%');

-- add some indexes

ALTER TABLE `tbl_mast_meteo_stations`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tbl_mast_meteo_variables`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tbl_mast_meteo_stations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `tbl_mast_meteo_variables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

-- create user for database with select privileges only
-- important: this must coincide with the values at
-- src/main/resources/application.properties

CREATE USER 'meteouser' IDENTIFIED BY 'dembele';
GRANT Select ON meteo.tbl_mast_meteo_stations TO 'meteouser'
GRANT Select ON meteo.tbl_mast_meteo_variables TO 'meteouser'