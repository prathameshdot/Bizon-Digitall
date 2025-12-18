# 🚀 Complete Deployment Guide - Bizon Digital

## Current Status
✅ Code pushed to GitHub: `https://github.com/prathameshdot/Bizon-Digitall`  
✅ MySQL schema ready  
✅ Build configuration fixed for Vercel  
⏳ Ready to deploy!

---

## 🎯 Step-by-Step Deployment

### Step 1: Set Up PlanetScale Database (Free MySQL)

1. **Sign Up for PlanetScale**
   - Go to: https://planetscale.com
   - Sign up with GitHub
   - Verify your email

2. **Create New Database**
   - Click "Create a database"
   - Name: `bizondigital`
   - Region: `AWS us-east-1` (or closest to you)
   - Plan: `Hobby` (Free)
   - Click "Create database"

3. **Get Connection String**
   - Click on your database
   - Go to "Connect" tab
   - Select "Connect with: Prisma"
   - Copy the connection string
   - Example: `mysql://abc123:pscale_pw_xyz@aws.connect.psdb.cloud/bizondigital?sslaccept=strict`

4. **Push Database Schema**
   
   Open PowerShell and run:
   ```powershell
   # Set the DATABASE_URL temporarily
   $env:DATABASE_URL="mysql://your-connection-string-here"
   
   # Push schema to PlanetScale
   npx prisma db push
   
   # You should see: "Your database is now in sync with your schema"
   ```

5. **Create Admin User**
   
   Option A - Using Prisma Studio:
   ```powershell
   # Open Prisma Studio connected to PlanetScale
   $env:DATABASE_URL="mysql://your-connection-string-here"
   npx prisma studio
   ```
   - Navigate to `User` model
   - Click "Add record"
   - Fill in:
     - email: `admin@bizondigital.com`
     - password: `$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy`
     - name: `Admin`
     - role: `admin`
   - Click "Save 1 change"
   
   Option B - Using PlanetScale Console:
   - Go to your database → "Console"
   - Run this SQL:
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

**Admin Credentials:**
- Email: `admin@bizondigital.com`
- Password: `123456` (change after first login!)

---

### Step 2: Deploy to Vercel

#### Method A: Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find `prathameshdot/Bizon-Digitall`
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as is)
   - Build Command: Leave empty (uses package.json)
   - Output Directory: Leave empty (uses .next)

