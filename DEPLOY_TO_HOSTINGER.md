# Quick Deployment to Hostinger via FTP

## Your Hostinger Details
- **Website**: https://bizondigital.com
- **FTP Host**: ftp://147.93.17.217 or ftp://bizondigital.com
- **FTP Username**: u566621883.bizondigital.com
- **Upload Path**: public_html
- **Server**: India (server1836)

---

## Step-by-Step Deployment

### Step 1: Build Your Application Locally

```powershell
# Make sure everything is ready
npm install

# Build the production version
npm run build
```

### Step 2: Connect to Hostinger FTP

**Option A: Use FileZilla (Recommended)**
1. Download FileZilla: https://filezilla-project.org/
2. Open FileZilla
3. Enter:
   - **Host**: ftp://bizondigital.com or 147.93.17.217
   - **Username**: u566621883.bizondigital.com
   - **Password**: [Your Hostinger password]
   - **Port**: 21
4. Click **Quickconnect**

**Option B: Use Windows File Explorer**
1. Open File Explorer
2. Type in address bar: `ftp://bizondigital.com`
3. Enter username and password when prompted

### Step 3: Upload Files via FTP

Navigate to `public_html` folder on server, then upload:

**Essential files/folders:**
```
✅ .next/              (after build)
✅ node_modules/       (or run npm install on server)
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
✅ .env (with 127.0.0.1 database URL)
```

**DO NOT upload:**
- `.git/` folder
- `test-mysql-connection.js`
- `*.md` files (optional)

### Step 4: Set Up Node.js Application on Hostinger

1. **Log in to Hostinger control panel (hPanel)**

2. **Go to Advanced → Node.js**

3. **Create Node.js Application:**
   - Click **Create Application**
   - **Node.js version**: Select 18.x or higher
   - **Application mode**: Production
   - **Application root**: `/public_html` (or wherever you uploaded)
   - **Application URL**: https://bizondigital.com
   - **Application startup file**: Type `npm start` or select `package.json`

4. **Set Environment Variables** in Node.js section:
   ```
   DATABASE_URL=mysql://u566621883_admin:Mnd456@s#@127.0.0.1:3306/u566621883_BizonDigital
   JWT_SECRET=dad84b60f4fc3f0423ce735ffc5fcf302036baea201331bbcc5ac21ea46fb8a7
   NEXT_PUBLIC_SITE_URL=https://bizondigital.com
   NODE_ENV=production
   ```

5. **Click Create** or **Save**

### Step 5: Install Dependencies on Server

If you didn't upload `node_modules`, use SSH or Terminal in Hostinger:

```bash
cd public_html
npm install
npx prisma generate
npm run build
```

### Step 6: Start Application

```bash
npm start
```

Or Hostinger will automatically start it when you create the Node.js application.

---

## Alternative: Direct SSH Deployment (Faster)

If Hostinger provides SSH access:

```bash
# Connect to server
ssh u566621883@bizondigital.com

# Navigate to web directory
cd public_html

# Upload your code via Git (if you have it on GitHub)
git clone https://github.com/yourusername/bizondigital.git .

# Or use rsync/scp to upload from local machine

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Build application
npm run build

# Start application
npm start
```

---

## Verify Deployment

After deployment, test:

1. **Homepage**: https://bizondigital.com
2. **Login**: https://bizondigital.com/signin
   - Email: admin@bizondigital.com
   - Password: 123456
3. **Admin Panel**: https://bizondigital.com/adminBlog
4. **Blog List**: https://bizondigital.com/blog
5. **Blog Details**: Test like/share buttons

---

## Troubleshooting

### Application Not Starting
- Check Node.js version is 18+
- Verify `package.json` has correct start script
- Check Hostinger error logs

### Database Connection Error
- Verify `.env` uses `127.0.0.1` not `auth-db1836.hstgr.io`
- Check database credentials are correct
- Ensure Prisma client is generated on server

### 404 Errors
- Make sure `.next` folder uploaded correctly
- Verify `npm run build` completed successfully
- Check file permissions (755 for folders, 644 for files)

### Port Already in Use
- Hostinger manages ports automatically
- Use `npm start` not a custom port

---

## DNS Status

⚠️ **IMPORTANT**: Your nameservers are currently:
- ns1.dns-parking.com
- ns2.dns-parking.com

These are **parking nameservers**, not Hostinger's active nameservers!

**To activate your website:**

1. Go to your domain registrar (where you bought bizondigital.com)
2. Update nameservers to Hostinger's:
   - ns1.dns-parking.com → **ns1.dns-hosting.com** (or check Hostinger for correct ones)
   - ns2.dns-parking.com → **ns2.dns-hosting.com**

OR

3. In Hostinger, go to **Domains** → **DNS/Nameservers**
4. Check what the correct Hostinger nameservers should be
5. Update at your domain registrar

**Propagation time**: 24-48 hours after DNS change

---

## Quick Start Command Summary

```powershell
# On your local machine:
npm run build

# Upload via FTP to public_html/

# On Hostinger server (via SSH or Terminal):
npm install
npx prisma generate
npm start

# Visit: https://bizondigital.com
```

---

## Need Help?

If you encounter any errors during deployment, share:
1. Error message from Hostinger logs
2. Step where you got stuck
3. Screenshot if possible

Your application is ready to deploy! 🚀
