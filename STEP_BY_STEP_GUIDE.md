# 🎯 Complete Database Setup Guide - Follow Along!

## 📌 Current Status
✅ Dependencies installed
✅ Prisma client generated
⏳ Database configuration needed
⏳ Admin user creation needed

---

## Option A: Using PostgreSQL (Recommended for Production)

### Step 1: Install PostgreSQL

#### If PostgreSQL is NOT installed:

**Download and Install:**
1. Go to: https://www.postgresql.org/download/windows/
2. Download the Windows installer
3. Run installer with these settings:
   - Components: ✅ PostgreSQL Server, ✅ pgAdmin 4, ✅ Command Line Tools
   - Port: 5432 (default)
   - Superuser password: Choose a strong password (remember it!)
   - Locale: Default

#### If PostgreSQL IS installed:

Check if it's running:
```powershell
# Check service status
Get-Service -Name *postgres* | Select-Object Name, Status

# Or check if you can connect
psql -U postgres -c "SELECT version();"
```

### Step 2: Create Database

**Using pgAdmin (GUI - Easier):**
1. Open **pgAdmin 4** from Start Menu
2. Connect to your server (enter your postgres password)
3. Right-click on "Databases" → "Create" → "Database"
4. Database name: **bizondigital**
5. Click "Save"

**Using Command Line:**
```powershell
# Connect to PostgreSQL
psql -U postgres

# Create database (inside psql)
CREATE DATABASE bizondigital;

# Verify it was created
\l

# Exit psql
\q
```

### Step 3: Configure Environment Variables

Open `.env` file in bizondigital folder and update:

```env
# Replace with your actual PostgreSQL credentials
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD_HERE@localhost:5432/bizondigital?schema=public"

# Change this to a random secure string (generate one at: https://randomkeygen.com/)
JWT_SECRET="your-super-secret-random-string-change-this"

# Optional - for email features
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"

# Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

**Important:** Replace:
- `YOUR_PASSWORD_HERE` with your PostgreSQL password
- `JWT_SECRET` with a strong random string

### Step 4: Run Database Migrations

```powershell
cd "d:\New folder\bizondigital"
npm run prisma:migrate
```

When prompted:
- Enter migration name: **init**
- Press Enter

You should see:
```
✔ Generated Prisma Client
✔ Database synchronized with Prisma schema
```

### Step 5: Verify Database Tables

**Using pgAdmin:**
1. Refresh database
2. Expand: bizondigital → Schemas → public → Tables
3. You should see: **Blog** and **User** tables

**Using Command Line:**
```powershell
psql -U postgres -d bizondigital -c "\dt"
```

---

## Option B: Using Docker PostgreSQL (If you prefer Docker)

### Step 1: Install Docker Desktop

Download from: https://www.docker.com/products/docker-desktop/

### Step 2: Create Docker PostgreSQL Container

```powershell
docker run --name bizondigital-postgres `
  -e POSTGRES_PASSWORD=admin123 `
  -e POSTGRES_DB=bizondigital `
  -p 5432:5432 `
  -d postgres:15
```

### Step 3: Update .env

```env
DATABASE_URL="postgresql://postgres:admin123@localhost:5432/bizondigital?schema=public"
JWT_SECRET="your-random-secret-key"
```

### Step 4: Run Migrations

```powershell
npm run prisma:migrate
```

---

## 🔐 Create Admin User

### Step 1: Edit Admin Credentials

Open `scripts/create-admin.js` and modify:

```javascript
const email = 'admin@bizondigital.com';      // Change this
const password = 'YourSecurePassword123!';   // Change this!
const name = 'Admin User';                    // Change this
```

### Step 2: Run the Script

```powershell
node scripts/create-admin.js
```

You should see:
```
✅ Admin user created successfully!
Email: admin@bizondigital.com
Name: Admin User
Role: admin

