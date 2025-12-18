# Vercel Deployment Guide

## Step 1: Set Up Database on Vercel

### Option A: Use PlanetScale (MySQL - Recommended)

1. **Sign up for PlanetScale**: https://planetscale.com
2. **Create a new database**:
   - Name: `bizondigital`
   - Region: Choose closest to your users
3. **Get connection string**:
   - Go to database → Settings → Passwords
   - Create a new password
   - Copy the connection string (format: `mysql://username:password@host/database?sslaccept=strict`)

### Option B: Use Neon (PostgreSQL - Alternative)

1. **Sign up for Neon**: https://neon.tech
2. **Create a new project**:
   - Name: `bizondigital`
   - Region: Choose closest to your users
3. **Get connection string**:
   - Copy the Prisma connection string
   - Format: `postgresql://username:password@host/database?sslmode=require`

**Note:** If using Neon, update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

---

## Step 2: Initialize Database Schema

### For PlanetScale (MySQL):

```bash
# Generate Prisma client
npx prisma generate

# Push schema to PlanetScale
# First, update DATABASE_URL in .env to PlanetScale URL
DATABASE_URL="mysql://your-planetscale-url" npx prisma db push
```

### For Neon (PostgreSQL):

```bash
# Generate Prisma client
npx prisma generate

# Push schema to Neon
DATABASE_URL="postgresql://your-neon-url" npx prisma db push
```

---

## Step 3: Create Admin User on Production Database

Update and run the admin creation script:

```bash
# Set production DATABASE_URL temporarily
$env:DATABASE_URL="your-production-database-url"

# Run admin creation script
node scripts/create-admin.js

# Or use SQL directly in PlanetScale/Neon console:
```

**SQL for Admin User:**
```sql
INSERT INTO User (email, password, name, role, createdAt, updatedAt) 
VALUES (
  'admin@bizondigital.com',
  '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
  'Admin',
  'admin',
  NOW(),
  NOW()
);
```
*Password: `123456` (change after first login)*

---

## Step 4: Deploy to Vercel

### A. Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Set Environment Variables:**
   ```bash
   vercel env add DATABASE_URL production
   vercel env add JWT_SECRET production
   vercel env add NEXT_PUBLIC_SITE_URL production
   ```
   
   Paste values when prompted.

5. **Redeploy:**
   ```bash
   vercel --prod
   ```

### B. Using Vercel Dashboard (Alternative)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard

2. **Import GitHub Repository:**
   - Click "Add New" → "Project"
   - Import `https://github.com/prathameshdot/Bizon-Digitall.git`
   - Connect your GitHub account if needed

3. **Configure Project:**
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Add Environment Variables:**
   Go to Settings → Environment Variables, add:
   
   ```env
   DATABASE_URL=mysql://your-planetscale-url (or postgresql for Neon)
   JWT_SECRET=dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete

---

## Step 5: Verify Deployment

1. **Visit your Vercel URL**: `https://your-project.vercel.app`

2. **Test Login:**
   - Go to `/signin`
   - Login with admin credentials

3. **Test Admin Panel:**
   - Go to `/adminBlog`
   - Try creating a blog post

4. **Check Database:**
   - Verify blog posts are saved in PlanetScale/Neon

---

## Step 6: Configure Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variable:**
   ```bash
   NEXT_PUBLIC_SITE_URL=https://bizondigital.com
   ```

---

## Common Issues & Solutions

### Build Errors

**Issue: "Cannot find module '@prisma/client'"**
```bash
# Solution: Ensure postinstall script runs
npm run postinstall
```

**Issue: "Environment variable not found"**
- Make sure all env vars are added in Vercel Dashboard
- Check variable names match exactly

### Database Connection Issues

**Issue: "Can't reach database server"**
- Verify DATABASE_URL is correct
- Check if database is sleeping (PlanetScale free tier)
- Ensure SSL/TLS settings are correct

**Issue: "Table doesn't exist"**
```bash
# Push schema again
npx prisma db push
```

### Authentication Issues

**Issue: "Admin login not working"**
- Verify admin user exists in production database
- Check JWT_SECRET is set correctly
- Clear browser cookies and try again

---

## Local Development vs Production

### Local (XAMPP MySQL):
```env
DATABASE_URL="mysql://root:root123@localhost:3307/bizondigital_local"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### Production (Vercel + PlanetScale):
```env
DATABASE_URL="mysql://user:pass@aws.connect.psdb.cloud/bizondigital?sslaccept=strict"
NEXT_PUBLIC_SITE_URL="https://bizondigital.vercel.app"
```

---

## Quick Command Reference

```bash
# Build locally
npm run build

# Deploy to Vercel
vercel --prod

# Push schema to production DB
DATABASE_URL="prod-url" npx prisma db push

# Open Prisma Studio for production
DATABASE_URL="prod-url" npx prisma studio

# View deployment logs
vercel logs

# Check environment variables
vercel env ls
```

---

## Next Steps

1. ✅ Database set up (PlanetScale or Neon)
2. ✅ Schema pushed to production
3. ✅ Admin user created
4. ✅ Deployed to Vercel
5. ✅ Environment variables configured
6. ✅ Site is live!

**Your blog is now deployed and ready to use! 🚀**

For support, check:
- Vercel Docs: https://vercel.com/docs
- PlanetScale Docs: https://planetscale.com/docs
- Prisma Docs: https://www.prisma.io/docs
