# Fix phpMyAdmin Connection Error

## Problem
phpMyAdmin is trying to connect to MySQL without a password, but MySQL requires password `root123`.

## Solution: Update phpMyAdmin Configuration

### Step 1: Edit phpMyAdmin Config File

1. **Open File Explorer**
2. **Navigate to**: `C:\xampp\phpMyAdmin\`
3. **Find file**: `config.inc.php`
4. **Right-click** → **Open with Notepad**

### Step 2: Update Password

Find this line (around line 20-30):
```php
$cfg['Servers'][$i]['password'] = '';
```

Change it to:
```php
$cfg['Servers'][$i]['password'] = 'root123';
```

### Step 3: Save and Reload

1. **Save** the file (Ctrl + S)
2. **Refresh** phpMyAdmin in browser: http://localhost/phpmyadmin

---

## Alternative: Quick PowerShell Fix

Run this in PowerShell:

```powershell
# Backup original config
Copy-Item "C:\xampp\phpMyAdmin\config.inc.php" "C:\xampp\phpMyAdmin\config.inc.php.backup"

# Update password
$configPath = "C:\xampp\phpMyAdmin\config.inc.php"
$content = Get-Content $configPath -Raw
$content = $content -replace "(\[\'password\'\]\s*=\s*\')(\'\;)", "`$1root123`$2"
Set-Content $configPath $content

Write-Host "✅ phpMyAdmin config updated!"
Write-Host "Refresh http://localhost/phpmyadmin"
```

---

## If PowerShell Fix Doesn't Work

### Manual Edit:

1. Open: `C:\xampp\phpMyAdmin\config.inc.php` in Notepad

2. Find this section:
```php
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['user'] = 'root';
$cfg['Servers'][$i]['password'] = '';
```

3. Change to:
```php
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['user'] = 'root';
$cfg['Servers'][$i]['password'] = 'root123';
```

4. **Save** and close

5. **Refresh** phpMyAdmin

---

## Alternative: Use MySQL Workbench Instead

If phpMyAdmin keeps having issues:

1. **Download MySQL Workbench**: https://dev.mysql.com/downloads/workbench/
2. **Connect with**:
   - Hostname: localhost
   - Port: 3306
   - Username: root
   - Password: root123

3. **Run the SQL** from SETUP_LOCAL_DATABASE.md

---

## Test Connection

After fixing the config, visit http://localhost/phpmyadmin

You should be able to:
1. See MySQL databases
2. Create `bizondigital_local` database
3. Run SQL queries

---

## Need Help?

If you're still having issues, let me know and I can:
1. Help you edit the config file
2. Show you how to reset MySQL password
3. Guide you to use MySQL Workbench instead
