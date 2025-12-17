-- ========================================
-- SQL Tables for Hostinger MySQL Database
-- Run these queries in phpMyAdmin
-- ========================================

-- 1. Create Blog Table
CREATE TABLE `Blog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `subtitle` VARCHAR(500),
  `category` VARCHAR(100),
  `comment` VARCHAR(500),
  `views` INT NOT NULL DEFAULT 0,
  `likes` INT NOT NULL DEFAULT 0,
  `shares` INT NOT NULL DEFAULT 0,
  `tags` TEXT,
  `images` TEXT,
  `highlightPoints` TEXT,
  `notes` TEXT,
  `content` LONGTEXT,
  `authorName` VARCHAR(255),
  `authorImage` TEXT,
  `authorDesignation` VARCHAR(255),
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  `articleSchemaJson` LONGTEXT,
  `blogContent` LONGTEXT,
  `featuredImage` TEXT,
  `keywords` TEXT,
  `metaDescription` TEXT,
  `metaTitle` VARCHAR(255),
  `ogDescription` TEXT,
  `ogImage` TEXT,
  `ogTitle` VARCHAR(255),
  `ogType` VARCHAR(50) DEFAULT 'article',
  `ogUrl` TEXT,
  `organizationSchemaJson` LONGTEXT,
  `slug` VARCHAR(255) UNIQUE,
  PRIMARY KEY (`id`),
  INDEX `idx_slug` (`slug`),
  INDEX `idx_category` (`category`),
  INDEX `idx_createdAt` (`createdAt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Create User Table
CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255),
  `role` VARCHAR(50) DEFAULT 'user',
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Create _prisma_migrations table (Prisma migration tracking)
CREATE TABLE `_prisma_migrations` (
  `id` VARCHAR(36) NOT NULL,
  `checksum` VARCHAR(64) NOT NULL,
  `finished_at` DATETIME(3),
  `migration_name` VARCHAR(255) NOT NULL,
  `logs` TEXT,
  `rolled_back_at` DATETIME(3),
  `started_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- VERIFICATION QUERIES
-- ========================================

-- Check if tables were created
SHOW TABLES;

-- Check Blog table structure
DESCRIBE Blog;

-- Check User table structure
DESCRIBE User;
