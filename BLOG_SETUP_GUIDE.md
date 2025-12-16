# Blog Admin Setup Guide for Bizon Digital

## Overview
This guide will help you set up the blog admin system with PostgreSQL backend for Bizon Digital.

## Prerequisites
- Node.js 18+ installed
- PostgreSQL database installed and running
- Git (optional, for version control)

## Step 1: Install Dependencies

Navigate to the bizondigital directory and run:

\`\`\`bash
cd "d:\\New folder\\bizondigital"
npm install
\`\`\`

This will install all required packages including:
- Prisma (database ORM)
- bcryptjs (password hashing)
- jsonwebtoken & jose (authentication)
- nodemailer (email functionality)

## Step 2: Configure Database

### 2.1 Create PostgreSQL Database

Open PostgreSQL and create a new database:

\`\`\`sql
CREATE DATABASE bizondigital;
\`\`\`

### 2.2 Update Environment Variables

Edit the \`.env\` file in the root directory:

\`\`\`env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/bizondigital?schema=public"

# JWT Secret (change this to a random secure string)
JWT_SECRET="your-super-secret-jwt-key-change-this-to-something-random"

# Email Configuration (optional - for email features)
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"

# Next.js Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
\`\`\`

**Important:** Replace:
- \`username\` with your PostgreSQL username
- \`password\` with your PostgreSQL password
- \`5432\` with your PostgreSQL port (default is 5432)
- \`JWT_SECRET\` with a strong random string

### 2.3 Generate Prisma Client

\`\`\`bash
npm run prisma:generate
\`\`\`

### 2.4 Run Database Migrations

\`\`\`bash
npm run prisma:migrate
\`\`\`

When prompted, enter a name for the migration (e.g., "init" or "initial_setup").

## Step 3: Create Admin User

You need to create an admin user to access the blog admin panel.

### Option A: Using Prisma Studio (Recommended)

1. Open Prisma Studio:
\`\`\`bash
npm run prisma:studio
\`\`\`

2. Navigate to the "User" model
3. Click "Add record"
4. Fill in:
   - email: your-email@example.com
   - password: Use bcrypt to hash your password (see Option B for command)
   - name: Your Name
   - role: admin
5. Click "Save 1 change"

### Option B: Using Node.js Script

Create a file \`scripts/create-admin.js\`:

\`\`\`javascript
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('your-password-here', 10);
  
  const admin = await prisma.user.create({
    data: {
      email: 'admin@bizondigital.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
    },
  });
  
  console.log('Admin user created:', admin);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
\`\`\`

Run it:
\`\`\`bash
node scripts/create-admin.js
\`\`\`

## Step 4: Start Development Server

\`\`\`bash
npm run dev
\`\`\`

The application will start on http://localhost:3000

## Step 5: Access Blog Admin

1. Navigate to http://localhost:3000/signin
2. Login with your admin credentials
3. After successful login, go to http://localhost:3000/adminBlog
4. You should now see the Blog Admin Panel

## Features

### Blog Admin Panel (/adminBlog)
- ✅ Create new blog posts with rich text editor
- ✅ Edit existing blog posts
- ✅ Delete blog posts
- ✅ Auto-generate SEO-friendly slugs
- ✅ Featured image upload (URL or file upload)
- ✅ SEO meta tags (title, description, keywords)
- ✅ Open Graph tags for social media
- ✅ JSON-LD structured data (Article & Organization schemas)
- ✅ Category/Industry selection
- ✅ Tags support

### Color Scheme
The admin panel uses the following color scheme:
- Primary Orange: #FF7A00
- Black: #000000
- White: #FFFFFF
- Gray shades for borders and backgrounds

## API Endpoints

### Blogs
- \`GET /api/blogs\` - Get all blogs
- \`GET /api/blogs?mode=lite\` - Get blogs with minimal fields (for listing)
- \`GET /api/blogs?mode=full\` - Get blogs with all fields (for admin)
- \`GET /api/blogs/[slug]\` - Get single blog by slug
- \`POST /api/blogs\` - Create new blog
- \`PUT /api/blogs\` - Update blog
- \`DELETE /api/blogs?id={id}\` - Delete blog

### Authentication
- \`POST /api/auth/login\` - Login
- \`POST /api/auth/signup\` - Register new user
- \`POST /api/auth/logout\` - Logout

### Schema
- \`GET /api/organization-schema\` - Get organization schema
- \`POST /api/organization-schema\` - Save organization schema

## Database Schema

### Blog Table
- id (Int, Primary Key, Auto-increment)
- title (String, Required)
- slug (String, Unique)
- blogContent (String, Rich text HTML)
- featuredImage (String, URL or base64)
- category (String)
- metaTitle, metaDescription, keywords (SEO fields)
- tags (String, comma-separated)
- Open Graph fields (ogTitle, ogDescription, ogImage, ogUrl, ogType)
- JSON schemas (articleSchemaJson, organizationSchemaJson)
- Legacy fields (description, subtitle, content, author info, etc.)
- createdAt, updatedAt (DateTime)

### User Table
- id (Int, Primary Key)
- email (String, Unique)
- password (String, Hashed)
- name (String)
- role (String, default: "user")
- createdAt, updatedAt (DateTime)

## Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running
- Check DATABASE_URL in .env file
- Ensure database exists
- Check firewall settings

### Prisma Client Not Found
Run:
\`\`\`bash
npm run prisma:generate
\`\`\`

### Migration Errors
Reset database (WARNING: This deletes all data):
\`\`\`bash
npx prisma migrate reset --schema=./prisma/schema.prisma
\`\`\`

### Authentication Not Working
- Check JWT_SECRET in .env
- Clear browser cookies
- Check if user exists in database

### Images Not Loading
- For base64 images: Ensure Image component has \`unoptimized\` prop
- For URL images: Check CORS and image accessibility

## Production Deployment

### Environment Variables
Ensure these are set in production:
- DATABASE_URL (production database)
- JWT_SECRET (strong random string)
- NODE_ENV=production

### Build
\`\`\`bash
npm run build
npm start
\`\`\`

### Database Migration
\`\`\`bash
npx prisma migrate deploy --schema=./prisma/schema.prisma
\`\`\`

## Security Checklist

- ✅ JWT_SECRET is strong and unique
- ✅ Passwords are hashed with bcrypt
- ✅ HTTP-only cookies for tokens
- ✅ HTTPS in production
- ✅ Validate all user inputs
- ✅ Rate limiting on API endpoints (recommended)
- ✅ Regular database backups

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review Prisma documentation: https://www.prisma.io/docs
3. Review Next.js documentation: https://nextjs.org/docs

## Color Palette Reference

- Primary (Orange): #FF7A00
- Primary Hover: #E66A00
- Black: #000000
- White: #FFFFFF
- Gray 50: #F9FAFB
- Gray 100: #F3F4F6
- Gray 200: #E5E7EB
- Gray 300: #D1D5DB
- Gray 400: #9CA3AF
- Gray 500: #6B7280
- Gray 600: #4B5563
- Gray 700: #374151
- Gray 800: #1F2937
- Gray 900: #111827
