# Bizon Digital - Next.js Blog & Marketing Website

A modern, full-featured blog and marketing website built with Next.js 15, TypeScript, Tailwind CSS, and PostgreSQL.

## ✨ Features

- 🚀 **Next.js 15** with React 19 and TypeScript
- 🎨 **Tailwind CSS 4** with custom orange (#FF7A00) theme
- 📝 **Blog System** with rich text editor and full SEO support
- 🔐 **Authentication** with JWT and bcrypt
- 💾 **PostgreSQL Database** with Prisma ORM
- 📱 **Responsive Design** optimized for all devices
- 🌙 **Dark/Light Mode** support
- 🔍 **SEO Optimized** with Open Graph and JSON-LD schemas
- 📊 **Admin Panel** for blog management

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+ (local or cloud-hosted)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bizondigital.git
   cd bizondigital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your database credentials:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/bizondigital?schema=public"
   JWT_SECRET="your-32-character-secret-key"
   ```

4. **Run database migrations**
   ```bash
   npm run prisma:migrate
   ```

5. **Create admin user**
   ```bash
   node scripts/create-user.js
   ```
   Enter your admin credentials when prompted.

6. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 📦 Deployment

**Important:** The database must be deployed separately from the application.

### Quick Deploy to Vercel

1. **Set up PostgreSQL database** (choose one):
   - [Supabase](https://supabase.com) (Free tier available)
   - [Neon](https://neon.tech) (Serverless PostgreSQL)
   - [Railway](https://railway.app)
   - [Vercel Postgres](https://vercel.com/storage/postgres)

2. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```
   Or use the Vercel dashboard to import from GitHub.

3. **Set environment variables** in Vercel dashboard:
   - `DATABASE_URL` = Your PostgreSQL connection string
   - `JWT_SECRET` = Secure random string (32+ chars)

4. **Run production setup**
   ```bash
   DATABASE_URL="your-production-url" node scripts/production-setup.js
   ```

📖 **[Full Deployment Guide](./DEPLOYMENT.md)** - Detailed instructions for all platforms

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:deploy` - Deploy migrations to production
- `npm run prisma:studio` - Open Prisma Studio
- `node scripts/create-user.js` - Create new user interactively

## 📁 Project Structure

```
bizondigital/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── public/
│   └── images/                # Static images
├── src/
│   ├── app/                   # Next.js app directory
│   │   ├── api/              # API routes
│   │   ├── blog/             # Blog listing page
│   │   ├── blog-details/[slug]/  # Dynamic blog pages
│   │   ├── signin/           # Authentication
│   │   └── adminBlog/        # Admin panel
│   ├── components/           # React components
│   │   └── Blog/
│   │       ├── Admin/        # Blog admin interface
│   │       ├── BlogSlider.tsx
│   │       └── ForYou.tsx
│   ├── types/                # TypeScript types
│   └── utils/                # Utility functions
├── lib/
│   ├── prisma.js             # Prisma client
│   └── auth.ts               # JWT authentication
└── scripts/
    ├── create-user.js        # Interactive user creation
    └── production-setup.js   # Production deployment script
```

## 🔒 Security

- Passwords hashed with bcryptjs (10 rounds)
- JWT tokens with httpOnly cookies
- Protected admin routes with middleware
- Environment variables for sensitive data
- SQL injection protection via Prisma

## 🎨 Customization

The application uses a custom orange theme (#FF7A00). To change colors:

1. Update Tailwind config in `tailwind.config.js`
2. Search and replace color codes in components
3. Update CSS variables in `src/styles/index.css`

## 📝 License

This project is licensed under the MIT License - see LICENSE file

## 🙌 Support

For issues or questions:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Review [GitHub Issues](https://github.com/yourusername/bizondigital/issues)

## ⚡ Deploy Now

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNextJSTemplates%2Fstartup-nextjs)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/NextJSTemplates/startup-nextjs)


### 📄 License
Startup is 100% free and open-source, feel free to use with your personal and commercial projects.

### 💜 Support
If you like the template, please star this repository to inspire the team to create more stuff like this and reach more users like you!

### ✨ Explore and Download - Free [Next.js Templates](https://nextjstemplates.com)

### Update Log

**10 April 2025**
- Fix peer deps issue with Next.js 15
- Upgrade to tailwind v4
- Refactored blog cards for handling edge cases(text ellipsis on bio, keeping author details at the bottom etc.)
- Re-wrote blog details page with icons separation, fallback author image and better markup.
- Fixed duplicate key errors on homepage.
- Separated icons on theme-switcher button, and refactored scroll-to-top button.

**29 Jan 2025**
- Upgraded to Next.js 15
