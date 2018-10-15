-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2018 at 03:33 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schedule-node`
--

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `ID_ROLE` int(11) NOT NULL,
  `ROLE_NAME` varchar(200) NOT NULL,
  `CREATED_DATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`ID_ROLE`, `ROLE_NAME`, `CREATED_DATE`) VALUES
(1, 'admin', '2018-10-15 02:24:04');

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

CREATE TABLE `shift` (
  `ID_SHIFT` int(11) NOT NULL,
  `ID_USER` int(11) NOT NULL,
  `SHIFT_DATE` datetime NOT NULL,
  `WORK_START` datetime NOT NULL,
  `WORK_END` datetime NOT NULL,
  `IS_PUBLISHED` tinyint(1) DEFAULT '0',
  `CREATED_DATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UPDATED_DATE` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shift`
--

INSERT INTO `shift` (`ID_SHIFT`, `ID_USER`, `SHIFT_DATE`, `WORK_START`, `WORK_END`, `IS_PUBLISHED`, `CREATED_DATE`, `UPDATED_DATE`) VALUES
(1, 2, '2018-10-15 00:00:00', '2018-10-15 01:00:00', '2018-10-15 08:00:00', 0, '2018-10-15 05:22:24', NULL),
(2, 2, '2018-10-16 00:00:00', '2018-10-16 01:00:00', '2018-10-16 08:00:00', 0, '2018-10-15 05:22:35', NULL),
(3, 2, '2018-10-14 00:00:00', '2018-10-14 01:00:00', '2018-10-14 08:00:00', 0, '2018-10-15 05:22:59', NULL),
(4, 2, '2018-10-17 00:00:00', '2018-10-17 01:00:00', '2018-10-17 08:00:00', 0, '2018-10-15 05:23:26', NULL),
(5, 2, '2018-10-18 00:00:00', '2018-10-18 01:00:00', '2018-10-18 08:00:00', 0, '2018-10-15 05:23:36', NULL),
(6, 2, '2018-10-19 00:00:00', '2018-10-19 01:00:00', '2018-10-19 08:00:00', 0, '2018-10-15 05:23:58', NULL),
(7, 2, '2018-10-20 00:00:00', '2018-10-20 01:00:00', '2018-10-20 08:00:00', 0, '2018-10-15 05:24:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID_USER` int(11) NOT NULL,
  `USERNAME` varchar(200) NOT NULL,
  `ID_ROLE` int(11) NOT NULL,
  `CREATED_DATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID_USER`, `USERNAME`, `ID_ROLE`, `CREATED_DATE`) VALUES
(2, 'Schitzo', 1, '2018-10-15 02:24:32'),
(3, 'testing', 1, '2018-10-15 02:33:44'),
(5, 'test updates', 1, '2018-10-15 02:36:27'),
(6, 'testing qwe', 1, '2018-10-15 02:36:36'),
(7, 'testing qwe zxc', 1, '2018-10-15 02:40:48'),
(9, 'test baru', 1, '2018-10-15 03:50:10'),
(10, 'test baru lagi', 1, '2018-10-15 03:50:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`ID_ROLE`);

--
-- Indexes for table `shift`
--
ALTER TABLE `shift`
  ADD PRIMARY KEY (`ID_SHIFT`),
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_USER`),
  ADD KEY `ID_ROLE` (`ID_ROLE`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `ID_ROLE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `shift`
--
ALTER TABLE `shift`
  MODIFY `ID_SHIFT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `shift`
--
ALTER TABLE `shift`
  ADD CONSTRAINT `shift_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID_USER`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`ID_ROLE`) REFERENCES `role` (`ID_ROLE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
