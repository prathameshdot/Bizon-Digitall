# Hostinger Deployment Guide

## Database Configuration ✅

Your database is already set up correctly:
- **Database**: u566621883_BizonDigital
- **Username**: u566621883_admin  
- **Password**: Mnd456@s#
- **Host**: 127.0.0.1:3306 (when on Hostinger's server)

The `.env` file is configured to use `127.0.0.1` which works when deployed to Hostinger.

---

## Deployment Steps

### Option 1: Git Deployment (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```powershell
   git add .
   git commit -m "Production ready - Hostinger MySQL configured"
   git push origin main
   ```

2. **In Hostinger Control Panel**:
   - Go to **Websites** → Your website
   - Look for **Git** or **GitHub** deployment option
   - Connect your GitHub repository
   - Select branch: `main` or `prathamesh`
   - Hostinger will automatically deploy

3. **Set Environment Variables in Hostinger**:
   - Go to **Advanced** → **Environment Variables**
   - Add these variables:
     ```
     DATABASE_URL=mysql://u566621883_admin:Mnd456@s#@127.0.0.1:3306/u566621883_BizonDigital
     JWT_SECRET=dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7
     NEXT_PUBLIC_SITE_URL=https://bizondigital.com
     ```

4. **Build and Start**:
   - Hostinger should automatically run `npm install` and `npm run build`
   - If not, use SSH or terminal to run:
     ```bash
     npm install
     npm run build
     npm start
     ```

---

### Option 2: FTP/File Manager Upload

1. **Build your project locally**:
   ```powershell
   npm install
   npm run build
   ```

2. **Upload files via FTP or Hostinger File Manager**:
   - Upload entire project folder to `public_html` or your domain folder
   - Make sure to upload:
     - All files and folders
     - `.next` folder (after build)
     - `node_modules` (or run `npm install` on server)
     - `prisma` and `generated` folders
     - `.env` file

3. **Set up Node.js application in Hostinger**:
   - Go to **Advanced** → **Node.js**
   - Set **Entry Point**: `npm start` or `node server.js`
   - Set **Node Version**: 18 or higher
   - Click **Create**

---

### Option 3: SSH Deployment

1. **Connect via SSH** (if Hostinger provides SSH access):
   ```bash
   ssh your-username@your-domain.com
   ```

2. **Navigate to your web directory**:
   ```bash
   cd public_html
   ```

3. **Clone your repository**:
   ```bash
   git clone https://github.com/yourusername/bizondigital.git
   cd bizondigital
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Create .env file**:
   ```bash
   nano .env
   ```
   Paste:
   ```env
   DATABASE_URL="mysql://u566621883_admin:Mnd456@s#@127.0.0.1:3306/u566621883_BizonDigital"
   JWT_SECRET="dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7"
   NEXT_PUBLIC_SITE_URL="https://bizondigital.com"
   ```

6. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

7. **Build the application**:
   ```bash
   npm run build
   ```

8. **Start the application**:
   ```bash
   npm start
   ```

---

## Important: Environment Variables

Make sure these are set correctly in your Hostinger environment:

```env
DATABASE_URL="mysql://u566621883_admin:Mnd456@s#@127.0.0.1:3306/u566621883_BizonDigital"
JWT_SECRET="dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7"
NEXT_PUBLIC_SITE_URL="https://bizondigital.com"
```

**Note**: 
- Use `127.0.0.1` NOT `auth-db1836.hstgr.io` for DATABASE_URL
- Password does NOT need URL encoding when set as environment variable directly (only in connection string)

---

## Verify Database Tables Exist

Before deploying, verify in phpMyAdmin that these tables exist:
- ✅ `Blog` table with `likes` and `shares` columns
- ✅ `User` table 
- ✅ Admin user: `admin@bizondigital.com` / `123456`

---

## After Deployment

1. **Access your website**: https://bizondigital.com

2. **Test login**:
   - Go to: https://bizondigital.com/signin
   - Email: admin@bizondigital.com
   - Password: 123456

3. **Test admin panel**: https://bizondigital.com/adminBlog

4. **Test blog pages**:
   - List: https://bizondigital.com/blog
   - Details: https://bizondigital.com/blog-details/[slug]
   - Like/Share buttons should work

---

## Troubleshooting

### Database Connection Failed
- Verify `.env` uses `127.0.0.1` not `auth-db1836.hstgr.io`
- Check username: `u566621883_admin`
- Check password: `Mnd456@s#`
- Check database name: `u566621883_BizonDigital` (capital B and D)

### Build Errors
- Make sure Node.js version is 18+ on Hostinger
- Run `npm install` before `npm run build`
- Check Hostinger error logs

### 404 Errors
- Verify `.next` folder exists after build
- Check Next.js is configured for standalone deployment
- Ensure all files uploaded correctly

---

## DNS Configuration

Make sure your domain `bizondigital.com` points to your Hostinger hosting:

1. In your domain registrar (where you bought the domain)
2. Set nameservers to Hostinger's nameservers, OR
3. Set A record to your Hostinger server IP

This is usually done automatically if you bought the domain through Hostinger.

---

## Next Steps

1. Choose deployment method (Git, FTP, or SSH)
2. Deploy your application
3. Test all functionality on live site
4. Let me know if you encounter any errors!

Your database is ready, the code is ready. You just need to upload and run it on Hostinger! 🚀
