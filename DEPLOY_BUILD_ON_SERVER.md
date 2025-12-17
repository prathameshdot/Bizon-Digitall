# Deploy Without Local Build (Build on Hostinger)

## The Problem
Windows permission issues prevent local build from completing.

## Solution: Build on Hostinger Server

Instead of building locally, upload source code and build on Hostinger.

---

## Step-by-Step

### 1. Prepare Files for Upload

**Upload these folders/files via FTP:**
```
✅ prisma/
✅ generated/
✅ public/
✅ src/
✅ lib/
✅ scripts/
✅ package.json
✅ package-lock.json
✅ next.config.js
✅ tsconfig.json
✅ postcss.config.js
✅ tailwind.config.js
✅ jsconfig.json
✅ .env
```

**DO NOT upload:**
```
❌ .next/
❌ node_modules/
❌ .git/
❌ test-mysql-connection.js
❌ *.md files
```

### 2. Upload via FTP

**Using FileZilla:**
1. Host: `ftp://bizondigital.com` or `147.93.17.217`
2. Username: `u566621883.bizondigital.com`
3. Password: [Your Hostinger password]
4. Port: 21
5. Upload to: `public_html/`

### 3. Access Hostinger Terminal/SSH

**Option A: hPanel Terminal**
1. Log in to Hostinger control panel
2. Go to **Advanced** → **SSH Access** or **Terminal**
3. Click **Open Terminal**

**Option B: SSH Client**
```bash
ssh u566621883@bizondigital.com
# or
ssh u566621883@147.93.17.217
```

### 4. Build on Server

```bash
# Navigate to your website directory
cd public_html

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Build the application
npm run build

# Start the application
npm start
```

### 5. Configure Node.js Application

In Hostinger hPanel:

1. Go to **Advanced** → **Node.js**
2. Click **Create Application**
3. Fill in:
   - **Application root**: `/home/u566621883/public_html`
   - **Application URL**: https://bizondigital.com
   - **Application startup file**: `npm start`
   - **Node.js version**: 18.x or higher

4. **Add Environment Variables:**
   ```
   DATABASE_URL=mysql://u566621883_admin:Mnd456@s#@127.0.0.1:3306/u566621883_BizonDigital
   JWT_SECRET=dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7
   NEXT_PUBLIC_SITE_URL=https://bizondigital.com
   NODE_ENV=production
   ```

5. Click **Create** or **Run npm install**

### 6. Test Your Website

Visit: https://bizondigital.com

Test:
- Homepage loads
- Login at /signin
- Admin panel at /adminBlog
- Blog pages at /blog

---

## Alternative: Use Git Deployment

If you have Git set up:

```bash
# On Hostinger terminal
cd public_html

# Clone your repository
git clone https://github.com/yourusername/bizondigital.git .

# Install and build
npm install
npx prisma generate
npm run build
npm start
```

---

## Troubleshooting on Hostinger

### Build Fails on Server
```bash
# Clear cache and try again
rm -rf .next node_modules
npm install
npm run build
```

### Prisma Issues
```bash
# Regenerate Prisma client
npx prisma generate

# If still fails, check database connection
node -e "const prisma = require('./lib/prisma'); console.log('Prisma OK');"
```

### Port Issues
Hostinger automatically assigns ports. Use `npm start` which uses the port from `package.json`.

---

## Your package.json Scripts

Make sure your `package.json` has:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

The `start` script will run the production server.

---

## Summary

1. ✅ Upload source code via FTP (NO `.next/` or `node_modules/`)
2. ✅ SSH into Hostinger
3. ✅ Run: `npm install && npx prisma generate && npm run build`
4. ✅ Configure Node.js app in hPanel
5. ✅ Visit https://bizondigital.com

**The build will work perfectly on Hostinger's Linux server!** 🚀
