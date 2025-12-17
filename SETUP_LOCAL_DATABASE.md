# Local Database Setup Guide

## Problem
Hostinger MySQL database (`auth-db1836.hstgr.io`) blocks remote connections from your local machine. You can only access it through phpMyAdmin on Hostinger's server.

## Solution
Use a local MySQL database for development, and Hostinger's database for production.

---

## Option 1: Install MySQL Locally (Recommended)

### Step 1: Install MySQL

**Download MySQL:**
- Go to: https://dev.mysql.com/downloads/mysql/
- Download **MySQL Community Server** for Windows
- Or download **XAMPP** (includes MySQL + phpMyAdmin): https://www.apachefriends.org/

### Step 2: Install and Configure

**If using MySQL directly:**
1. Run the installer
2. Set root password (e.g., `root123`)
3. MySQL will run on `localhost:3306`

**If using XAMPP:**
1. Install XAMPP
2. Start **Apache** and **MySQL** from XAMPP Control Panel
3. Access phpMyAdmin at `http://localhost/phpmyadmin`
4. Default username: `root`, password: (empty or `root`)

### Step 3: Create Local Database

**In local phpMyAdmin or MySQL command line:**

```sql
-- Create database
CREATE DATABASE bizondigital_local;

-- Use the database
USE bizondigital_local;

-- Create Blog table
CREATE TABLE `Blog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `content` TEXT NOT NULL,
  `excerpt` TEXT,
  `image` VARCHAR(255),
  `tags` VARCHAR(255),
  `category` VARCHAR(100),
  `likes` INT DEFAULT 0,
  `shares` INT DEFAULT 0,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create User table
CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(191) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255),
  `role` VARCHAR(50) DEFAULT 'user',
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create _prisma_migrations table
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
```

### Step 4: Create Admin User

```sql
-- Insert admin user
-- Password: 123456 (hashed with bcrypt)
INSERT INTO `User` (`email`, `password`, `name`, `role`, `createdAt`, `updatedAt`) 
VALUES (
  'admin@bizondigital.com',
  '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
  'Admin',
  'admin',
  NOW(3),
  NOW(3)
);

-- Verify
SELECT * FROM `User`;
```

### Step 5: Update .env for Local Development

Create `.env.local` file (this overrides `.env` for local development):

```env
# Local MySQL Database
DATABASE_URL="mysql://root:root123@localhost:3306/bizondigital_local"

# JWT Secret (same as production)
JWT_SECRET="dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7"

# Next.js
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

**Note:** Replace `root123` with your actual MySQL root password.

### Step 6: Generate Prisma Client and Start Server

```powershell
# Regenerate Prisma client with local database
npx prisma generate

# Clear Next.js cache
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue

# Start development server
npm run dev
```

---

## Option 2: Use PostgreSQL Locally (Alternative)

If you prefer PostgreSQL:

### Install PostgreSQL
1. Download: https://www.postgresql.org/download/windows/
2. Install with password `postgres123`
3. Default port: `5432`

### Update .env.local
```env
DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/bizondigital_local?schema=public"
```

### Update schema.prisma
Change provider back to `postgresql`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### Run migrations
```powershell
npx prisma db push
npx prisma generate
```

---

## Option 3: Deploy to Hostinger (Production Only)

If you don't want to set up a local database, you can:

1. **Deploy your code to Hostinger** via:
   - Git (if Hostinger supports it)
   - FTP/SFTP upload
   - Hostinger's file manager

2. **Set environment variables on Hostinger:**
   ```env
   DATABASE_URL="mysql://u566621883_admin:Mnd456@s#@127.0.0.1:3306/u566621883_BizonDigital"
   ```
   
   **Note:** Use `127.0.0.1` instead of `auth-db1836.hstgr.io` when running on Hostinger's server.

3. **The application will work on Hostinger** because it's connecting to `localhost` (same server).

---

## Recommended: .env Files Structure

**For local + production setup:**

### `.env` (Production - committed to Git)
```env
# Hostinger MySQL (used in production)
DATABASE_URL="mysql://u566621883_admin:Mnd456%40s%23@127.0.0.1:3306/u566621883_BizonDigital"
JWT_SECRET="dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7"
NEXT_PUBLIC_SITE_URL="https://bizondigital.com"
```

### `.env.local` (Local development - NOT committed)
```env
# Local MySQL (used in development)
DATABASE_URL="mysql://root:root123@localhost:3306/bizondigital_local"
JWT_SECRET="dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

**Next.js automatically prioritizes `.env.local` over `.env` in development.**

---

## Which Option Should You Choose?

1. **Option 1 (MySQL locally)** - Best for full development workflow ✅
2. **Option 2 (PostgreSQL locally)** - If you prefer PostgreSQL
3. **Option 3 (Deploy to Hostinger)** - If you only need production testing

**I recommend Option 1 (local MySQL with XAMPP).** It's the easiest to set up and matches your production environment.

---

## Next Steps

Tell me which option you want to proceed with:
- **Option 1**: I'll guide you through XAMPP installation
- **Option 2**: I'll help you set up PostgreSQL
- **Option 3**: I'll help you deploy to Hostinger

Or if you already have MySQL/XAMPP installed, tell me and I'll update your configuration.