You can now login at http://localhost:3000/signin
```

---

## 🚀 Start the Application

```powershell
npm run dev
```

Application will start at: http://localhost:3000

---

## 🎉 Access Your Blog Admin

1. **Go to Login Page:**
   http://localhost:3000/signin

2. **Enter your admin credentials:**
   - Email: admin@bizondigital.com (or what you set)
   - Password: Your password

3. **Go to Admin Panel:**
   http://localhost:3000/adminBlog

4. **Create your first blog post!** 🎊

---

## 📊 Useful Database Commands

### Prisma Commands:
```powershell
# Open database GUI
npm run prisma:studio

# Generate Prisma client (if needed)
npm run prisma:generate

# Create new migration
npm run prisma:migrate

# Reset database (⚠️ deletes all data!)
npx prisma migrate reset --schema=./prisma/schema.prisma
```

### PostgreSQL Commands (in psql):
```sql
-- List all databases
\l

-- Connect to bizondigital database
\c bizondigital

-- List all tables
\dt

-- View users
SELECT * FROM "User";

-- View blogs
SELECT id, title, slug FROM "Blog";

-- Count blogs
SELECT COUNT(*) FROM "Blog";
```

---

## 🔍 Troubleshooting

### Problem: "Can't connect to database"

**Solution 1:** Check PostgreSQL is running
```powershell
Get-Service -Name *postgres*
# If stopped, start it:
Start-Service postgresql-x64-15  # (or your service name)
```

**Solution 2:** Check DATABASE_URL in .env
- Make sure password is correct
- Make sure database name is correct
- Make sure port is 5432

**Solution 3:** Test connection manually
```powershell
psql -U postgres -d bizondigital
```

### Problem: "Prisma Client not found"

**Solution:**
```powershell
npm run prisma:generate
```

### Problem: "Migration failed"

**Solution 1:** Check if database exists
```sql
CREATE DATABASE bizondigital;
```

**Solution 2:** Reset and retry
```powershell
npx prisma migrate reset --schema=./prisma/schema.prisma
npm run prisma:migrate
```

### Problem: "Can't login to admin panel"

**Solution 1:** Check if user exists
```powershell
npm run prisma:studio
```
Look in User table

**Solution 2:** Recreate admin user
Edit `scripts/create-admin.js` and run:
```powershell
node scripts/create-admin.js
```

### Problem: "Port 3000 already in use"

**Solution:**
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

---

## ✅ Verification Checklist

Before you start using the admin panel:

- [ ] PostgreSQL is installed and running
- [ ] Database "bizondigital" is created
- [ ] `.env` file is configured with correct DATABASE_URL
- [ ] Migrations have run successfully
- [ ] Admin user is created
- [ ] Application starts without errors (npm run dev)
- [ ] Can login at /signin
- [ ] Can access /adminBlog after login

---

## 📱 Next Steps After Setup

1. **Test creating a blog post**
2. **Upload a featured image**
3. **Fill in SEO metadata**
4. **Publish your first blog**
5. **View it on your blog listing page**

---

## 💡 Pro Tips

1. **Use Prisma Studio** for easy database management:
   ```powershell
   npm run prisma:studio
   ```

2. **Backup your database** regularly:
   ```powershell
   pg_dump -U postgres bizondigital > backup.sql
   ```

3. **Use strong passwords** for production

4. **Keep .env file secure** - never commit it to git

5. **Test locally** before deploying to production

---

## 🆘 Still Having Issues?

1. Check the error message carefully
2. Look at the terminal output
3. Check browser console for errors
4. Verify all steps were completed
5. Make sure all services are running

**Common Error Messages:**

| Error | Solution |
|-------|----------|
| "Can't reach database" | Check PostgreSQL is running |
| "P2002: Unique constraint" | User already exists |
| "Invalid credentials" | Check email/password |
| "Unauthorized" | Login first at /signin |
| "EADDRINUSE" | Port already in use |

---

## 📞 Need More Help?

Check these files:
- `QUICK_START.md` - Quick setup overview
- `BLOG_SETUP_GUIDE.md` - Detailed documentation
- `SETUP_COMPLETE.md` - What was installed

---

**You're almost there! Follow the steps above and you'll be blogging in no time! 🚀**
