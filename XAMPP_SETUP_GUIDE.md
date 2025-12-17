# XAMPP Setup Guide - Fix Port 3306 Conflict

## Problem
MySQL Server 9.5 is using port 3306, blocking XAMPP's MySQL from starting.

## Solution: Disable MySQL Server 9.5

### Step 1: Stop MySQL Server 9.5 (Run as Administrator)

1. **Open PowerShell as Administrator**:
   - Press `Win + X`
   - Click **"Windows PowerShell (Admin)"** or **"Terminal (Admin)"**

2. **Run these commands**:
   ```powershell
   # Stop MySQL Server 9.5
   Stop-Service -Name MySQL95 -Force
   
   # Disable it from starting automatically
   Set-Service -Name MySQL95 -StartupType Disabled
   
   # Verify it's stopped
   Get-Service -Name MySQL95
   ```

### Step 2: Start XAMPP MySQL

1. **Open XAMPP Control Panel** (already open)
2. Click **Start** next to **MySQL**
3. MySQL should start successfully now

---

## Alternative: Use MySQL Server 9.5 Instead of XAMPP

If you prefer to use MySQL Server 9.5 that you just installed:

### Option A: Use MySQL Server 9.5 + phpMyAdmin

1. **Keep MySQL Server 9.5 running** (port 3306)
2. **Only start Apache** in XAMPP (for phpMyAdmin)
3. **Access phpMyAdmin** at: http://localhost/phpmyadmin
4. phpMyAdmin will connect to MySQL Server 9.5

### Option B: Change XAMPP MySQL Port

1. Stop both MySQL services
2. Edit XAMPP MySQL config to use different port (e.g., 3307)
3. Start XAMPP MySQL on port 3307

---

## Recommended: Use MySQL Server 9.5

Since you already installed MySQL Server 9.5, let's use it:

### Step 1: Keep MySQL Server 9.5 Running

It's already running on port 3306 - that's fine!

### Step 2: Start Only Apache in XAMPP

1. In XAMPP Control Panel
2. Click **Start** next to **Apache** only
3. **Don't start MySQL** (we'll use MySQL Server 9.5 instead)

### Step 3: Access phpMyAdmin

1. Open browser: http://localhost/phpmyadmin
2. It will connect to MySQL Server 9.5 automatically
3. Login with:
   - **Username**: root
   - **Password**: (leave empty - you set no password during installation)

### Step 4: Create Database in phpMyAdmin

1. Click **New** in left sidebar
2. Database name: `bizondigital_local`
3. Click **Create**

4. Click on `bizondigital_local` database
5. Click **SQL** tab
6. Paste and run this SQL:

```sql
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

-- Insert admin user (password: 123456)
INSERT INTO `User` (`email`, `password`, `name`, `role`, `createdAt`, `updatedAt`) 
VALUES (
  'admin@bizondigital.com',
  '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
  'Admin',
  'admin',
  NOW(3),
  NOW(3)
);
```

7. Click **Go**

---

## Update Your .env.local File

Create a new file `.env.local` in your project:

```env
# Local MySQL Database (MySQL Server 9.5)
DATABASE_URL="mysql://root@localhost:3306/bizondigital_local"

# JWT Secret
JWT_SECRET="dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7"

# Next.js
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

**Note**: No password needed if you installed MySQL with empty root password.

---

## Test Local Connection

```powershell
# Create a test script
$testScript = @'
const mysql = require('mysql2/promise');
async function test() {
  try {
    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'bizondigital_local'
    });
    console.log('✅ Connected to local MySQL!');
    const [tables] = await conn.query('SHOW TABLES');
    console.log('Tables:', tables);
    await conn.end();
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}
test();
'@
Set-Content -Path "test-local-db.js" -Value $testScript

# Run test
node test-local-db.js
```

---

## Start Your Application

```powershell
# Regenerate Prisma client for local DB
npx prisma generate

# Start development server
npm run dev
```

Visit: http://localhost:3000

---

## Summary

**Two databases:**
1. **Local (development)**: MySQL Server 9.5 on localhost:3306
   - Database: `bizondigital_local`
   - Use `.env.local` file
   
2. **Production (Hostinger)**: MySQL on 127.0.0.1:3306
   - Database: `u566621883_BizonDigital`
   - Use `.env` file

Next.js automatically uses `.env.local` for development and `.env` for production!

---

## Quick Setup Commands

```powershell
# 1. Start Apache in XAMPP (MySQL Server 9.5 is already running)
# 2. Go to http://localhost/phpmyadmin
# 3. Create database and run SQL above
# 4. Create .env.local file with local database URL
# 5. Test and start:

npx prisma generate
npm run dev
```

Your local development environment will be ready! 🚀
