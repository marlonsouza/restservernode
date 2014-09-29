-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.0.22-community-nt


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema explorando_angularjs
--

CREATE DATABASE IF NOT EXISTS explorando_angularjs;
USE explorando_angularjs;

--
-- Definition of table `estoque`
--

DROP TABLE IF EXISTS `estoque`;
CREATE TABLE `estoque` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `i_item` int(10) unsigned NOT NULL,
  `quantidade` int(10) unsigned NOT NULL,
  `preco` decimal(6,2) NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `FK_estoque_item` (`i_item`),
  CONSTRAINT `FK_estoque_item` FOREIGN KEY (`i_item`) REFERENCES `itens` (`i_item`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `estoque`
--

/*!40000 ALTER TABLE `estoque` DISABLE KEYS */;
INSERT INTO `estoque` (`id`,`i_item`,`quantidade`,`preco`) VALUES
 (1,1,4,'29.90'),
 (2,2,5,'39.90'),
 (3,3,15,'139.90'),
 (4,4,18,'119.90'),
 (5,5,18,'119.90');
/*!40000 ALTER TABLE `estoque` ENABLE KEYS */;


--
-- Definition of table `itens`
--

DROP TABLE IF EXISTS `itens`;
CREATE TABLE `itens` (
  `i_item` int(10) unsigned NOT NULL auto_increment,
  `nome` varchar(90) NOT NULL,
  PRIMARY KEY  (`i_item`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itens`
--

/*!40000 ALTER TABLE `itens` DISABLE KEYS */;
INSERT INTO `itens` (`i_item`,`nome`) VALUES
 (1,'Tênis Nike'),
 (2,'Tênis Adidas'),
 (3,'Tênis Puma'),
 (4,'Tênis Penalty'),
 (5,'Tênis Fila');
/*!40000 ALTER TABLE `itens` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