4. **Add Environment Variables**
   
   Click "Environment Variables" and add:

   ```plaintext
   DATABASE_URL
   mysql://your-planetscale-connection-string

   JWT_SECRET
   dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7

   NEXT_PUBLIC_SITE_URL
   https://your-project-name.vercel.app
   ```

   **Important:** For `NEXT_PUBLIC_SITE_URL`, use your actual Vercel domain (you'll see it after first deployment, then you can update it)

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll see "Congratulations! Your project has been successfully deployed."

6. **Get Your URL**
   - Copy your deployment URL: `https://your-project.vercel.app`
   - Update the `NEXT_PUBLIC_SITE_URL` environment variable:
     - Go to Settings → Environment Variables
     - Edit `NEXT_PUBLIC_SITE_URL`
     - Paste your actual URL
     - Redeploy (Deployments → ⋯ → Redeploy)

#### Method B: Vercel CLI

```powershell
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (will prompt for configuration)
vercel

# Add environment variables
vercel env add DATABASE_URL production
# Paste: mysql://your-planetscale-connection-string

vercel env add JWT_SECRET production
# Paste: dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7

vercel env add NEXT_PUBLIC_SITE_URL production
# Paste: https://your-project.vercel.app

# Deploy to production
vercel --prod
```

---

### Step 3: Test Your Deployment

1. **Visit Your Site**
   ```
   https://your-project.vercel.app
   ```

2. **Test Admin Login**
   - Go to: `https://your-project.vercel.app/signin`
   - Email: `admin@bizondigital.com`
   - Password: `123456`
   - Should redirect to homepage with "Admin" menu

3. **Access Admin Panel**
   - Click "Admin" in navigation
   - Or go to: `https://your-project.vercel.app/adminBlog`
   - You should see the blog management interface

4. **Create Test Blog Post**
   - Click "Create New Post" or similar
   - Fill in:
     - Title: "Welcome to Bizon Digital"
     - Content: Test content
     - Featured Image: Paste an image URL
   - Click "Publish"
   - Go to `/blog` to see your post

---

## 📋 Deployment Checklist

- [ ] PlanetScale account created
- [ ] Database `bizondigital` created
- [ ] Connection string obtained
- [ ] Schema pushed to PlanetScale (`npx prisma db push`)
- [ ] Admin user created
- [ ] Vercel account created
- [ ] GitHub repo `prathameshdot/Bizon-Digitall` imported
- [ ] Environment variables added in Vercel
- [ ] First deployment successful
- [ ] Site is accessible
- [ ] Admin login works
- [ ] Admin panel accessible
- [ ] Test blog post created successfully

---

## 🎨 Post-Deployment Tasks

### 1. Change Admin Password
```
1. Login at /signin
2. Go to user settings (if available)
3. Change password from 123456 to something secure
```

### 2. Add Custom Domain (Optional)
```
1. Vercel Dashboard → Your Project
2. Settings → Domains
3. Add your domain (e.g., bizondigital.com)
4. Follow DNS configuration instructions
5. Update NEXT_PUBLIC_SITE_URL to your custom domain
```

### 3. Configure Email (Optional)
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```
Get app password: https://myaccount.google.com/apppasswords

---

## 🔄 Future Updates

### To Update Your Site:

1. **Make changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. **Vercel automatically deploys!** (takes ~2 minutes)

### To Update Database Schema:

1. **Modify `prisma/schema.prisma`**
2. **Push to production:**
   ```powershell
   $env:DATABASE_URL="mysql://your-planetscale-url"
   npx prisma db push
   ```
3. **Redeploy on Vercel** (or wait for auto-deploy)

---

## 🐛 Troubleshooting

### "Cannot connect to database"
- **Check:** DATABASE_URL in Vercel environment variables
- **Verify:** PlanetScale database is running (not sleeping)
- **Ensure:** Connection string ends with `?sslaccept=strict`

### "Admin login fails"
- **Check:** JWT_SECRET is set in Vercel
- **Verify:** Admin user exists in PlanetScale
- **Try:** Clear browser cookies and cache

### "Build fails on Vercel"
- **Check:** Build logs in Vercel dashboard
- **Ensure:** `@prisma/client` is in dependencies
- **Verify:** `postinstall` script in package.json

### "Page not found" errors
- **Check:** All pages are in correct directories
- **Verify:** No hardcoded localhost URLs
- **Ensure:** `NEXT_PUBLIC_SITE_URL` is set correctly

---

## 📊 Monitor Your Site

### Vercel Dashboard
- **Analytics:** See visitor stats
- **Logs:** Real-time application logs  
- **Deployments:** History of all deployments
- **Speed Insights:** Performance metrics

### PlanetScale Dashboard
- **Insights:** Database queries and performance
- **Branches:** Manage database branches
- **Backups:** Automated backups (Pro plan)

---

## 🎉 You're All Set!

Your Bizon Digital blog is now:
- ✅ Deployed on Vercel (global CDN)
- ✅ Using PlanetScale MySQL (free, scalable)
- ✅ Auto-deploying on git push
- ✅ SSL/HTTPS enabled
- ✅ Production-ready!

**Live at:** `https://your-project.vercel.app`

**Enjoy your new blog platform! 🚀**

---

## 📚 Useful Links

- **Your GitHub Repo:** https://github.com/prathameshdot/Bizon-Digitall
- **Vercel Dashboard:** https://vercel.com/dashboard
- **PlanetScale Dashboard:** https://app.planetscale.com
- **Vercel Docs:** https://vercel.com/docs
- **PlanetScale Docs:** https://planetscale.com/docs
- **Prisma Docs:** https://www.prisma.io/docs
- **Next.js Docs:** https://nextjs.org/docs

---

## 💡 Pro Tips

1. **Enable Preview Deployments:** Every branch push gets its own preview URL
2. **Use PlanetScale Branches:** Test schema changes safely
3. **Monitor Vercel Analytics:** Understand your traffic
4. **Set up GitHub Actions:** Automate testing before deployment
5. **Use Environment Variables:** Never commit secrets to git

**Need help? Check the docs or open an issue on GitHub!**
