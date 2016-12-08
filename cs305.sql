-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2016 at 10:20 AM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cs305`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(30, 'Nexus_aj09', 'Heys200'),
(31, 'Heys200400', 'Apk200'),
(32, 'Hey200', 'Heys200'),
(33, 'Hey200', 'Heys200'),
(34, 'Sad_a321', 'Heys200'),
(35, 'Pas2asd', 'Heys200'),
(36, 'asdas_312A', 'Wpa200'),
(37, 'Pass2233', 'Pass2233'),
(38, 'Nexus_aj10', 'Heys300'),
(39, 'Nexus_aj10', 'Heys300'),
(40, 'Nexus_aj10', 'Heys300'),
(41, 'Nexus_aj10', 'Heys300'),
(42, 'Nexus_aj10', 'Heys300'),
(43, 'Nexus_aj10', 'Heys300'),
(44, 'Nexus_aj10', 'Heys300'),
(45, 'Nexus_aj10', 'Heys300'),
(46, 'Nexus_aj10', 'Heys300'),
(47, 'Nexus_aj10', 'Heys300');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=48;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
