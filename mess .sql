-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2019 at 05:17 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mess`
--

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `mess_id` varchar(50) NOT NULL,
  `amount` double NOT NULL,
  `item` varchar(50) DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `full_name`, `user_email`, `mess_id`, `amount`, `item`, `date`) VALUES
(3, '', 'tnishan7@gmail.com', 'abc', 200, 'alu, potol', '2019-07-06 00:00:00'),
(4, '', 'petergsalmon12@gmail.com', 'abc', 300, 'alu, potol', '2019-07-06 00:00:00'),
(5, '', 'petergsalmon12@gmail.com', 'abc', 500, 'alu, potol', '2019-07-06 00:00:00'),
(6, '', 'tohfa@gmail.com', 'rertr', 1, 'jhinga', '2019-07-18 00:00:00'),
(7, '', 'tohfa@gmail.com', 'rertr', 10, 'murgi', '2019-07-06 00:00:00'),
(8, '', 'tohfa@gmail.com', 'rertr', 55, 'oil', '2019-07-26 00:00:00'),
(9, '', 'tnishan7@gmail.com', 'abc', 45, 'rice', '2019-08-14 00:00:00'),
(10, '', 'tnishan7@gmail.com', 'abc', 100, 'dim', '2019-01-09 00:00:00'),
(11, '', 'tnishan7@gmail.com', 'abc', 200, 'chal', '2020-07-16 00:00:00'),
(12, '', 'tnishan7@gmail.com', 'abc', 50, 'fff', '2019-07-06 00:00:00'),
(13, '', 'tnishan7@gmail.com', 'abc', 1000, 'fhdfgdgf', '2019-07-16 00:00:00'),
(14, 'nishan akib', 'tnishan7@gmail.com', 'abc', 200, 'dal', '2019-07-07 00:00:00'),
(15, 'hello hi', 'a@a.com', 'nnfjfgjgj', 500, '', '2019-07-07 00:00:00'),
(16, 'hello hi', 'a@a.com', 'nnfjfgjgj', 1021, '', '2019-07-06 00:00:00'),
(17, 'Tohfa Akib', 'tohfaakib@my.smccd.edu', 'abc', 1215, '', '2019-07-06 00:00:00'),
(18, 'Tohfa test', 'kl@fhf.com', 'abc', 750, '', '2019-07-07 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `meal`
--

CREATE TABLE `meal` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `mess_id` varchar(50) NOT NULL,
  `breakfast` int(11) NOT NULL,
  `lunch` int(11) NOT NULL,
  `dinner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `meal`
--

