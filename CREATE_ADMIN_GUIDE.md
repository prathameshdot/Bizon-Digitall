# 🔐 Create Admin User - Complete Guide

## ✅ MySQL is Connected & Working!

Your app is now connected to Hostinger MySQL database.

---

## 📝 Method 1: Use Node.js Script (EASIEST)

Run this command in your terminal:

```bash
node scripts/create-admin.js
```

This will create:
- **Email**: admin@bizondigital.com
- **Password**: 123456
- **Role**: admin

### Custom User:
```bash
node scripts/create-admin.js your@email.com yourpassword "Your Name"
```

---

## 📝 Method 2: Direct SQL in phpMyAdmin

### Step 1: Hash the Password

Run in terminal:
```bash
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('123456', 10));"
```

Copy the output (something like `$2a$10$Abc123...`)

### Step 2: Run SQL Query

Go to phpMyAdmin → SQL tab → Run:

```sql
INSERT INTO `User` (`email`, `password`, `name`, `role`, `createdAt`, `updatedAt`) 
VALUES (
  'admin@bizondigital.com',
  '$2a$10$PASTE_YOUR_HASH_HERE',
  'Admin',
  'admin',
  NOW(3),
  NOW(3)
);
```

Replace `$2a$10$PASTE_YOUR_HASH_HERE` with your actual hashed password.

---

## 🎯 Login Credentials

Once created, login at:
- **URL**: http://localhost:3000/signin
- **Email**: admin@bizondigital.com
- **Password**: 123456

---

## ✅ Verify User Was Created

Run in phpMyAdmin:
```sql
SELECT * FROM `User` WHERE email = 'admin@bizondigital.com';
```

You should see one row with your admin user.

---

## 🔧 Troubleshooting

### "User already exists" Error
```sql
-- Delete existing user first
DELETE FROM `User` WHERE email = 'admin@bizondigital.com';

-- Then recreate
```

### "Cannot find module bcryptjs"
```bash
npm install bcryptjs
```

### "Prisma Client Error"
```bash
npx prisma generate
```

---

## 🚀 What's Working Now

✅ MySQL database connected  
✅ All tables created (Blog, User, _prisma_migrations)  
✅ Prisma client regenerated for MySQL  
✅ Server running on localhost:3000  
✅ Like/Share buttons working  
✅ Admin panel ready at /adminBlog  

**Just create your admin user and you're ready to go!** 🎉
