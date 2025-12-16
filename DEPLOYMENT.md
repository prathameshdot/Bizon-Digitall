# Deployment Guide

## Prerequisites
- PostgreSQL database hosted on a cloud service
- Deployment platform (Vercel, Netlify, etc.)

## Step 1: Database Setup

### Option A: Supabase (Recommended - Free Tier)
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for database provisioning (2-3 minutes)
4. Go to **Settings** → **Database**
5. Copy the **Connection string** (URI format)
6. Replace `[YOUR-PASSWORD]` with your database password

### Option B: Neon (Serverless PostgreSQL)
1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string provided

### Option C: Railway
1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Add PostgreSQL service
4. Copy the connection string from variables

## Step 2: Environment Variables

Your production environment needs these variables:

```env
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
NODE_ENV="production"
```

### Generate Secure JWT_SECRET
Run this command to generate a secure secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Step 3: Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/bizondigital.git
   git push -u origin main
   ```

3. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `DATABASE_URL` = Your PostgreSQL connection string
     - `JWT_SECRET` = Your generated secret
   - Click **Deploy**

4. **Run Migrations on Production**
   After deployment, run migrations:
   ```bash
   # Using Vercel CLI
   vercel env pull .env.production
   npx prisma migrate deploy
   ```

   Or manually in your database client:
   - Connect to your production database
   - Run the SQL from `prisma/migrations/*/migration.sql`

## Step 4: Create Admin User in Production

After migration, create an admin user:

### Method 1: Run Script Locally Against Production DB
```bash
# Set production DATABASE_URL temporarily
DATABASE_URL="your-production-connection-string" node scripts/create-user.js
```

### Method 2: Direct SQL Insert
Connect to your production database and run:
```sql
-- Replace password hash with your own (see below)
INSERT INTO "User" (email, password, name, role, "createdAt", "updatedAt")
VALUES (
  'admin@bizondigital.com',
  '$2a$10$YourHashedPasswordHere',
  'Admin',
  'admin',
  NOW(),
  NOW()
);
```

To generate password hash:
```bash
node -e "console.log(require('bcryptjs').hashSync('your-password', 10))"
```

## Step 5: Deploy to Other Platforms

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard
4. Install Netlify Next.js plugin

### Railway
1. Connect GitHub repo
2. Add environment variables
3. Railway auto-detects Next.js and deploys

### DigitalOcean App Platform
1. Create new app from GitHub
2. Configure build settings:
   - Build command: `npm run build`
   - Run command: `npm start`
3. Add environment variables

## Important Production Considerations

### 1. Database Connection Pooling
For serverless deployments, use connection pooling:

Update `lib/prisma.js`:
```javascript
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL + '?pgbouncer=true&connection_limit=1'
    }
  }
});
```

### 2. CORS Configuration
If your frontend is on different domain, configure CORS in API routes.

### 3. Image Optimization
For production images, consider using:
- Cloudinary
- AWS S3 + CloudFront
- Vercel Blob Storage

### 4. Security Checklist
- ✅ Use strong JWT_SECRET (32+ characters)
- ✅ Enable HTTPS only (automatic on Vercel/Netlify)
- ✅ Set secure cookie flags in production
- ✅ Restrict database access by IP if possible
- ✅ Use environment variables, never commit secrets

## Troubleshooting

### Migration Fails
```bash
# Reset and re-run migrations
npx prisma migrate reset
npx prisma migrate deploy
```

### Connection Pool Exhausted
Add to DATABASE_URL:
```
?connection_limit=1&pool_timeout=10
```

### Build Fails on Prisma
Ensure `postinstall` script exists in package.json:
```json
{
  "scripts": {
    "postinstall": "prisma generate --schema=./prisma/schema.prisma"
  }
}
```

## Monitoring

- **Vercel Analytics**: Automatic
- **Database**: Use provider's dashboard (Supabase/Neon)
- **Error Tracking**: Consider Sentry or LogRocket

## Costs Estimate (Free Tiers)

- **Vercel**: Free (100GB bandwidth/month)
- **Supabase**: Free (500MB database, 2GB bandwidth)
- **Neon**: Free (512MB storage)
- **Total**: $0/month for small projects

## Domain Setup

1. Buy domain from Namecheap/GoDaddy
2. Add to Vercel/Netlify
3. Configure DNS records (automatic on Vercel)

---

## Quick Checklist

- [ ] PostgreSQL database created and accessible
- [ ] DATABASE_URL environment variable set
- [ ] JWT_SECRET generated and set
- [ ] Code pushed to GitHub
- [ ] Deployed to hosting platform
- [ ] Migrations run on production database
- [ ] Admin user created in production
- [ ] Tested login at production URL
- [ ] Blog creation tested
- [ ] Blog display verified

## Support

For issues, check:
- Vercel deployment logs
- Database connection from deployment platform
- Environment variables are correctly set
- Prisma migrations are applied
