# Deployment Checklist

## Pre-Deployment

- [ ] Code is tested locally and working
- [ ] All environment variables documented in `.env.example`
- [ ] Database migrations are up to date
- [ ] Admin user can login and create blogs
- [ ] Blog posts display correctly on frontend
- [ ] No hardcoded credentials in code
- [ ] `.gitignore` includes `.env` file

## Database Setup

- [ ] PostgreSQL database created on cloud service
- [ ] Connection string obtained
- [ ] Database accessible from deployment platform
- [ ] Connection pooling configured (if using serverless)

## Deployment Platform

- [ ] Account created (Vercel/Netlify/Railway)
- [ ] Repository connected (GitHub/GitLab)
- [ ] Environment variables set:
  - [ ] `DATABASE_URL`
  - [ ] `JWT_SECRET` (32+ characters)
  - [ ] `NODE_ENV=production`
- [ ] Build settings configured:
  - [ ] Build command: `npm run build`
  - [ ] Start command: `npm start`
  - [ ] Output directory: `.next`

## Post-Deployment

- [ ] Deployment successful (no build errors)
- [ ] Run migrations: `npm run prisma:deploy`
- [ ] Create admin user in production database
- [ ] Test login at production URL
- [ ] Test blog creation
- [ ] Test blog display
- [ ] Test responsive design on mobile
- [ ] Check all pages load correctly
- [ ] Verify SEO meta tags
- [ ] Test dark/light mode

## Optional (Recommended)

- [ ] Custom domain configured
- [ ] SSL certificate active (HTTPS)
- [ ] Analytics setup (Google Analytics/Vercel Analytics)
- [ ] Error monitoring (Sentry)
- [ ] Regular database backups configured
- [ ] CDN for images (Cloudinary/AWS S3)

## Maintenance

- [ ] Document admin login credentials securely
- [ ] Set up monitoring alerts
- [ ] Plan for regular updates
- [ ] Backup strategy in place
