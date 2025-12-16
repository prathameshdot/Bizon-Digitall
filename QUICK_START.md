# 🚀 Quick Start Guide

## Prerequisites Check
- ✅ Node.js 18+ installed
- ✅ PostgreSQL installed and running
- ✅ Dependencies installed (npm install - already done!)
- ✅ Prisma client generated (already done!)

## 3-Step Setup

### Step 1: Configure Database (2 minutes)

1. **Create PostgreSQL database:**
   ```sql
   CREATE DATABASE bizondigital;
   ```

2. **Update `.env` file:**
   ```env
   DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/bizondigital?schema=public"
   JWT_SECRET="change-this-to-a-random-secure-string"
   ```

### Step 2: Initialize Database (1 minute)

Run the migration:
```bash
npm run prisma:migrate
```

When prompted, name it: **init**

### Step 3: Create Admin User (1 minute)

1. **Edit** `scripts/create-admin.js`:
   ```javascript
   const email = 'admin@bizondigital.com';
   const password = 'your-secure-password';  // Change this!
   const name = 'Admin User';
   ```

2. **Run the script:**
   ```bash
   node scripts/create-admin.js
   ```

## ✅ Start Using!

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **Login:**
   - Go to: http://localhost:3000/signin
   - Use your admin credentials

3. **Access Admin Panel:**
   - Go to: http://localhost:3000/adminBlog
   - Start creating blogs! 🎉

## 📝 Create Your First Blog

1. Fill in the title (slug auto-generates)
2. Add your content using the rich text editor
3. Upload or paste a featured image URL
4. Fill in SEO metadata
5. Click "Publish"

That's it! Your blog is now live.

## 🎨 Color Scheme

All admin interface uses:
- **Primary:** #FF7A00 (Orange)
- **Text:** Black
- **Background:** White

## Need Help?

- **Full Documentation:** See `BLOG_SETUP_GUIDE.md`
- **Setup Complete:** See `SETUP_COMPLETE.md`
- **Troubleshooting:** Check the setup guide

## Commands Reference

```bash
# Development
npm run dev                    # Start dev server

# Database
npm run prisma:generate        # Generate Prisma client
npm run prisma:migrate         # Run migrations
npm run prisma:studio          # Open database GUI

# Production
npm run build                  # Build for production
npm start                      # Start production server

# Admin User
node scripts/create-admin.js   # Create admin user
```

## Database Credentials Example

**Local Development (PostgreSQL default):**
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/bizondigital?schema=public"
```

**Common PostgreSQL Ports:**
- Default: 5432
- Alternative: 5433

## Quick Troubleshooting

**Can't connect to database?**
→ Make sure PostgreSQL is running

**Prisma Client errors?**
→ Run `npm run prisma:generate`

**Can't access /adminBlog?**
→ Login at /signin first

**Migration errors?**
→ Check DATABASE_URL in .env

## 🎉 Ready to Go!

Your blog admin system is fully set up and ready to use!
