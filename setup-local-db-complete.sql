-- ========================================
-- COMPLETE LOCAL DATABASE SETUP
-- Drop and recreate all tables with correct schema matching Prisma
-- ========================================

USE bizondigital_local;

-- Drop existing tables
DROP TABLE IF EXISTS `Blog`;
DROP TABLE IF EXISTS `User`;

-- Recreate Blog table with ALL columns from Prisma schema
CREATE TABLE `Blog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(191) NOT NULL,
  `description` TEXT,
  `subtitle` VARCHAR(500),
  `category` VARCHAR(100),
  `comment` TEXT,
  `views` INT NOT NULL DEFAULT 0,
  `likes` INT NOT NULL DEFAULT 0,
  `shares` INT NOT NULL DEFAULT 0,
  `tags` TEXT,
  `images` TEXT,
  `highlightPoints` TEXT,
  `notes` TEXT,
  `content` LONGTEXT,
  `authorName` VARCHAR(255),
  `authorImage` VARCHAR(500),
  `authorDesignation` VARCHAR(255),
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  `articleSchemaJson` TEXT,
  `blogContent` LONGTEXT,
  `featuredImage` VARCHAR(500),
  `keywords` TEXT,
  `metaDescription` TEXT,
  `metaTitle` VARCHAR(255),
  `ogDescription` TEXT,
  `ogImage` VARCHAR(500),
  `ogTitle` VARCHAR(255),
  `ogType` VARCHAR(50) DEFAULT 'article',
  `ogUrl` VARCHAR(500),
  `organizationSchemaJson` TEXT,
  `slug` VARCHAR(191) UNIQUE,
  PRIMARY KEY (`id`),
  INDEX `idx_slug` (`slug`),
  INDEX `idx_category` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Recreate User table
CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(191) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255),
  `role` VARCHAR(50) NOT NULL DEFAULT 'user',
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Insert admin user (password: 123456)
INSERT INTO `User` (`email`, `password`, `name`, `role`) VALUES
('admin@bizondigital.com', '$2a$10$iGLHFwvGe5neoFgUER1N5uHPh2Jl9CKwtraiOzXaNnWL6G9y0W0GC', 'Admin', 'admin');

-- Insert mock blog posts with ALL required fields
INSERT INTO `Blog` (
  `title`, `slug`, `description`, `content`, `blogContent`, `category`, 
  `tags`, `featuredImage`, `authorName`, `authorDesignation`, 
  `likes`, `shares`, `views`, `metaTitle`, `metaDescription`,
  `organizationSchemaJson`, `articleSchemaJson`
) VALUES
(
  'Digital Marketing Trends for 2025',
  'digital-marketing-trends-2025',
  'Discover the top digital marketing trends that will shape business strategies in 2025. Learn how AI, voice search, and video content are transforming the industry.',
  '<h2>Introduction</h2><p>As we step into 2025, the digital marketing landscape continues to evolve at a rapid pace. Businesses must adapt to stay competitive and reach their target audiences effectively.</p><h2>1. AI-Powered Personalization</h2><p>Artificial intelligence is revolutionizing how brands interact with customers. From personalized email campaigns to chatbots that understand context, AI is making marketing more targeted and effective.</p><h2>2. Voice Search Optimization</h2><p>With the rise of smart speakers and voice assistants, optimizing for voice search is no longer optional. Businesses need to focus on natural language and long-tail keywords.</p><h2>3. Video Content Dominance</h2><p>Short-form video content continues to dominate social media platforms. TikTok, Instagram Reels, and YouTube Shorts are essential channels for brand visibility.</p>',
  'Introduction\n\nAs we step into 2025, the digital marketing landscape continues to evolve...',
  'Digital Marketing',
  'Digital Marketing, AI, Voice Search, Video Marketing, Trends',
  '/images/blog/blog-01.jpg',
  'Sarah Johnson',
  'Digital Marketing Director',
  45,
  23,
  320,
  'Digital Marketing Trends for 2025 | Bizon Digital',
  'Discover the top digital marketing trends that will shape business strategies in 2025.',
  '{"@context":"https://schema.org","@type":"Organization","name":"Bizon Digital","url":"https://bizondigital.com"}',
  '{"@context":"https://schema.org","@type":"Article","headline":"Digital Marketing Trends for 2025"}'
),
(
  'Complete Guide to SEO in 2025',
  'complete-guide-seo-2025',
  'Master the fundamentals of SEO with our comprehensive guide. Learn about Core Web Vitals, content optimization, and technical SEO best practices.',
  '<h2>What is SEO?</h2><p>Search Engine Optimization (SEO) is the practice of improving your website to increase visibility in search engine results.</p><h2>Core Web Vitals</h2><p>Google continues to prioritize user experience metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p><h2>Content Quality</h2><p>High-quality, original content that answers user queries remains the foundation of good SEO.</p><h2>Technical SEO</h2><p>Ensure your website is crawlable, has a proper sitemap, uses structured data, and loads quickly on all devices.</p>',
  'What is SEO?\n\nSearch Engine Optimization (SEO) is the practice of improving your website...',
  'SEO',
  'SEO, Search Engine Optimization, Google, Core Web Vitals',
  '/images/blog/blog-02.jpg',
  'Michael Chen',
  'SEO Specialist',
  78,
  34,
  567,
  'Complete Guide to SEO in 2025 | Bizon Digital',
  'Master the fundamentals of SEO with our comprehensive guide for 2025.',
  '{"@context":"https://schema.org","@type":"Organization","name":"Bizon Digital","url":"https://bizondigital.com"}',
  '{"@context":"https://schema.org","@type":"Article","headline":"Complete Guide to SEO in 2025"}'
),
(
  'Social Media Marketing Strategies That Work',
  'social-media-marketing-strategies',
  'Unlock the secrets of successful social media marketing. Learn proven strategies for content planning, audience engagement, and paid advertising.',
  '<h2>Building Your Social Presence</h2><p>A strong social media presence is essential for modern businesses. Here are proven strategies to grow your audience and engagement.</p><h2>Content Calendar Planning</h2><p>Consistency is key in social media. Plan your content in advance with a detailed calendar covering all platforms.</p><h2>Engagement Tactics</h2><p>Respond to comments, ask questions, run polls, and create interactive content to boost engagement rates.</p><h2>Paid Advertising</h2><p>Organic reach is declining. Strategic paid advertising on platforms like Facebook, Instagram, and LinkedIn can amplify your message.</p>',
  'Building Your Social Presence\n\nA strong social media presence is essential...',
  'Social Media',
  'Social Media, Marketing, Facebook, Instagram, LinkedIn',
  '/images/blog/blog-03.jpg',
  'Emma Rodriguez',
  'Social Media Manager',
  56,
  41,
  423,
  'Social Media Marketing Strategies That Work | Bizon Digital',
  'Unlock the secrets of successful social media marketing with proven strategies.',
  '{"@context":"https://schema.org","@type":"Organization","name":"Bizon Digital","url":"https://bizondigital.com"}',
  '{"@context":"https://schema.org","@type":"Article","headline":"Social Media Marketing Strategies That Work"}'
),
(
  'E-commerce Website Design Best Practices',
  'ecommerce-website-design-best-practices',
  'Design an e-commerce website that converts. Explore best practices for user experience, product presentation, and performance optimization.',
  '<h2>User-Centered Design</h2><p>Your e-commerce website should be designed with the user in mind. Clear navigation, intuitive checkout, and mobile responsiveness are critical.</p><h2>Product Photography</h2><p>High-quality product images from multiple angles help customers make informed decisions and reduce returns.</p><h2>Trust Signals</h2><p>Display security badges, customer reviews, and clear return policies to build trust with potential buyers.</p><h2>Performance Optimization</h2><p>Fast loading times directly impact conversion rates. Optimize images, use CDNs, and minimize code bloat.</p>',
  'User-Centered Design\n\nYour e-commerce website should be designed with the user in mind...',
  'Web Design',
  'E-commerce, Web Design, UX, Conversion Rate, Performance',
  '/images/blog/blog-04.jpg',
  'David Kim',
  'UX Designer',
  92,
  58,
  689,
  'E-commerce Website Design Best Practices | Bizon Digital',
  'Design an e-commerce website that converts with these best practices.',
  '{"@context":"https://schema.org","@type":"Organization","name":"Bizon Digital","url":"https://bizondigital.com"}',
  '{"@context":"https://schema.org","@type":"Article","headline":"E-commerce Website Design Best Practices"}'
),
(
  'Content Marketing: Creating Value for Your Audience',
  'content-marketing-creating-value',
  'Learn how to create content that resonates with your audience and drives business results. Master content strategy, formats, and distribution.',
  '<h2>Understanding Your Audience</h2><p>Effective content marketing starts with knowing who you are talking to. Create detailed buyer personas to guide your content strategy.</p><h2>Content Formats</h2><p>Diversify your content with blog posts, videos, infographics, podcasts, and case studies to reach different audience preferences.</p><h2>Distribution Channels</h2><p>Great content needs distribution. Use email marketing, social media, and partnerships to amplify your reach.</p><h2>Measuring Success</h2><p>Track metrics like engagement, time on page, conversions, and ROI to refine your content strategy over time.</p>',
  'Understanding Your Audience\n\nEffective content marketing starts with knowing who you are talking to...',
  'Content Marketing',
  'Content Marketing, Strategy, Audience, ROI, Distribution',
  '/images/blog/blog-05.jpg',
  'Lisa Thompson',
  'Content Strategist',
  63,
  29,
  401,
  'Content Marketing: Creating Value for Your Audience | Bizon Digital',
  'Learn how to create content that resonates with your audience and drives results.',
  '{"@context":"https://schema.org","@type":"Organization","name":"Bizon Digital","url":"https://bizondigital.com"}',
  '{"@context":"https://schema.org","@type":"Article","headline":"Content Marketing: Creating Value for Your Audience"}'
);

-- Verify the data
SELECT id, title, slug, category, likes, shares, views FROM Blog ORDER BY createdAt DESC;
SELECT id, email, name, role FROM User;
