-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2019 at 07:24 AM
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
(3, 'nishan akib', 'tnishan7@gmail.com', 'abc', 200, 'alu, potol', '2019-07-06 00:00:00'),
(4, 'Tohfa Akib Nishan', 'petergsalmon12@gmail.com', 'abc', 300, 'alu, potol', '2019-07-06 00:00:00'),
(5, 'Tohfa Akib Nishan', 'petergsalmon12@gmail.com', 'abc', 500, 'alu, potol', '2019-07-06 00:00:00'),
(6, 'Tohfa Akib', 'tohfa@gmail.com', 'rertr', 1, 'jhinga', '2019-07-18 00:00:00'),
(7, 'Tohfa Akib', 'tohfa@gmail.com', 'rertr', 10, 'murgi', '2019-07-06 00:00:00'),
(8, 'Tohfa Akib', 'tohfa@gmail.com', 'rertr', 55, 'oil', '2019-07-26 00:00:00'),
(9, 'nishan akib', 'tnishan7@gmail.com', 'abc', 45, 'rice', '2019-08-14 00:00:00'),
(10, 'nishan akib', 'tnishan7@gmail.com', 'abc', 100, 'dim', '2019-01-09 00:00:00'),
(11, 'nishan akib', 'tnishan7@gmail.com', 'abc', 200, 'chal', '2020-07-16 00:00:00'),
(12, 'nishan akib', 'tnishan7@gmail.com', 'abc', 50, 'fff', '2019-07-06 00:00:00'),
(13, 'nishan akib', 'tnishan7@gmail.com', 'abc', 1000, 'fhdfgdgf', '2019-07-16 00:00:00'),
(14, 'nishan akib', 'tnishan7@gmail.com', 'abc', 200, 'dal', '2019-07-07 00:00:00'),
(15, 'hello hi', 'a@a.com', 'nnfjfgjgj', 500, '', '2019-07-07 00:00:00'),
(16, 'hello hi', 'a@a.com', 'nnfjfgjgj', 1021, '', '2019-07-06 00:00:00'),
(17, 'Tohfa Akib', 'tohfaakib@my.smccd.edu', 'abc', 1215, '', '2019-07-06 00:00:00'),
(18, 'Tohfa test', 'kl@fhf.com', 'abc', 750, '', '2019-07-07 00:00:00'),
(19, 'Tohfa Akib', 'nishan381@gmail.com', 'fgfghf', 500, 'moric. peyaj', '2019-07-07 00:00:00'),
(20, 'test test', 't@gmail.com', 'fgfghf', 200, 'chal', '2019-07-07 00:00:00'),
(21, 'Tohfa Akib Nishan', 'petergsalmon12@gmail.com', 'abc', 300, '', '2019-07-03 00:00:00'),
(22, 'Tohfa Akib', 'tohfa@gmail.com', 'rertr', 200, '', '2019-07-04 00:00:00'),
(23, 'test test', 'tnishan8@gmail.com', 'rertr', 240, 'alu, potol', '2019-07-01 00:00:00'),
(24, 'Tohfa Akib Nishan', 'axyz6203@gmail.com', 'rertr', 200, '', '2019-07-02 00:00:00'),
(25, 'hello hi', 'a@a.com', 'nnfjfgjgj', 200, '', '2019-07-02 00:00:00'),
(26, 'Tohfa Nishan', 'nishan@gmail.com', 'nnfjfgjgj', 200, 'alu, potol', '2019-07-06 00:00:00'),
(27, 'test test', 'u@u.com', 'uuuu', 200, '', '2019-07-04 00:00:00'),
(28, 'Tohfa Ferdous', 'ferdous@gmail.com', 'rertr', 200, 'alu, potol', '2019-07-02 00:00:00'),
(29, 'Brand New', 'brand@new.com', 'brand123', 200, 'alu, potol', '2019-07-08 00:00:00');

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
(15, '2019-07-07', 'nishan', 'tnishan7@gmail.com', 'abc', 0, 0, 0),
(16, '2019-07-07', 'Tohfa', 'nishan381@gmail.com', 'fgfghf', 1, 1, 1),
(17, '2019-07-07', 'test', 't@gmail.com', 'fgfghf', 1, 1, 1),
(18, '2019-07-07', 'Tohfa Akib', 'petergsalmon12@gmail.com', 'abc', 1, 1, 1),
(19, '2019-07-07', 'test', 'tnishan8@gmail.com', 'rertr', 1, 1, 1),
(20, '2019-07-07', 'Tohfa', 'kl@fhf.com', 'abc', 1, 1, 1),
(21, '2019-07-07', 'Tohfa', 'axyz6203@gmail.com', 'rertr', 0, 0, 1),
(22, '2019-07-07', 'Tohfa', 'tohfa@gmail.com', 'rertr', 1, 1, 1),
(23, '2019-07-07', 'Tohfa', 'tohfaakib@my.smccd.edu', 'abc', 1, 0, 1),
(24, '2019-07-07', 'hello', 'a@a.com', 'nnfjfgjgj', 1, 1, 1),
(25, '2019-07-07', 'Tohfa', 'nishan@gmail.com', 'nnfjfgjgj', 1, 1, 1),
(26, '2019-07-07', 'test', 'u@u.com', 'uuuu', 1, 1, 1),
(27, '2019-07-08', 'nishan', 'tnishan7@gmail.com', 'abc', 1, 0, 1),
(28, '2019-07-08', 'Akib', 'nishan381@gmail.com', 'fgfghf', 1, 1, 1),
(29, '2019-07-08', 'test', 't@gmail.com', 'fgfghf', 1, 1, 1),
(30, '2019-07-08', 'Tohfa Akib', 'petergsalmon12@gmail.com', 'abc', 0, 1, 1),
(31, '2019-07-08', 'Tohfa', 'tohfa@gmail.com', 'rertr', 0, 1, 1),
(32, '2019-07-08', 'test', 'tnishan8@gmail.com', 'rertr', 1, 0, 1),
(33, '2019-07-08', 'Tohfa', 'kl@fhf.com', 'abc', 1, 1, 1),
(34, '2019-07-08', 'hello', 'a@a.com', 'nnfjfgjgj', 1, 1, 1),
(35, '2019-07-08', 'Tohfa', 'nishan@gmail.com', 'nnfjfgjgj', 1, 1, 1),
(36, '2019-07-08', 'Tohfa', 'axyz6203@gmail.com', 'rertr', 1, 0, 1),
(37, '2019-07-08', 'Tohfa', 'tohfaakib@my.smccd.edu', 'abc', 1, 1, 1),
(38, '2019-07-08', 'test', 'u@u.com', 'uuuu', 1, 1, 1),
(39, '2019-07-09', 'nishan', 'tnishan7@gmail.com', 'abc', 0, 1, 1),
(40, '2019-07-09', '', 'nishan381@gmail.com', 'fgfghf', 1, 1, 1),
(41, '2019-07-09', 'Tohfa Akib', 'petergsalmon12@gmail.com', 'abc', 1, 1, 1),
(42, '2019-07-09', '', 't@gmail.com', 'fgfghf', 1, 1, 1),
(43, '2019-07-09', '', 'tohfa@gmail.com', 'rertr', 0, 1, 1),
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
(56, '2019-07-03', 'test', 'tnishan8@gmail.com', 'rertr', 0, 0, 0),
(57, '2019-07-03', 'Tohfa', 'axyz6203@gmail.com', 'rertr', 1, 1, 1),
(58, '2019-07-03', 'Tohfa', 'kl@fhf.com', 'abc', 1, 1, 1),
(59, '2019-07-03', 'Tohfa', 'tohfaakib@my.smccd.edu', 'abc', 1, 1, 1),
(60, '2019-07-03', 'hello', 'a@a.com', 'nnfjfgjgj', 1, 1, 1),
(61, '2019-07-03', 'Tohfa', 'nishan@gmail.com', 'nnfjfgjgj', 1, 1, 1),
(62, '2019-07-03', 'test', 'u@u.com', 'uuuu', 1, 1, 1),
(64, '2019-07-09', 'Tohfa', 'ferdous@gmail.com', 'rertr', 1, 1, 1),
(66, '2019-07-08', 'Tohfa', 'ferdous@gmail.com', 'rertr', 0, 1, 0),
(68, '2019-07-08', 'Rian', 'rian@gmail.com', 'rertr', 0, 0, 0),
(69, '2019-07-09', 'Rian', 'rian@gmail.com', 'rertr', 1, 1, 1),
(70, '2019-07-08', 'Brand', 'brand@new.com', 'brand123', 1, 0, 0),
(71, '2019-07-09', 'Brand', 'brand@new.com', 'brand123', 1, 1, 1),
(72, '2019-07-08', 'Brand1', 'brand1@new.com', 'brand123', 0, 0, 0),
(73, '2019-07-09', 'Brand1', 'brand1@new.com', 'brand123', 1, 1, 1),
(74, '2019-07-08', 'Brand2', 'brand3@new.com', 'heyoo', 0, 0, 0),
(75, '2019-07-09', 'Brand2', 'brand3@new.com', 'heyoo', 1, 1, 1),
(76, '2019-07-08', 'Brand Member', 'brand_memeber@new.com', 'heyoo', 0, 0, 0),
(77, '2019-07-09', 'Brand Member', 'brand_memeber@new.com', 'heyoo', 1, 1, 1),
(78, '2019-07-08', 'brand4', 'brand4@new.com', 'heyoo', 0, 0, 0),
(79, '2019-07-09', 'brand4', 'brand4@new.com', 'heyoo', 1, 1, 1);

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
(15, 'uuuu', 'united states'),
(16, 'b123', 'Toto Company'),
(17, 'brand123', 'Toto Company'),
(18, 'heyoo', 'Havaitta Mess LTD');

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
(5, 'Rian', 'Ferdous', 'rian@gmail.com', '01732550362', '123', 'Member', 'fb.com/rian', 'rertr', ''),
(6, 'Tohfa', 'Ferdous', 'ferdous@gmail.com', '4', '123', 'Member', '', 'rertr', ''),
(7, 'Tohfa', 'Akib', 'tohfa@gmail.com', '00000000000000', '123', 'Manager', 'fb.com/tohfaakib', 'rertr', ''),
(8, 'test', 'test', 'tnishan8@gmail.com', '1111111111111', '123', 'Member', 'fb.com/peter', 'rertr', ''),
(9, 'Tohfa', 'test', 'kl@fhf.com', '01915707222', '123', 'Member', '', 'abc', ''),
(10, 'Tohfa', 'Akib Nishan', 'axyz6203@gmail.com', '01920124388', '123', 'Member', NULL, 'rertr', ''),
(11, 'Tohfa', 'Akib', 'tohfaakib@my.smccd.edu', '01916139032', '123', 'Member', 'fb.com/tohfaakib', 'abc', ''),
(12, 'hello', 'hi', 'a@a.com', '463654464654', '123', 'Member', 'fb.com/tohfaakib', 'nnfjfgjgj', ''),
(13, 'Tohfa', 'Nishan', 'nishan@gmail.com', '23465756767', '123', 'Manager', 'fb.com/peter', 'nnfjfgjgj', ''),
(14, 'test', 'test', 'u@u.com', '6565', '123', 'Manager', NULL, 'uuuu', ''),
(15, 'Brand', 'New', 'brand@new.com', '55676867869', '123', 'Manager', 'fb.com/peter', 'brand123', ''),
(16, 'Brand1', 'new', 'brand1@new.com', '75676567', '123', 'Member', 'fb.com/peter', 'brand123', ''),
(17, 'Brand2', 'New', 'brand3@new.com', '5675687658', '123', 'Manager', 'fb.com/peter', 'heyoo', ''),
(18, 'Brand Member', 'new', 'brand_memeber@new.com', '76547343556', '123', 'Member', 'fb.com/peter', 'heyoo', ''),
(19, 'brand4', 'New', 'brand4@new.com', '657567567575', '123', 'Member', 'fb.com/peter', 'heyoo', '');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `meal`
--
ALTER TABLE `meal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `mess_table`
--
ALTER TABLE `mess_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
