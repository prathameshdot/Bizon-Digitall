# 🎯 Quick Command Reference

## 🚀 Interactive Setup (Easiest!)

Run the setup wizard that will guide you through everything:

```powershell
cd "d:\New folder\bizondigital"
node scripts/setup-wizard.js
```

This will:
- ✅ Configure your database connection
- ✅ Generate JWT secret
- ✅ Create database (or guide you)
- ✅ Run migrations
- ✅ Create admin user
- ✅ All in one go!

---

## 📋 Manual Setup (Step by Step)

### 1. Check if PostgreSQL is installed

```powershell
# Check version
psql --version

# Check if service is running
Get-Service -Name *postgres*
```

### 2. Create Database

**Option A: Using pgAdmin** (Easier)
- Open pgAdmin 4
- Right-click "Databases" → Create → Database
- Name: `bizondigital`

**Option B: Using Command Line**
```powershell
# Connect to PostgreSQL
psql -U postgres

# Inside psql:
CREATE DATABASE bizondigital;
\q
```

### 3. Configure .env File

Edit `.env` and update these lines:
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/bizondigital?schema=public"
JWT_SECRET="generate-a-random-string-here"
```

### 4. Run Migrations

```powershell
npm run prisma:migrate
```
Enter migration name: **init**

### 5. Create Admin User

**Edit the script first:**
```powershell
notepad scripts\create-admin.js
```

Change these lines:
```javascript
const email = 'admin@bizondigital.com';
const password = 'YourSecurePassword';
const name = 'Admin User';
```

**Then run:**
```powershell
node scripts/create-admin.js
```

### 6. Start Server

```powershell
npm run dev
```

Go to: http://localhost:3000/signin

---

## 🛠️ Useful Commands

### Database Management

```powershell
# Open Prisma Studio (Database GUI)
npm run prisma:studio

# Generate Prisma Client
npm run prisma:generate

# Create migration
npm run prisma:migrate

# Reset database (⚠️ deletes all data!)
npx prisma migrate reset --schema=./prisma/schema.prisma

# View database in pgAdmin
# Open pgAdmin → Connect to server → bizondigital database
```

### PostgreSQL Commands

```powershell
# Connect to database
psql -U postgres -d bizondigital

# Inside psql:
\dt                    # List tables
\d "Blog"              # Describe Blog table
\d "User"              # Describe User table
SELECT * FROM "User";  # View all users
\q                     # Quit
```

### Application Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Admin User Management

```powershell
# Create admin user
node scripts/create-admin.js

# View users in Prisma Studio
npm run prisma:studio
# Navigate to "User" table

# View users via psql
psql -U postgres -d bizondigital -c "SELECT email, name, role FROM \"User\";"
```

---

## 🔍 Quick Checks

### Check if database exists:
```powershell
psql -U postgres -c "\l" | Select-String bizondigital
```

### Check if tables exist:
```powershell
psql -U postgres -d bizondigital -c "\dt"
```

### Check if admin user exists:
```powershell
psql -U postgres -d bizondigital -c "SELECT email, role FROM \"User\";"
```

### Check if server is running:
```powershell
# Check port 3000
netstat -ano | findstr :3000
```

---

## 🆘 Troubleshooting Commands

### PostgreSQL not running?
```powershell
# Find service name
Get-Service -Name *postgres*

# Start service
Start-Service postgresql-x64-15  # (use actual service name)
```

### Can't connect to database?
```powershell
# Test connection
psql -U postgres -c "SELECT version();"

# If fails, check if PostgreSQL is installed:
where psql
# If not found, install PostgreSQL
```

### Port 3000 already in use?
```powershell
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

### Migration errors?
```powershell
# Reset and retry
npx prisma migrate reset --schema=./prisma/schema.prisma
npm run prisma:migrate
```

### Prisma Client errors?
```powershell
# Regenerate client
npm run prisma:generate

# If still fails, reinstall
npm install @prisma/client
npm run prisma:generate
```

---

## 📊 Database Backup & Restore

### Backup Database
```powershell
# Backup to file
pg_dump -U postgres bizondigital > backup_$(Get-Date -Format 'yyyy-MM-dd').sql

# Or specify path
pg_dump -U postgres bizondigital > "D:\backups\bizondigital_backup.sql"
```

### Restore Database
```powershell
# Restore from backup
psql -U postgres -d bizondigital < backup.sql
```

---

## 🎨 Access Points

| URL | Purpose |
|-----|---------|
| http://localhost:3000 | Home page |
| http://localhost:3000/signin | Admin login |
| http://localhost:3000/adminBlog | Blog admin panel |
| http://localhost:3000/blog | Blog listing |
| http://localhost:5555 | Prisma Studio (when running) |

---

## 🔐 Default Credentials

After running `create-admin.js` with defaults:
- **Email:** admin@bizondigital.com
- **Password:** (what you set in the script)
- **Role:** admin

**⚠️ Important:** Change these in production!

---

## 📝 Quick Workflow

### To start working:
```powershell
cd "d:\New folder\bizondigital"
npm run dev
```

### To create a blog:
1. Login: http://localhost:3000/signin
2. Go to: http://localhost:3000/adminBlog
3. Fill in blog details
4. Click "Publish"

### To view blogs:
1. API: http://localhost:3000/api/blogs
2. Admin panel: http://localhost:3000/adminBlog
3. Database: `npm run prisma:studio`

---

## 💡 Pro Tips

**Tip 1:** Use Prisma Studio for easy database management
```powershell
npm run prisma:studio
```

**Tip 2:** Keep your .env secure
```powershell
# Already in .gitignore, but double-check:
cat .gitignore | Select-String ".env"
```

**Tip 3:** Generate strong JWT secret
```powershell
# PowerShell command to generate random string:
-join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | % {[char]$_})
```

**Tip 4:** Check logs for errors
- Browser: F12 → Console tab
- Server: Terminal where `npm run dev` is running

**Tip 5:** Use pgAdmin for visual database management
- Easier than command line
- View data, run queries, export data

---

## 📞 Need Help?

1. **Run interactive setup:** `node scripts/setup-wizard.js`
2. **Check detailed guide:** `STEP_BY_STEP_GUIDE.md`
3. **Check setup docs:** `BLOG_SETUP_GUIDE.md`
4. **Quick reference:** `QUICK_START.md`

---

**Ready to go? Start here:**
```powershell
node scripts/setup-wizard.js
```

Or follow the manual steps above! 🚀
