# Build Issues on Windows - Deploy Directly to Vercel

## Why Local Build Fails

Windows permission issues with system folders prevent local builds. This is a known issue with Next.js 15 and fast-glob on Windows.

**Error:** `EPERM: operation not permitted, scandir 'C:\Users\...\Application Data'`

## Solution: Deploy Directly to Vercel

Vercel's Linux build environment doesn't have this issue.

---

## Quick Deployment Steps

### 1. Commit and Push Code

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit - ready for Vercel deployment"

# Push to GitHub
git push -u origin main
```

If you get an error about branch names:
```bash
# Rename branch to main if needed
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import `prathameshdot/Bizon-Digitall` from GitHub
4. Configure:
   - Framework: Next.js (auto-detected)
   - Build Command: `prisma generate && next build`
   - Output Directory: `.next` (auto-detected)

5. Add Environment Variables:
   ```
   DATABASE_URL = (your PlanetScale or Neon URL)
   JWT_SECRET = dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7
   NEXT_PUBLIC_SITE_URL = https://your-project.vercel.app
   ```

6. Click "Deploy"

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, then add env vars:
vercel env add DATABASE_URL production
vercel env add JWT_SECRET production
vercel env add NEXT_PUBLIC_SITE_URL production

# Deploy to production
vercel --prod
```

---

## Database Setup (PlanetScale - Free MySQL)

### 1. Create PlanetScale Account
- Go to [planetscale.com](https://planetscale.com)
- Sign up with GitHub
- Create new database: `bizondigital`

### 2. Get Connection String
- Go to your database → "Connect"
- Select "Prisma"
- Copy the connection string
- Format: `mysql://user:pass@aws.connect.psdb.cloud/bizondigital?sslaccept=strict`

### 3. Push Database Schema

```bash
# Set DATABASE_URL temporarily
$env:DATABASE_URL="mysql://your-planetscale-url"

# Push schema
npx prisma db push

# Verify tables created
npx prisma studio
```

### 4. Create Admin User

Run in PlanetScale console or Prisma Studio:

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

Password: `123456` (change after login)

---

## Complete Deployment Checklist

- [ ] PlanetScale database created
- [ ] Database schema pushed (`prisma db push`)
- [ ] Admin user created
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added to Vercel
- [ ] Deployment successful
- [ ] Can login at `/signin`
- [ ] Can access `/adminBlog`
- [ ] Can create blog posts

---

## Environment Variables for Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
DATABASE_URL=mysql://user:pass@aws.connect.psdb.cloud/bizondigital?sslaccept=strict
JWT_SECRET=dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
EMAIL_USER=your-email@gmail.com (optional)
EMAIL_PASSWORD=your-app-password (optional)
```

---

## Testing Deployment

1. Visit your Vercel URL
2. Go to `/signin`
3. Login with admin credentials
4. Access `/adminBlog`
5. Create a test blog post
6. Check if it appears on homepage

---

## Common Issues

### "Cannot connect to database"
- Check DATABASE_URL in Vercel environment variables
- Ensure PlanetScale database is not sleeping
- Verify connection string has `?sslaccept=strict`

### "Admin login fails"
- Verify admin user exists in database
- Check JWT_SECRET is set
- Clear browser cookies

### "Build fails on Vercel"
- Check build logs in Vercel dashboard
- Ensure `prisma generate` runs before build
- Verify all dependencies in package.json

---

## Next Steps After Deployment

1. **Custom Domain**: Add in Vercel → Settings → Domains
2. **Change Admin Password**: Login and update password
3. **Add More Content**: Create blog posts
4. **Monitor**: Check Vercel Analytics and Logs
5. **Update Site**: Push to GitHub, Vercel auto-deploys

**The Windows build issue won't affect Vercel deployment! 🚀**
