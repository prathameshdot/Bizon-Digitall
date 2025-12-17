# Configure phpMyAdmin to Connect to MySQL Server 9.5

## The Problem
- MySQL Server 9.5 is already running on port 3306 ✅
- XAMPP's MySQL tries to use the same port → Conflict ❌
- phpMyAdmin needs password configuration

## The Solution
Use MySQL Server 9.5 + phpMyAdmin (without XAMPP's MySQL)

---

## Step-by-Step Setup

### Step 1: Stop XAMPP MySQL (Don't Use It)

In XAMPP Control Panel:
1. **DO NOT** click Start on MySQL
2. **ONLY** start Apache

**Why?** MySQL Server 9.5 is already running on port 3306.

### Step 2: Configure phpMyAdmin Password

**Option A: Using Notepad (Recommended)**

1. Open File Explorer
2. Navigate to: `C:\xampp\phpMyAdmin\`
3. Find file: `config.inc.php`
4. Right-click → **Open with Notepad** (or Notepad++)
5. Find this section (around line 20-30):

```php
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['user'] = 'root';
$cfg['Servers'][$i]['password'] = '';
```

6. Change the password line to:

```php
$cfg['Servers'][$i]['password'] = 'root123';
```

7. **Save** the file (Ctrl + S)
8. Close Notepad

**Option B: Using PowerShell (Automatic)**

```powershell
# Backup original config
Copy-Item "C:\xampp\phpMyAdmin\config.inc.php" "C:\xampp\phpMyAdmin\config.inc.php.backup" -ErrorAction SilentlyContinue

# Read the config file
$configPath = "C:\xampp\phpMyAdmin\config.inc.php"
$content = Get-Content $configPath -Raw

# Replace empty password with root123
$content = $content -replace "(\[\'password\'\]\s*=\s*\')(\';)", '$1root123$2'

# Save the updated config
Set-Content $configPath $content -NoNewline

Write-Host "✅ phpMyAdmin configured with password: root123"
```

### Step 3: Verify Configuration

Open `C:\xampp\phpMyAdmin\config.inc.php` and verify these lines exist:

```php
$cfg['Servers'][$i]['host'] = 'localhost';
$cfg['Servers'][$i]['port'] = '3306';
$cfg['Servers'][$i]['user'] = 'root';
$cfg['Servers'][$i]['password'] = 'root123';
```

### Step 4: Start Apache Only

In XAMPP Control Panel:
1. Click **Start** next to **Apache** only
2. Wait for it to turn green
3. MySQL should remain **STOPPED** (red/not started)

### Step 5: Access phpMyAdmin

1. Open browser
2. Go to: http://localhost/phpmyadmin
3. You should automatically be logged in

**You should now see:**
- List of databases on the left
- Including `bizondigital_local`

---

## If You Still Get Password Error

### Alternative: Change phpMyAdmin to Use Login Screen

1. Open: `C:\xampp\phpMyAdmin\config.inc.php`

2. Change auth_type from `'config'` to `'cookie'`:

```php
$cfg['Servers'][$i]['auth_type'] = 'cookie';  // Changed from 'config'
$cfg['Servers'][$i]['user'] = 'root';
$cfg['Servers'][$i]['password'] = '';  // Leave empty for cookie auth
```

3. Save and refresh phpMyAdmin

4. You'll see a login screen:
   - **Username**: root
   - **Password**: root123

---

## Troubleshooting

### Error: "Cannot connect to MySQL server"

**Check MySQL Server 9.5 is running:**

```powershell
Get-Service -Name MySQL95
```

Should show: **Status: Running**

**If stopped, start it:**

```powershell
Start-Service -Name MySQL95
```

### Error: "Access denied for user 'root'"

Password in phpMyAdmin config doesn't match.

**Verify your MySQL password:**

```powershell
& "C:\Program Files\MySQL\MySQL Server 9.5\bin\mysql.exe" -u root -proot123 -e "SELECT 'Password is correct!' AS message;"
```

Should show: "Password is correct!"

---

## Quick Command to Fix phpMyAdmin

Run this in PowerShell:

```powershell
# Update phpMyAdmin config
$configPath = "C:\xampp\phpMyAdmin\config.inc.php"
if (Test-Path $configPath) {
    $content = Get-Content $configPath -Raw
    
    # Set password
    $content = $content -replace "(\['password'\]\s*=\s*')[^']*(')", '$1root123$2'
    
    # Make sure host is localhost
    $content = $content -replace "(\['host'\]\s*=\s*')[^']*(')", '$1localhost$2'
    
    Set-Content $configPath $content -NoNewline
    Write-Host "✅ phpMyAdmin configured!"
    Write-Host "Start Apache in XAMPP and visit: http://localhost/phpmyadmin"
} else {
    Write-Host "❌ XAMPP not found at C:\xampp"
}
```

---

## Summary

✅ **MySQL Server 9.5**: Running on port 3306 (keep it running)  
✅ **XAMPP Apache**: Start this (for phpMyAdmin)  
❌ **XAMPP MySQL**: Don't start this (port conflict)  
✅ **phpMyAdmin**: http://localhost/phpmyadmin (connects to MySQL Server 9.5)

---

## After Setup

Once phpMyAdmin is working:

1. **Select database**: Click `bizondigital_local` in left sidebar
2. **View tables**: You should see Blog, User, _prisma_migrations
3. **Browse data**: Click on User table to see admin user
4. **Run queries**: Use SQL tab for any SQL commands

Your local development environment is ready! 🚀
