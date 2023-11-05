-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 24 Kwi 2023, 06:43
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `wybory_2025`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wybierający`
--

CREATE TABLE `wybierający` (
  `ID_glosu` int(11) NOT NULL,
  `Pesel` varchar(11) NOT NULL,
  `Kandydat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `wybierający`
--

INSERT INTO `wybierający` (`ID_glosu`, `Pesel`, `Kandydat`) VALUES
(1, '99999999999', 2),
(2, '83957184921', 1),
(3, '85930758391', 3),
(4, '75930718293', 2),
(5, '79224375581', 2),
(6, '98765432111', 2),
(7, '22222222222', 3),
(8, '92734268591', 2),
(9, '35789512346', 3),
(10, '95123578946', 1),
(11, '16794328465', 1),
(12, '96314779138', 1),
(13, '79461385279', 2),
(14, '10293847560', 1),
(15, '12457836954', 3),
(16, '12457836957', 2),
(17, '81630667367', 2),
(18, '81639876540', 1),
(19, '96375254816', 2),
(20, '54367832901', 3),
(21, '08040144357', 2);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `wybierający`
--
ALTER TABLE `wybierający`
  ADD PRIMARY KEY (`ID_glosu`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `wybierający`
--
ALTER TABLE `wybierający`
  MODIFY `ID_glosu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