INSERT INTO `meal` (`id`, `date`, `name`, `user_email`, `mess_id`, `breakfast`, `lunch`, `dinner`) VALUES
(15, '2019-07-07', 'nishan', 'tnishan7@gmail.com', 'abc', 0, 1, 1),
(16, '2019-07-07', '', 'nishan381@gmail.com', 'fgfghf', 1, 1, 1),
(17, '2019-07-07', 'test', 't@gmail.com', 'fgfghf', 1, 1, 1),
(18, '2019-07-07', 'Tohfa Akib', 'petergsalmon12@gmail.com', 'abc', 1, 1, 1),
(19, '2019-07-07', '', 'tnishan8@gmail.com', 'rertr', 1, 1, 1),
(20, '2019-07-07', 'Tohfa', 'kl@fhf.com', 'abc', 1, 1, 1),
(21, '2019-07-07', '', 'axyz6203@gmail.com', 'rertr', 1, 1, 1),
(22, '2019-07-07', '', 'tohfa@gmail.com', 'rertr', 1, 0, 1),
(23, '2019-07-07', 'Tohfa', 'tohfaakib@my.smccd.edu', 'abc', 1, 1, 1),
(24, '2019-07-07', 'hello', 'a@a.com', 'nnfjfgjgj', 1, 1, 1),
(25, '2019-07-07', '', 'nishan@gmail.com', 'nnfjfgjgj', 1, 1, 1),
(26, '2019-07-07', '', 'u@u.com', 'uuuu', 1, 1, 1),
(27, '2019-07-08', 'nishan', 'tnishan7@gmail.com', 'abc', 1, 1, 1),
(28, '2019-07-08', '', 'nishan381@gmail.com', 'fgfghf', 1, 1, 1),
(29, '2019-07-08', 'test', 't@gmail.com', 'fgfghf', 1, 1, 1),
(30, '2019-07-08', 'Tohfa Akib', 'petergsalmon12@gmail.com', 'abc', 1, 1, 1),
(31, '2019-07-08', '', 'tohfa@gmail.com', 'rertr', 0, 1, 1),
(32, '2019-07-08', '', 'tnishan8@gmail.com', 'rertr', 1, 1, 1),
(33, '2019-07-08', 'Tohfa', 'kl@fhf.com', 'abc', 1, 1, 1),
(34, '2019-07-08', 'hello', 'a@a.com', 'nnfjfgjgj', 1, 1, 1),
(35, '2019-07-08', '', 'nishan@gmail.com', 'nnfjfgjgj', 1, 1, 1),
(36, '2019-07-08', '', 'axyz6203@gmail.com', 'rertr', 1, 1, 1),
(37, '2019-07-08', 'Tohfa', 'tohfaakib@my.smccd.edu', 'abc', 1, 1, 1),
(38, '2019-07-08', '', 'u@u.com', 'uuuu', 1, 1, 1),
(39, '2019-07-09', 'nishan', 'tnishan7@gmail.com', 'abc', 1, 1, 1),
(40, '2019-07-09', '', 'nishan381@gmail.com', 'fgfghf', 1, 1, 1),
(41, '2019-07-09', 'Tohfa Akib', 'petergsalmon12@gmail.com', 'abc', 1, 1, 1),
(42, '2019-07-09', '', 't@gmail.com', 'fgfghf', 1, 1, 1),
(43, '2019-07-09', '', 'tohfa@gmail.com', 'rertr', 1, 1, 1),
(44, '2019-07-09', '', 'tnishan8@gmail.com', 'rertr', 1, 1, 1),
(45, '2019-07-09', 'Tohfa', 'kl@fhf.com', 'abc', 1, 1, 1),
(46, '2019-07-09', '', 'axyz6203@gmail.com', 'rertr', 1, 1, 1),
(47, '2019-07-09', 'Tohfa', 'tohfaakib@my.smccd.edu', 'abc', 1, 1, 1),
(48, '2019-07-09', '', 'a@a.com', 'nnfjfgjgj', 1, 1, 1),
(49, '2019-07-09', '', 'u@u.com', 'uuuu', 1, 1, 1),
(50, '2019-07-09', '', 'nishan@gmail.com', 'nnfjfgjgj', 1, 1, 1),
(51, '2019-07-03', 'nishan', 'tnishan7@gmail.com', 'abc', 1, 1, 1),
(52, '2019-07-03', 'Tohfa Akib', 'petergsalmon12@gmail.com', 'abc', 1, 1, 1),
(53, '2019-07-03', 'test', 't@gmail.com', 'fgfghf', 1, 1, 1),
(54, '2019-07-03', 'Tohfa', 'nishan381@gmail.com', 'fgfghf', 1, 1, 1),
(55, '2019-07-03', 'Tohfa', 'tohfa@gmail.com', 'rertr', 1, 1, 1),
(56, '2019-07-03', 'test', 'tnishan8@gmail.com', 'rertr', 1, 1, 1),
(57, '2019-07-03', 'Tohfa', 'axyz6203@gmail.com', 'rertr', 1, 1, 1),
(58, '2019-07-03', 'Tohfa', 'kl@fhf.com', 'abc', 1, 1, 1),
(59, '2019-07-03', 'Tohfa', 'tohfaakib@my.smccd.edu', 'abc', 1, 1, 1),
(60, '2019-07-03', 'hello', 'a@a.com', 'nnfjfgjgj', 1, 1, 1),
(61, '2019-07-03', 'Tohfa', 'nishan@gmail.com', 'nnfjfgjgj', 1, 1, 1),
(62, '2019-07-03', 'test', 'u@u.com', 'uuuu', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mess_table`
--

CREATE TABLE `mess_table` (
  `id` int(11) NOT NULL,
  `mess_id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mess_table`
--

INSERT INTO `mess_table` (`id`, `mess_id`, `name`) VALUES
(9, 'abc', 'alibaba'),
(11, 'fgfghf', 'No Id No Entry'),
(12, 'rertr', 'Brand New Mess'),
(13, 'nnfjfgjgj', 'Balsal mess company'),
(14, 'uuu', 'united states'),
(15, 'uuuu', 'united states');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `social_link` varchar(50) DEFAULT NULL,
  `mess_id` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone`, `password`, `role`, `social_link`, `mess_id`, `status`) VALUES
(1, 'nishan', 'akib', 'tnishan7@gmail.com', '01701007651', '123', 'Manager', 'fb.com/tohfaakib', 'abc', ''),
(2, 'Tohfa', 'Akib', 'nishan381@gmail.com', '1', '123', 'Manager', '', 'fgfghf', ''),
(3, 'test', 'test', 't@gmail.com', '2', '123', 'Member', '', 'fgfghf', ''),
(4, 'Tohfa Akib', 'Nishan', 'petergsalmon12@gmail.com', '3', '123', 'Member', '', 'abc', ''),
(5, 'Rian', 'Ferdous', 'rian@gmail.com', '01732550362', '123', 'Member', 'fb.com/rian', NULL, ''),
(6, 'Tohfa', 'Ferdous', 'ferdous@gmail.com', '4', '123', 'Member', '', NULL, ''),
(7, 'Tohfa', 'Akib', 'tohfa@gmail.com', '00000000000000', '12345', 'Manager', 'fb.com/tohfaakib', 'rertr', ''),
(8, 'test', 'test', 'tnishan8@gmail.com', '1111111111111', '123', 'Member', 'fb.com/peter', 'rertr', ''),
(9, 'Tohfa', 'test', 'kl@fhf.com', '01915707222', '123', 'Member', '', 'abc', ''),
(10, 'Tohfa', 'Akib Nishan', 'axyz6203@gmail.com', '01920124388', '123', 'Member', NULL, 'rertr', ''),
(11, 'Tohfa', 'Akib', 'tohfaakib@my.smccd.edu', '01916139032', '123', 'Member', 'fb.com/tohfaakib', 'abc', ''),
(12, 'hello', 'hi', 'a@a.com', '463654464654', '123', 'Member', 'fb.com/tohfaakib', 'nnfjfgjgj', ''),
(13, 'Tohfa', 'Nishan', 'nishan@gmail.com', '23465756767', '123', 'Manager', 'fb.com/peter', 'nnfjfgjgj', ''),
(14, 'test', 'test', 'u@u.com', '6565', '123', 'Manager', NULL, 'uuuu', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meal`
--
ALTER TABLE `meal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mess_table`
--
ALTER TABLE `mess_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `meal`
--
ALTER TABLE `meal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `mess_table`
--
ALTER TABLE `mess_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
