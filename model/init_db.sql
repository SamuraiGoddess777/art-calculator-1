DROP TABLE IF EXISTS characters; 
 
 
CREATE TABLE `characters` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` INT NOT NULL,
  `photo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- INSERT INTO characters (id,char,vtube)



-- CREATE TABLE `results` (
-- 	`id` INT NOT NULL AUTO_INCREMENT,
-- 	`total` FLOAT NOT NULL,
-- 	`image` varchar(255),
-- 	`description` varchar(255) NOT NULL,
-- 	PRIMARY KEY (`id`)
-- );






