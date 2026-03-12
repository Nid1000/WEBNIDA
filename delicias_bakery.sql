-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2026 a las 19:08:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delicias_bakery`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `rol` enum('admin','super_admin') NOT NULL DEFAULT 'admin',
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`id`, `nombre`, `email`, `password`, `rol`, `activo`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', 'admin@delicias.com', '$2a$10$Rvqxxvu028dfjydvtBOfqusnyuA2tNBfNiZ6kiE7IRkj3qplWMPKO', 'super_admin', 1, '2025-10-10 22:39:16.000', '2025-10-10 22:39:16.000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `estrellas` int(11) NOT NULL,
  `comentario` text DEFAULT NULL,
  `fecha` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `descripcion` varchar(191) DEFAULT NULL,
  `imagen` varchar(191) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`, `imagen`, `activo`, `created_at`, `updated_at`) VALUES
(1, 'Panes', 'Variedad de panes frescos y artesanales', 'categorias/categoria-1760734219985-415066369.png', 1, '2025-10-10 22:39:16.000', '2025-10-17 19:50:19.000'),
(2, 'Pasteles', 'Deliciosos pasteles para toda ocasión', 'categorias/categoria-1760734533477-708443366.png', 1, '2025-10-10 22:39:16.000', '2025-10-17 19:55:33.000'),
(3, 'Galletas', 'TOSTADA ', 'categorias/categoria-1771647772239-919254697.png', 1, '2025-10-10 22:39:16.000', '2026-02-21 04:22:52.000'),
(4, 'Postres', 'Postres especiales y dulces', NULL, 1, '2025-10-10 22:39:16.000', '2025-10-10 22:39:16.000'),
(5, 'Tortas', 'Tortas personalizadas para celebraciones', NULL, 1, '2025-10-10 22:39:16.000', '2025-10-10 22:39:16.000');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `categorias_app`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `categorias_app` (
`id_categoria` int(11)
,`nombre` varchar(191)
,`estado` tinyint(1)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprobantes`
--

CREATE TABLE `comprobantes` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `serie` varchar(10) NOT NULL,
  `numero` int(11) NOT NULL,
  `numero_formateado` varchar(30) NOT NULL,
  `archivo_nombre` varchar(255) NOT NULL,
  `archivo_ruta` varchar(500) NOT NULL,
  `mime` varchar(100) DEFAULT NULL,
  `size_bytes` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprobante_series`
--

CREATE TABLE `comprobante_series` (
  `id` int(11) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `serie` varchar(10) NOT NULL,
  `correlativo` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `detalle_pedido_app`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `detalle_pedido_app` (
`id_detalle` int(11)
,`id_pedido` int(11)
,`id_producto` int(11)
,`cantidad` int(11)
,`subtotal` decimal(10,2)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `direccion` text NOT NULL,
  `distrito` varchar(120) DEFAULT NULL,
  `numero_casa` varchar(20) DEFAULT NULL,
  `referencia` text DEFAULT NULL,
  `latitud` decimal(10,8) DEFAULT NULL,
  `longitud` decimal(11,8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login_logs`
--

CREATE TABLE `login_logs` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `tipo_usuario` enum('usuario','admin') NOT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `exitoso` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `login_logs`
--

INSERT INTO `login_logs` (`id`, `usuario_id`, `admin_id`, `tipo_usuario`, `ip_address`, `user_agent`, `exitoso`, `created_at`) VALUES
(1, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-11 13:20:07.000'),
(2, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.100.3 Chrome/132.0.6834.210 Electron/34.5.1 Safari/537.36', 1, '2025-10-11 13:34:53.000'),
(3, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-11 14:17:17.000'),
(4, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.100.3 Chrome/132.0.6834.210 Electron/34.5.1 Safari/537.36', 1, '2025-10-11 14:28:26.000'),
(5, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-11 14:35:05.000'),
(6, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-11 14:47:59.000'),
(7, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-11 15:05:37.000'),
(8, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.100.3 Chrome/132.0.6834.210 Electron/34.5.1 Safari/537.36', 1, '2025-10-11 15:24:47.000'),
(9, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-11 19:43:21.000'),
(10, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.100.3 Chrome/132.0.6834.210 Electron/34.5.1 Safari/537.36', 1, '2025-10-11 20:19:09.000'),
(11, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.100.3 Chrome/132.0.6834.210 Electron/34.5.1 Safari/537.36', 1, '2025-10-11 20:41:58.000'),
(12, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 0, '2025-10-11 22:21:56.000'),
(13, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 0, '2025-10-11 22:23:09.000'),
(14, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 0, '2025-10-11 22:26:50.000'),
(15, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 0, '2025-10-11 22:38:44.000'),
(16, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-11 22:44:53.000'),
(17, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-12 09:58:19.000'),
(18, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; es-PE) WindowsPowerShell/5.1.26100.6584', 1, '2025-10-12 10:29:02.000'),
(19, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-13 10:48:19.000'),
(20, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-13 11:04:48.000'),
(21, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-13 11:25:18.000'),
(22, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; es-PE) WindowsPowerShell/5.1.26100.6584', 1, '2025-10-13 11:41:46.000'),
(23, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.100.3 Chrome/132.0.6834.210 Electron/34.5.1 Safari/537.36', 1, '2025-10-13 11:43:24.000'),
(24, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-13 14:16:29.000'),
(25, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-13 14:16:51.000'),
(26, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.100.3 Chrome/132.0.6834.210 Electron/34.5.1 Safari/537.36', 1, '2025-10-13 15:13:18.000'),
(27, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-13 21:27:51.000'),
(28, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-13 21:51:34.000'),
(29, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-13 23:25:33.000'),
(30, 4, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-13 23:34:51.000'),
(31, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-14 10:19:35.000'),
(32, NULL, 1, 'admin', '::1', 'curl/8.14.1', 1, '2025-10-15 03:44:02.000'),
(33, 5, NULL, 'usuario', '::1', 'curl/8.14.1', 1, '2025-10-15 04:01:16.000'),
(34, NULL, 1, 'admin', '::1', 'curl/8.14.1', 1, '2025-10-15 04:24:00.000'),
(35, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 0, '2025-10-15 04:27:22.000'),
(36, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-15 04:31:52.000'),
(37, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-15 04:32:02.000'),
(38, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-15 04:32:19.000'),
(39, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-15 04:36:16.000'),
(40, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-15 04:39:09.000'),
(41, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; es-PE) WindowsPowerShell/5.1.26100.6584', 1, '2025-10-15 15:09:22.000'),
(42, 6, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; es-PE) WindowsPowerShell/5.1.26100.6584', 1, '2025-10-15 15:19:35.000'),
(43, 6, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; es-PE) WindowsPowerShell/5.1.26100.6584', 1, '2025-10-15 15:19:52.000'),
(44, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-15 15:27:25.000'),
(45, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-15 15:33:31.000'),
(46, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-15 15:35:50.000'),
(47, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-15 15:36:02.000'),
(48, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-15 15:44:16.000'),
(49, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-15 15:47:56.000'),
(50, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-15 15:49:35.000'),
(51, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-15 16:31:26.000'),
(52, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 0, '2025-10-15 18:31:48.000'),
(53, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-15 18:32:12.000'),
(54, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-16 03:12:38.000'),
(55, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-17 03:29:55.000'),
(56, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-17 03:32:15.000'),
(57, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-17 04:02:39.000'),
(58, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-17 04:02:59.000'),
(59, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-17 04:04:57.000'),
(60, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-17 04:23:56.000'),
(61, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 0, '2025-10-17 13:54:46.000'),
(62, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; es-PE) WindowsPowerShell/5.1.26100.6899', 1, '2025-10-17 13:59:04.000'),
(63, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-17 14:06:42.000'),
(64, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-17 14:31:10.000'),
(65, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-17 16:01:51.000'),
(66, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-17 19:11:48.000'),
(67, NULL, NULL, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 0, '2025-10-17 19:13:14.000'),
(68, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-17 19:13:20.000'),
(69, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-17 19:32:22.000'),
(70, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-17 19:37:22.000'),
(71, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-17 19:53:03.000'),
(72, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Trae/1.104.3 Chrome/138.0.7204.235 Electron/37.3.1 Safari/537.36', 1, '2025-10-18 04:08:28.000'),
(73, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-18 04:08:47.000'),
(74, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-18 04:11:24.000'),
(75, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 1, '2025-10-18 04:18:32.000'),
(76, 2, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 0, '2025-10-18 15:10:08.000'),
(77, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-18 04:07:40.000'),
(78, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-18 04:11:47.000'),
(79, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-18 04:11:59.000'),
(80, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-18 04:12:52.000'),
(81, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-18 04:12:59.000'),
(82, 7, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 1, '2026-02-18 04:14:07.000'),
(83, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-18 18:40:54.000'),
(84, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-18 18:42:32.000'),
(85, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-18 18:46:49.000'),
(86, 8, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-21 02:29:43.000'),
(87, 7, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 1, '2026-02-21 02:30:32.000'),
(88, 8, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-21 02:32:33.000'),
(89, 9, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 1, '2026-02-21 02:33:23.000'),
(90, 9, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 1, '2026-02-21 02:33:36.000'),
(91, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 03:56:38.000'),
(92, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:01:34.000'),
(93, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:01:46.000'),
(94, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:01:48.000'),
(95, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:01:49.000'),
(96, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:01:53.000'),
(97, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:02:07.000'),
(98, NULL, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:02:23.000'),
(99, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:02:46.000'),
(100, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:14:42.000'),
(101, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:14:49.000'),
(102, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:14:52.000'),
(103, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:14:54.000'),
(104, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 0, '2026-02-21 04:14:56.000'),
(105, NULL, 1, 'admin', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 Edg/144.0.0.0', 1, '2026-02-21 04:15:17.000'),
(106, 9, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-27 15:51:05.150'),
(107, 8, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-27 15:51:36.535'),
(108, 9, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-27 15:53:04.911'),
(109, 9, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-27 15:54:20.047'),
(110, 9, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-27 15:54:57.729'),
(111, 9, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 0, '2026-02-27 15:55:18.891'),
(112, 9, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 1, '2026-02-27 15:56:14.480'),
(113, 9, NULL, 'usuario', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36', 1, '2026-02-27 15:59:19.922');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

CREATE TABLE `notificaciones` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `titulo` varchar(120) DEFAULT NULL,
  `mensaje` text DEFAULT NULL,
  `leido` tinyint(4) DEFAULT 0,
  `fecha` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `metodo` enum('yape','tarjeta','contra_entrega') NOT NULL,
  `monto` decimal(10,2) NOT NULL,
  `estado` enum('pendiente','pagado') DEFAULT 'pendiente',
  `fecha` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `direccion_id` int(11) DEFAULT NULL,
  `total` decimal(10,2) NOT NULL,
  `estado` enum('pendiente','confirmado','en_preparacion','listo','entregado','cancelado') NOT NULL DEFAULT 'pendiente',
  `fecha_entrega` date DEFAULT NULL,
  `direccion_entrega` text DEFAULT NULL,
  `distrito_entrega` varchar(120) DEFAULT NULL,
  `numero_casa_entrega` varchar(20) DEFAULT NULL,
  `telefono_contacto` varchar(20) DEFAULT NULL,
  `notas` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `usuario_id`, `direccion_id`, `total`, `estado`, `fecha_entrega`, `direccion_entrega`, `distrito_entrega`, `numero_casa_entrega`, `telefono_contacto`, `notas`, `created_at`, `updated_at`) VALUES
(1, 2, NULL, 492.00, 'pendiente', '2025-10-15', 'sdadsdasdssdasddsa', NULL, NULL, '931005970', 'sadasdfsfsdfa', '2025-10-13 21:50:53.000', '2025-10-13 21:50:53.000'),
(2, 2, NULL, 24.00, 'pendiente', '2025-10-15', 'sdadsdasdssdasddsa', NULL, NULL, '931005970', 'dfsfsdsdf', '2025-10-13 22:10:13.000', '2025-10-13 22:10:13.000'),
(3, 2, NULL, 246.00, 'listo', '2025-10-24', 'sdadsdasdssdasddsa', NULL, NULL, '931005970', 'sfasasffsadfasdas', '2025-10-13 22:24:57.000', '2025-10-13 22:55:17.000'),
(4, 2, NULL, 36.03, 'pendiente', '2025-10-09', 'sdadsdasdssdasddsa', NULL, NULL, '931005970', 'wqdasddasdas', '2025-10-13 23:30:04.000', '2025-10-13 23:30:04.000'),
(5, 4, NULL, 1599.00, 'pendiente', '2025-10-16', 'sdadsdasdssdasddsa', NULL, NULL, '931005970', 'asddasasffsa', '2025-10-13 23:35:56.000', '2025-10-13 23:35:56.000'),
(6, 4, NULL, 48.04, 'pendiente', '2025-10-15', 'sdadsdasdssdasddsa', NULL, NULL, '931005970', 'wetshgyfjkghjmi ,ujfyngtbrtyh', '2025-10-13 23:38:01.000', '2025-10-13 23:38:01.000'),
(7, 2, NULL, 48.00, 'pendiente', '2025-10-18', 'asdassdaasddsa', NULL, NULL, '931005970', 'asddasdas', '2025-10-17 03:32:43.000', '2025-10-17 03:32:43.000'),
(8, 2, NULL, 48.00, 'pendiente', '2025-10-17', 'asdsdfasd', NULL, NULL, '931005970', 'sadfsdfdsafs', '2025-10-17 03:33:29.000', '2025-10-17 03:33:29.000'),
(9, 2, NULL, 48.00, 'pendiente', '2025-10-18', 'sdafsdfsdfaasdf', NULL, NULL, '931005970', 'dsdfgsasdwese', '2025-10-17 04:03:48.000', '2025-10-17 04:03:48.000'),
(10, 2, NULL, 36.00, 'pendiente', '2025-10-18', 'asddasASS', NULL, NULL, '9310059', 'SAdsadsadSA', '2025-10-17 04:12:24.000', '2025-10-17 04:12:24.000'),
(11, 2, NULL, 36.00, 'cancelado', '2025-10-22', 'dfassdffsdfas', NULL, NULL, '931005970', 'sdfdfsfasfsd', '2025-10-17 04:22:47.000', '2026-02-21 04:17:36.000'),
(12, 2, NULL, 41.00, 'cancelado', '2025-10-18', 'asffasfassfa', NULL, NULL, '931005970', 'sdadassda', '2025-10-17 05:04:10.000', '2026-02-21 04:17:36.000'),
(13, 2, NULL, 24.00, 'cancelado', '2025-10-18', 'luiasdadsasd', NULL, NULL, '931005970', '11243213', '2025-10-17 05:28:54.000', '2026-02-21 04:17:37.000'),
(14, 8, NULL, 26.00, 'cancelado', '2026-02-19', 'jrtrujillo', NULL, NULL, '974268690', 'tienda', '2026-02-18 22:26:23.000', '2026-02-21 04:17:38.000'),
(15, 9, NULL, 3.00, 'pendiente', '2026-02-21', 'jr. trujillo 350 ', NULL, NULL, '974268690jijhjj', 'panes ', '2026-02-21 02:43:37.000', '2026-02-21 02:43:37.000'),
(16, 9, NULL, 13.00, 'pendiente', '2026-02-21', 'jr trujillo', NULL, NULL, '97426869000', 'pan', '2026-02-21 02:53:28.000', '2026-02-21 02:53:28.000'),
(17, 9, NULL, 13.00, 'pendiente', '2026-02-21', 'jr trujillo', NULL, NULL, '97426869000', NULL, '2026-02-21 03:01:15.000', '2026-02-21 03:01:15.000'),
(18, 9, NULL, 12.00, 'pendiente', '2026-02-21', 'jr. trujillo', NULL, NULL, '974268', 'nida', '2026-02-21 03:22:29.000', '2026-02-21 03:22:29.000'),
(19, 9, NULL, 6.00, 'cancelado', '2026-02-21', 'jr trujillo', NULL, NULL, '8445622', NULL, '2026-02-21 03:29:57.000', '2026-02-21 04:17:32.000'),
(20, 9, NULL, 13.00, 'entregado', '2026-02-21', 'jr.trujillo', NULL, NULL, '974268690', 'ad', '2026-02-21 03:49:37.000', '2026-02-21 04:17:28.000');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `pedidos_app`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `pedidos_app` (
`id_pedido` int(11)
,`id_usuario` int(11)
,`id_direccion` int(11)
,`total` decimal(10,2)
,`estado` enum('pendiente','confirmado','en_preparacion','listo','entregado','cancelado')
,`fecha` datetime(3)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_detalles`
--

CREATE TABLE `pedido_detalles` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pedido_detalles`
--

INSERT INTO `pedido_detalles` (`id`, `pedido_id`, `producto_id`, `cantidad`, `precio_unitario`, `subtotal`) VALUES
(1, 1, 3, 4, 123.00, 492.00),
(2, 2, 2, 1, 12.00, 12.00),
(3, 2, 1, 1, 12.00, 12.00),
(4, 3, 3, 2, 123.00, 246.00),
(5, 4, 4, 3, 12.01, 36.03),
(6, 5, 3, 13, 123.00, 1599.00),
(7, 6, 4, 4, 12.01, 48.04),
(8, 7, 9, 4, 12.00, 48.00),
(9, 8, 9, 4, 12.00, 48.00),
(10, 9, 9, 4, 12.00, 48.00),
(11, 10, 9, 3, 12.00, 36.00),
(12, 11, 9, 3, 12.00, 36.00),
(13, 12, 11, 2, 13.00, 26.00),
(14, 12, 9, 1, 12.00, 12.00),
(15, 12, 10, 1, 3.00, 3.00),
(16, 13, 9, 2, 12.00, 24.00),
(17, 14, 11, 2, 13.00, 26.00),
(18, 15, 10, 1, 3.00, 3.00),
(19, 16, 11, 1, 13.00, 13.00),
(20, 17, 11, 1, 13.00, 13.00),
(21, 18, 9, 1, 12.00, 12.00),
(22, 19, 10, 2, 3.00, 6.00),
(23, 20, 11, 1, 13.00, 13.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `descripcion` varchar(191) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `imagen` varchar(191) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `destacado` tinyint(1) NOT NULL DEFAULT 0,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `categoria_id`, `imagen`, `stock`, `destacado`, `activo`, `created_at`, `updated_at`) VALUES
(1, 'luui', 'sdfsd', 12.00, 1, 'productos/producto-1760214539163-22084282.jpg', 0, 0, 0, '2025-10-11 14:28:59.000', '2025-10-16 03:12:53.000'),
(2, 'asd', 'asdasd', 12.00, 1, 'productos/producto-1760216883014-167971100.png', 0, 0, 0, '2025-10-11 15:08:03.000', '2025-10-16 03:12:52.000'),
(3, 'asdasddsas', 'qweeqwsdasdfgfghtrrt', 123.00, 5, 'productos/producto-1760419987216-266367056.jpeg', 0, 0, 0, '2025-10-11 20:42:25.000', '2025-10-16 03:12:50.000'),
(4, 'Inca Kola', 'sdadasdasdasasddasasd', 12.01, 4, 'productos/producto-1760420243740-250749079.png', 42, 0, 0, '2025-10-13 23:29:09.000', '2025-10-16 03:12:49.000'),
(5, 'Producto Test Nest', 'Producto de prueba creado desde script', 24.50, 1, 'https://via.placeholder.com/300.png', 5, 1, 0, '2025-10-15 03:45:25.000', '2025-10-15 03:47:02.000'),
(6, 'Producto Test Nest', 'Producto de prueba creado desde script', 19.99, 1, 'https://via.placeholder.com/300.png', 5, 0, 0, '2025-10-15 03:51:17.000', '2025-10-16 03:12:47.000'),
(7, 'Producto E2E Upload', 'Creado por prueba E2E con imagen', 7.50, 1, 'productos/producto-1760505899804-835132714.jpg', 5, 0, 0, '2025-10-15 04:24:59.000', '2025-10-16 03:12:46.000'),
(8, 'Luis Cunyas', 'asddsasdfadsa', 12.00, 1, 'productos/producto-1760546914508-431986972.jpg', 12, 1, 0, '2025-10-15 15:48:34.000', '2025-10-16 03:12:44.000'),
(9, 'pan', 'pan caliente', 12.00, 1, 'productos/producto-1760675462270-533732823.jpg', 14, 1, 1, '2025-10-17 03:31:02.000', '2025-10-17 03:31:02.000'),
(10, 'queque', 'fsfsasffsfs', 3.00, 2, 'productos/producto-1760680374669-435624514.jpg', 14, 0, 1, '2025-10-17 04:52:54.000', '2025-10-17 04:52:54.000'),
(11, 'fsaasd', '213df sfdsdas', 13.00, 3, 'productos/producto-1760680479495-544337280.jpeg', 1322, 0, 1, '2025-10-17 04:54:11.000', '2025-10-17 04:54:39.000'),
(12, 'Tostadas Integrales', 'contiene 8 und ', 8.00, 3, 'productos/producto-1771648147570-1511884.png', 4, 1, 1, '2026-02-21 04:29:07.000', '2026-02-21 04:29:07.000');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `productos_app`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `productos_app` (
`id_producto` int(11)
,`id_categoria` int(11)
,`nombre` varchar(191)
,`descripcion` varchar(191)
,`precio` decimal(10,2)
,`imagen` varchar(191)
,`stock` int(11)
,`estado` tinyint(1)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguimiento`
--

CREATE TABLE `seguimiento` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `estado` enum('Preparando','En camino','Entregado') DEFAULT NULL,
  `fecha` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesiones`
--

CREATE TABLE `sesiones` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `dispositivo` varchar(100) DEFAULT NULL,
  `fecha` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soporte`
--

CREATE TABLE `soporte` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `asunto` varchar(200) DEFAULT NULL,
  `mensaje` text DEFAULT NULL,
  `respuesta` text DEFAULT NULL,
  `estado` enum('pendiente','respondido') DEFAULT 'pendiente',
  `fecha` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `apellido` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` text DEFAULT NULL,
  `distrito` varchar(120) DEFAULT NULL,
  `numero_casa` varchar(20) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `telefono`, `direccion`, `distrito`, `numero_casa`, `activo`, `created_at`, `updated_at`) VALUES
(1, 'Maria', 'Garcia', 'prueba+20251013120042@example.com', '$2a$10$HubpkZQdJ471MzRTsH5KxOvrSDnSHCq7hRvP7HJ0wDtmmY88HWUPK', '612345678', 'Calle 123, Ciudad', NULL, NULL, 1, '2025-10-13 11:00:42.000', '2025-10-13 11:00:42.000'),
(2, 'luis', 'cunyas', 'luis@gmail.com', '$2a$10$cyRdakFyeTdD9Np8QkC2T.AB2nX.5pTGvZKXAn9We91qE5RpTzM9a', '931005970', 'uñas palian casa plomo', NULL, NULL, 1, '2025-10-13 11:24:21.000', '2025-10-13 11:24:21.000'),
(3, 'Luis', 'cunyas', 'luis.delicias123@gmail.com', '$2a$10$YQpBz5vRJaLdnNfjJvNI8.pbfHdMo2NLcOIAudBScq790poQfXg12', '931005970', 'unas palian casa plomo', NULL, NULL, 1, '2025-10-13 11:29:33.000', '2025-10-13 11:29:33.000'),
(4, 'rosa', 'melano', 'rosa@gmail.com', '$2a$10$g8kT3VSDrL5Hfbi0uKZAHON/hyj0dP2m9qUaeNv5s9FJ9ACoi7rdW', '931005970', 'uñas palian casa plomo', NULL, NULL, 1, '2025-10-13 23:34:23.000', '2025-10-18 04:09:19.000'),
(5, 'Migra2', 'Test2', 'migracion.test.user1@delicias.com', '$2b$10$k/M7iUEYOYhE1As2uvNcDuNCG41/oy7ZXjrisZIuNbKdOiEPz.RKi', '600123456', 'Av. Migración 456', NULL, NULL, 1, '2025-10-15 03:57:08.000', '2025-10-15 04:00:58.000'),
(6, 'Prueba', 'Usuario', 'test.user1760527153@example.com', '$2b$10$l.I9tY90fIp.InL4EhAvN.rRZqmLthvtnVmX9K/gkI0Afwfp6e/UK', '600123456', 'Calle Falsa 123', NULL, NULL, 1, '2025-10-15 15:19:12.000', '2025-10-15 15:19:12.000'),
(7, 'NIDA', 'IZARRA', 'telloizarra@gmail.com', '$2b$10$JDnfGzoSt1zFlpEdtOi1U.Yus0QAshdxDYqkV0oAO5MsU4YqPhBI.', '974268690', 'TRUJILLO', NULL, NULL, 1, '2026-02-18 04:13:50.000', '2026-02-18 04:13:50.000'),
(8, 'nida', 'tello', 'tello@gmail.com', '$2b$10$xiAPskPwIuJbb20SaJno1uO.U8NiiQwR8GKoUc53xi6tZU3wJDPCW', '974268690', 'trujillo', NULL, NULL, 1, '2026-02-18 18:47:14.000', '2026-02-18 18:47:14.000'),
(9, 'Nida', 'tello', 'telloa@gmail.com', '$2b$10$YwqhVPrqfxnY2f6eYYrFv.PSoDM1khhwk0BeikXcGUOXdNqLToq16', '974268690', 'jr trujillo', NULL, NULL, 1, '2026-02-21 02:31:51.000', '2026-02-27 15:58:11.046'),
(10, 'ODALI', 'TELLO', 'ODA@GMAIL.COM', '$2b$10$1CV.QdnaDCGDoFoFdGNYQuhU2oElOaisJ9iOQdX5LgeV43PU/Tmbe', '972468690', 'JR TRUJILLO', NULL, NULL, 1, '2026-03-03 18:07:52.192', '2026-03-03 18:07:52.192');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `usuarios_app`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `usuarios_app` (
`id_usuario` int(11)
,`nombre` varchar(191)
,`correo` varchar(191)
,`password` varchar(191)
,`telefono` varchar(20)
,`rol` varchar(7)
,`estado` tinyint(1)
,`fecha_registro` datetime(3)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `categorias_app`
--
DROP TABLE IF EXISTS `categorias_app`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `categorias_app`  AS SELECT `c`.`id` AS `id_categoria`, `c`.`nombre` AS `nombre`, `c`.`activo` AS `estado` FROM `categorias` AS `c` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `detalle_pedido_app`
--
DROP TABLE IF EXISTS `detalle_pedido_app`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `detalle_pedido_app`  AS SELECT `d`.`id` AS `id_detalle`, `d`.`pedido_id` AS `id_pedido`, `d`.`producto_id` AS `id_producto`, `d`.`cantidad` AS `cantidad`, `d`.`subtotal` AS `subtotal` FROM `pedido_detalles` AS `d` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `pedidos_app`
--
DROP TABLE IF EXISTS `pedidos_app`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `pedidos_app`  AS SELECT `pe`.`id` AS `id_pedido`, `pe`.`usuario_id` AS `id_usuario`, `pe`.`direccion_id` AS `id_direccion`, `pe`.`total` AS `total`, `pe`.`estado` AS `estado`, `pe`.`created_at` AS `fecha` FROM `pedidos` AS `pe` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `productos_app`
--
DROP TABLE IF EXISTS `productos_app`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `productos_app`  AS SELECT `p`.`id` AS `id_producto`, `p`.`categoria_id` AS `id_categoria`, `p`.`nombre` AS `nombre`, `p`.`descripcion` AS `descripcion`, `p`.`precio` AS `precio`, `p`.`imagen` AS `imagen`, `p`.`stock` AS `stock`, `p`.`activo` AS `estado` FROM `productos` AS `p` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `usuarios_app`
--
DROP TABLE IF EXISTS `usuarios_app`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `usuarios_app`  AS SELECT `u`.`id` AS `id_usuario`, `u`.`nombre` AS `nombre`, `u`.`email` AS `correo`, `u`.`password` AS `password`, `u`.`telefono` AS `telefono`, 'cliente' AS `rol`, `u`.`activo` AS `estado`, `u`.`created_at` AS `fecha_registro` FROM `usuarios` AS `u` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `administradores_email_key` (`email`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_calif_producto` (`producto_id`),
  ADD KEY `idx_calif_usuario` (`usuario_id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categorias_nombre_key` (`nombre`);

--
-- Indices de la tabla `comprobantes`
--
ALTER TABLE `comprobantes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `comprobantes_tipo_serie_numero_key` (`tipo`,`serie`,`numero`),
  ADD KEY `idx_pedido_id` (`pedido_id`);

--
-- Indices de la tabla `comprobante_series`
--
ALTER TABLE `comprobante_series`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `comprobante_series_tipo_serie_key` (`tipo`,`serie`);

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_dir_usuario` (`usuario_id`);

--
-- Indices de la tabla `login_logs`
--
ALTER TABLE `login_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `login_logs_usuario_id_fkey` (`usuario_id`),
  ADD KEY `login_logs_admin_id_fkey` (`admin_id`);

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_notif_usuario` (`usuario_id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_pago_pedido` (`pedido_id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedidos_usuario_id_fkey` (`usuario_id`),
  ADD KEY `idx_pedido_direccion` (`direccion_id`);

--
-- Indices de la tabla `pedido_detalles`
--
ALTER TABLE `pedido_detalles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido_detalles_pedido_id_fkey` (`pedido_id`),
  ADD KEY `pedido_detalles_producto_id_fkey` (`producto_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productos_categoria_id_fkey` (`categoria_id`);

--
-- Indices de la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_seguimiento_pedido` (`pedido_id`);

--
-- Indices de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_sesion_usuario` (`usuario_id`);

--
-- Indices de la tabla `soporte`
--
ALTER TABLE `soporte`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_soporte_usuario` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_email_key` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `comprobantes`
--
ALTER TABLE `comprobantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comprobante_series`
--
ALTER TABLE `comprobante_series`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `login_logs`
--
ALTER TABLE `login_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `pedido_detalles`
--
ALTER TABLE `pedido_detalles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `soporte`
--
ALTER TABLE `soporte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD CONSTRAINT `fk_calificaciones_producto` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_calificaciones_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `comprobantes`
--
ALTER TABLE `comprobantes`
  ADD CONSTRAINT `comprobantes_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD CONSTRAINT `fk_direcciones_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `login_logs`
--
ALTER TABLE `login_logs`
  ADD CONSTRAINT `login_logs_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `administradores` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `login_logs_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD CONSTRAINT `fk_notificaciones_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `fk_pagos_pedido` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido_detalles`
--
ALTER TABLE `pedido_detalles`
  ADD CONSTRAINT `pedido_detalles_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_detalles_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `seguimiento`
--
ALTER TABLE `seguimiento`
  ADD CONSTRAINT `fk_seguimiento_pedido` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD CONSTRAINT `fk_sesiones_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `soporte`
--
ALTER TABLE `soporte`
  ADD CONSTRAINT `fk_soporte_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- --------------------------------------------------------
-- Catálogo de distritos de Huancayo para formularios
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `catalogo_distritos_huancayo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) NOT NULL,
  `orden_lista` int(11) NOT NULL DEFAULT 0,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_catalogo_distritos_huancayo_nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `catalogo_distritos_huancayo` (`id`, `nombre`, `orden_lista`, `activo`) VALUES
(1, 'Huancayo', 1, 1),
(2, 'El Tambo', 2, 1),
(3, 'Chilca', 3, 1),
(4, 'Carhuacallanga', 4, 1),
(5, 'Cullhuas', 5, 1),
(6, 'Chacapampa', 6, 1),
(7, 'Chicche', 7, 1),
(8, 'Chongos Alto', 8, 1),
(9, 'Chupuro', 9, 1),
(10, 'Colca', 10, 1),
(11, 'Huacrapuquio', 11, 1),
(12, 'Hualhuas', 12, 1),
(13, 'Huancán', 13, 1),
(14, 'Huasicancha', 14, 1),
(15, 'Huayucachi', 15, 1),
(16, 'Ingenio', 16, 1),
(17, 'Pariahuanca', 17, 1),
(18, 'Pilcomayo', 18, 1),
(19, 'Pucará', 19, 1),
(20, 'Quichuay', 20, 1),
(21, 'Quilcas', 21, 1),
(22, 'Santo Domingo de Acobamba', 22, 1),
(23, 'Saño', 23, 1),
(24, 'Sapallanga', 24, 1),
(25, 'Sicaya', 25, 1),
(26, 'Viques', 26, 1),
(27, 'San Agustín de Cajas', 27, 1);

INSERT IGNORE INTO `comprobante_series` (`id`, `tipo`, `serie`, `correlativo`) VALUES
(1, 'boleta', 'B001', 0),
(2, 'factura', 'F001', 0);
