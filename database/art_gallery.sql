-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 27 Ara 2018, 17:47:22
-- Sunucu sürümü: 10.1.28-MariaDB
-- PHP Sürümü: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `art_gallery`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `zipCode` varchar(255) NOT NULL,
  `creditCard` varchar(255) NOT NULL,
  `expiryDate` varchar(255) NOT NULL,
  `CV` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `payments`
--

INSERT INTO `payments` (`id`, `name`, `surname`, `country`, `state`, `phone`, `address`, `zipCode`, `creditCard`, `expiryDate`, `CV`) VALUES
(2, 'Ersoy Efe', 'Uruk', 'Turkey', 'Izmir', '05309729757', '', '35230', '151541451564', '31', '344'),
(6, 'Ersoy Efe', 'Uruk', 'Azerbaijan', 'Agdam Rayonu', '12313132131', '', '35230', '423432423423', '24', '342'),
(11, 'Figen', 'Sayili', 'Turkey', 'Istanbul', '05348787987', '', '35434', '115156156156', '26', '231'),
(12, 'Ipek', 'Tekin', 'Germany', 'Hamburg', '15615615614', '', '65156', '156156156156', '27', '321'),
(19, 'Ersoy Efe', 'Uruk', 'Cyprus', 'Kyrenia', '34354353454', '', '34535', '435435345345', '2/20', '543');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmPassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `username`, `email`, `password`, `confirmPassword`) VALUES
(1, 'Ersoy Efe', 'Uruk', 'efefefe', 'efeuruk1@gmail.com', 'fefe', 'fefe'),
(5, 'George', 'Washington', 'geroge123', 'georgewashington@gmail.com', 'gege', 'gege'),
(6, 'Figen', 'Sayili', 'figen', 'figen@gmail.com', 'figen', 'figen'),
(7, 'Ipek', 'Tekin', 'ipekTekin', 'ipek@gmail.com', 'ipek', 'ipek');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
