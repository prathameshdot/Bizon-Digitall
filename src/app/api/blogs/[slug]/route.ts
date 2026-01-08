import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export const revalidate = 30; // Cache for 30 seconds

// Comprehensive dummy blog data with all fields
const dummyBlogs = [
  {
    id: 1,
    title: "SEO Strategies to Boost Your Website Traffic in 2025",
    description: "Discover the latest SEO techniques and strategies that will help increase your website's organic traffic and improve search engine rankings.",
    subtitle: "Master Modern SEO Techniques for Maximum Visibility",
    blogContent: `
      <div class="prose max-w-none">
        <h2 class="text-2xl font-bold mb-4 mt-6">Introduction to Modern SEO</h2>
        <p class="mb-4">Search Engine Optimization (SEO) has evolved significantly over the years. In 2025, it's more important than ever to stay ahead of the curve with cutting-edge strategies that work. The landscape of SEO continues to shift as search engines become more sophisticated and user expectations rise.</p>
        
        <img src="/images/blog/blog-01.jpg" alt="SEO Strategy" class="w-full rounded-lg my-6" />
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Understanding Search Intent</h2>
        <p class="mb-4">The foundation of effective SEO in 2025 is understanding user search intent. Google's algorithms have become incredibly adept at understanding what users are truly looking for when they type in a query. Your content must align perfectly with this intent.</p>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">Types of Search Intent:</h3>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Informational:</strong> Users seeking knowledge or answers</li>
          <li class="mb-2"><strong>Navigational:</strong> Users looking for a specific website or page</li>
          <li class="mb-2"><strong>Transactional:</strong> Users ready to make a purchase</li>
          <li class="mb-2"><strong>Commercial Investigation:</strong> Users comparing options before buying</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Key SEO Strategies for 2025</h2>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">1. Core Web Vitals Optimization</h3>
        <p class="mb-4">Google's Core Web Vitals have become crucial ranking factors. Focus on:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Largest Contentful Paint (LCP) - Load performance</li>
          <li class="mb-2">First Input Delay (FID) - Interactivity</li>
          <li class="mb-2">Cumulative Layout Shift (CLS) - Visual stability</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">2. AI-Powered Content Creation</h3>
        <p class="mb-4">While AI tools can assist in content creation, the key is to create comprehensive, authoritative content that provides genuine value. Focus on E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness).</p>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">3. Voice Search Optimization</h3>
        <p class="mb-4">With the rise of smart speakers and voice assistants, optimizing for voice search is essential. Use natural language, focus on long-tail keywords, and answer questions directly.</p>
        
        <blockquote class="border-l-4 border-orange-500 pl-4 italic my-6 bg-gray-50 p-4">
          "The best SEO strategy is to create content so valuable that people can't help but share and link to it."
        </blockquote>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">4. Schema Markup and Structured Data</h3>
        <p class="mb-4">Implement comprehensive schema markup to help search engines understand your content better. This can lead to rich snippets and enhanced visibility in search results.</p>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">5. Mobile-First Indexing</h3>
        <p class="mb-4">Google now predominantly uses the mobile version of content for indexing and ranking. Ensure your website is fully responsive and provides an excellent mobile experience.</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Technical SEO Essentials</h2>
        <p class="mb-4">Don't neglect the technical aspects of SEO:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">XML Sitemaps and proper indexation</li>
          <li class="mb-2">Clean URL structure</li>
          <li class="mb-2">HTTPS security</li>
          <li class="mb-2">Page speed optimization</li>
          <li class="mb-2">Canonical tags to avoid duplicate content</li>
          <li class="mb-2">Proper internal linking structure</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Content Strategy for SEO Success</h2>
        <p class="mb-4">Creating high-quality content remains the cornerstone of effective SEO. Your content should be:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Comprehensive:</strong> Cover topics thoroughly</li>
          <li class="mb-2"><strong>Original:</strong> Provide unique insights and perspectives</li>
          <li class="mb-2"><strong>Well-researched:</strong> Back up claims with data and sources</li>
          <li class="mb-2"><strong>Engaging:</strong> Use visuals, examples, and storytelling</li>
          <li class="mb-2"><strong>Updated:</strong> Regularly refresh and improve existing content</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Link Building in 2025</h2>
        <p class="mb-4">Quality over quantity has never been more important in link building. Focus on:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Creating linkable assets (original research, infographics, tools)</li>
          <li class="mb-2">Guest posting on authoritative sites in your niche</li>
          <li class="mb-2">Building relationships with industry influencers</li>
          <li class="mb-2">Earning mentions through PR and media outreach</li>
          <li class="mb-2">Fixing broken links on other sites (broken link building)</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Measuring SEO Success</h2>
        <p class="mb-4">Track these key metrics to measure your SEO performance:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Organic traffic and traffic trends</li>
          <li class="mb-2">Keyword rankings for target terms</li>
          <li class="mb-2">Click-through rates (CTR) from search results</li>
          <li class="mb-2">Conversion rates from organic traffic</li>
          <li class="mb-2">Backlink quality and quantity</li>
          <li class="mb-2">Domain authority and page authority</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Conclusion</h2>
        <p class="mb-4">SEO in 2025 requires a holistic approach that combines technical excellence, high-quality content, user experience optimization, and strategic link building. By implementing these modern SEO strategies, you'll be well-positioned to boost your website traffic and improve your search engine rankings.</p>
        <p class="mb-4">Remember, SEO is a long-term investment. Stay patient, keep learning, and continuously adapt your strategy based on data and results. The digital landscape will continue to evolve, and those who stay ahead of the curve will reap the greatest rewards.</p>
      </div>
    `,
    category: "Digital Marketing",
    tags: "SEO, Marketing, Website Traffic, Search Engine",
    featuredImage: "/images/blog/blog-01.jpg",
    authorName: "Sarah Johnson",
    authorImage: "/images/blog/author-03.png",
    authorDesignation: "SEO Specialist & Digital Marketing Expert",
    createdAt: new Date("2025-12-15T10:00:00Z"),
    updatedAt: new Date("2025-12-15T10:00:00Z"),
    slug: "seo-strategies-2025",
    views: 1250,
    metaTitle: "SEO Strategies to Boost Your Website Traffic in 2025 | BizonDigital",
    metaDescription: "Discover the latest SEO techniques and strategies that will help increase your website's organic traffic and improve search engine rankings in 2025.",
    keywords: "SEO, website traffic, digital marketing, search engine optimization, SEO 2025, organic traffic, Google rankings",
    ogTitle: "SEO Strategies to Boost Your Website Traffic in 2025",
    ogDescription: "Master modern SEO techniques to increase organic traffic and improve your search engine rankings.",
    ogImage: "/images/blog/blog-01.jpg",
    ogUrl: "/blog-details/seo-strategies-2025",
    ogType: "article",
    articleSchemaJson: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "SEO Strategies to Boost Your Website Traffic in 2025",
      "image": "/images/blog/blog-01.jpg",
      "author": {
        "@type": "Person",
        "name": "Sarah Johnson"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BizonDigital",
        "logo": {
          "@type": "ImageObject",
          "url": "/images/logo/logo.png"
        }
      },
      "datePublished": "2025-12-15"
    }),
    organizationSchemaJson: null,
    comment: null,
    images: "/images/blog/blog-01.jpg",
    highlightPoints: "Core Web Vitals, AI Content, Voice Search, Schema Markup, Mobile-First",
    notes: null,
    content: null
  },
  {
    id: 2,
    title: "Social Media Marketing: Best Practices for 2025",
    description: "Learn how to leverage social media platforms effectively to build brand awareness, engage your audience, and drive conversions.",
    subtitle: "Build Your Brand Through Strategic Social Media",
    blogContent: `
      <div class="prose max-w-none">
        <h2 class="text-2xl font-bold mb-4 mt-6">The Evolution of Social Media Marketing</h2>
        <p class="mb-4">Social media has transformed from simple networking platforms to powerful business tools. In 2025, social media marketing is more sophisticated, data-driven, and results-oriented than ever before. Success requires a strategic approach that goes beyond just posting content.</p>
        
        <img src="/images/blog/blog-02.jpg" alt="Social Media Marketing" class="w-full rounded-lg my-6" />
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Understanding Your Audience</h2>
        <p class="mb-4">The foundation of effective social media marketing is knowing your audience inside and out. Create detailed buyer personas that include:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Demographics (age, location, income, education)</li>
          <li class="mb-2">Psychographics (interests, values, lifestyle)</li>
          <li class="mb-2">Pain points and challenges</li>
          <li class="mb-2">Preferred social media platforms</li>
          <li class="mb-2">Content consumption habits</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Platform-Specific Strategies</h2>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">Instagram Marketing</h3>
        <p class="mb-4">Instagram remains a visual powerhouse. Focus on:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">High-quality, aesthetically pleasing visuals</li>
          <li class="mb-2">Instagram Reels for maximum reach</li>
          <li class="mb-2">Stories for daily engagement</li>
          <li class="mb-2">Shopping features for e-commerce</li>
          <li class="mb-2">Influencer collaborations</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">LinkedIn for B2B</h3>
        <p class="mb-4">LinkedIn is essential for B2B marketing:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Thought leadership content</li>
          <li class="mb-2">Industry insights and trends</li>
          <li class="mb-2">Employee advocacy programs</li>
          <li class="mb-2">LinkedIn Ads for targeted reach</li>
          <li class="mb-2">Professional networking and partnerships</li>
        </ul>
        
        <blockquote class="border-l-4 border-orange-500 pl-4 italic my-6 bg-gray-50 p-4">
          "Social media is not about the exploitation of technology but service to community." - Simon Mainwaring
        </blockquote>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">TikTok and Short-Form Video</h3>
        <p class="mb-4">TikTok has revolutionized content creation. Embrace short-form video across all platforms with:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Authentic, unpolished content</li>
          <li class="mb-2">Trending audio and challenges</li>
          <li class="mb-2">Educational and entertaining content</li>
          <li class="mb-2">Behind-the-scenes footage</li>
          <li class="mb-2">User-generated content campaigns</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Content Creation Best Practices</h2>
        <p class="mb-4">Creating engaging content is the heart of social media marketing:</p>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">The 80/20 Rule</h3>
        <p class="mb-4">Follow the 80/20 rule: 80% valuable content (educational, entertaining, inspiring) and 20% promotional content.</p>
        
        <h3 class="text-xl font-semibold mb-3 mt-4">Visual Consistency</h3>
        <p class="mb-4">Maintain consistent branding across all platforms with:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Consistent color palette</li>
          <li class="mb-2">Recognizable fonts and typography</li>
          <li class="mb-2">Cohesive visual style</li>
          <li class="mb-2">Brand voice and tone</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Engagement Strategies</h2>
        <p class="mb-4">Building genuine relationships with your audience is crucial:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Respond to comments and messages promptly</li>
          <li class="mb-2">Ask questions to encourage interaction</li>
          <li class="mb-2">Run polls and surveys</li>
          <li class="mb-2">Host live sessions and Q&As</li>
          <li class="mb-2">Create community-focused content</li>
          <li class="mb-2">Acknowledge and feature user-generated content</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Social Media Advertising</h2>
        <p class="mb-4">Paid social media advertising can significantly amplify your reach:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Use detailed targeting options</li>
          <li class="mb-2">Test different ad formats and creatives</li>
          <li class="mb-2">Implement retargeting campaigns</li>
          <li class="mb-2">Track and optimize for conversions</li>
          <li class="mb-2">Set clear KPIs and budgets</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Analytics and Measurement</h2>
        <p class="mb-4">Track these key metrics to measure success:</p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Engagement rate (likes, comments, shares)</li>
          <li class="mb-2">Reach and impressions</li>
          <li class="mb-2">Follower growth rate</li>
          <li class="mb-2">Click-through rate (CTR)</li>
          <li class="mb-2">Conversion rate</li>
          <li class="mb-2">Return on ad spend (ROAS)</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-6">Conclusion</h2>
        <p class="mb-4">Social media marketing in 2025 requires authenticity, consistency, and strategic thinking. By understanding your audience, creating valuable content, and engaging genuinely with your community, you can build a strong brand presence that drives real business results.</p>
        <p class="mb-4">Remember, social media success doesn't happen overnight. Stay committed to your strategy, adapt based on data, and always put your audience first.</p>
      </div>
    `,
    category: "Digital Marketing",
    tags: "Social Media, Marketing, Brand Awareness, Engagement",
    featuredImage: "/images/blog/blog-02.jpg",
    authorName: "Mike Chen",
    authorImage: "/images/blog/author-02.png",
    authorDesignation: "Social Media Strategist & Content Creator",
    createdAt: new Date("2025-12-14T09:30:00Z"),
    updatedAt: new Date("2025-12-14T09:30:00Z"),
    slug: "social-media-marketing-2025",
    views: 980,
    metaTitle: "Social Media Marketing: Best Practices for 2025 | BizonDigital",
    metaDescription: "Learn how to leverage social media platforms effectively to build brand awareness, engage your audience, and drive conversions in 2025.",
    keywords: "social media marketing, brand awareness, engagement, Instagram, TikTok, LinkedIn, content strategy",
    ogTitle: "Social Media Marketing: Best Practices for 2025",
    ogDescription: "Build your brand through strategic social media marketing and engagement.",
    ogImage: "/images/blog/blog-02.jpg",
    ogUrl: "/blog-details/social-media-marketing-2025",
    ogType: "article",
    articleSchemaJson: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Social Media Marketing: Best Practices for 2025",
      "image": "/images/blog/blog-02.jpg",
      "author": {
        "@type": "Person",
        "name": "Mike Chen"
      },
      "datePublished": "2025-12-14"
    }),
    organizationSchemaJson: null,
    comment: null,
    images: "/images/blog/blog-02.jpg",
    highlightPoints: "Platform Strategy, Content Creation, Engagement, Advertising, Analytics",
    notes: null,
    content: null
  },
  {
    id: 3,
    title: "Content Marketing That Converts: A Complete Guide",
    description: "Master the art of creating compelling content that not only attracts visitors but also converts them into loyal customers.",
    subtitle: "Turn Your Content Into a Conversion Machine",
    blogContent: `
      <div class="prose max-w-none">
        <p class="text-lg mb-6 leading-relaxed">In today's digital landscape, content marketing has become the cornerstone of successful online businesses. It's no longer just about creating content; it's about creating content that converts visitors into customers and builds lasting relationships.</p>
        
        <img src="/images/blog/blog-03.jpg" alt="Content Marketing Strategy" class="w-full rounded-lg my-8 shadow-lg" />
        
        <h2 class="text-3xl font-bold mb-6 mt-8 text-gray-900">Why Content Marketing Matters</h2>
        <p class="mb-4">Content marketing generates <strong>3 times more leads</strong> than traditional marketing while costing <strong>62% less</strong>. But the real power lies in creating content that doesn't just attract eyeballs – it converts them into paying customers.</p>
        
        <p class="mb-4">Think about the last time you made a significant purchase online. Chances are, you consumed multiple pieces of content before making your decision – blog posts, reviews, videos, comparisons. That's the power of strategic content marketing.</p>
        
        <h2 class="text-3xl font-bold mb-6 mt-8 text-gray-900">The Content Marketing Framework</h2>
        
        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-800">1. Know Your Audience Inside Out</h3>
        <p class="mb-4">Before you write a single word, you need to understand who you're writing for. Create detailed buyer personas that include:</p>
        
        <ul class="list-disc pl-8 mb-6 space-y-3">
          <li class="leading-relaxed"><strong>Demographics:</strong> Age, location, job title, income level, education</li>
          <li class="leading-relaxed"><strong>Psychographics:</strong> Values, interests, lifestyle, personality traits</li>
          <li class="leading-relaxed"><strong>Pain Points:</strong> Challenges they face, problems they need to solve</li>
          <li class="leading-relaxed"><strong>Goals and Aspirations:</strong> What they want to achieve</li>
          <li class="leading-relaxed"><strong>Content Preferences:</strong> How they like to consume information</li>
        </ul>
        
        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-800">2. Map Content to the Buyer's Journey</h3>
        <p class="mb-4">Your audience is at different stages of their buying journey. Create content for each stage:</p>
        
        <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-lg">
          <h4 class="font-bold text-lg mb-3 text-orange-800">Awareness Stage</h4>
          <p class="mb-2"><strong>Goal:</strong> Educate and attract</p>
          <p class="mb-3"><strong>Content Types:</strong> Blog posts, social media content, infographics, educational videos</p>
          <p><em>Example:</em> "What is Content Marketing?" or "Top 10 Digital Marketing Trends"</p>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
          <h4 class="font-bold text-lg mb-3 text-blue-800">Consideration Stage</h4>
          <p class="mb-2"><strong>Goal:</strong> Build trust and provide solutions</p>
          <p class="mb-3"><strong>Content Types:</strong> How-to guides, comparison articles, case studies, webinars</p>
          <p><em>Example:</em> "How to Choose the Right Marketing Agency" or "A vs B: Which is Better?"</p>
        </div>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
          <h4 class="font-bold text-lg mb-3 text-green-800">Decision Stage</h4>
          <p class="mb-2"><strong>Goal:</strong> Convert and close the sale</p>
          <p class="mb-3"><strong>Content Types:</strong> Product demos, free trials, testimonials, pricing guides</p>
          <p><em>Example:</em> "Customer Success Stories" or "Free 30-Day Trial"</p>
        </div>
        
        <h2 class="text-3xl font-bold mb-6 mt-8 text-gray-900">Types of High-Converting Content</h2>
        
        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-800">Long-Form Blog Posts</h3>
        <p class="mb-4">Articles over 2,000 words get <strong>77% more backlinks</strong> than shorter posts. Create comprehensive guides that become the go-to resource in your industry.</p>
        
        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-800">Video Content</h3>
        <p class="mb-4">Video is projected to claim more than 82% of all web traffic. Use video for:</p>
        <ul class="list-disc pl-8 mb-6 space-y-2">
          <li>Product demonstrations</li>
          <li>Customer testimonials</li>
          <li>Behind-the-scenes tours</li>
          <li>Educational tutorials</li>
          <li>Expert interviews</li>
        </ul>
        
        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-800">Interactive Content</h3>
        <p class="mb-4">Quizzes, calculators, and assessments generate <strong>2x more conversions</strong> than passive content. They're engaging and provide personalized value.</p>
        
        <blockquote class="border-l-4 border-orange-500 pl-6 italic my-8 bg-gray-50 p-6 rounded-r-lg text-lg">
          "Content is the atomic particle of all digital marketing." <br />
          <span class="text-sm not-italic text-gray-600">- Rebecca Lieb, Digital Advertising Analyst</span>
        </blockquote>
        
        <h2 class="text-3xl font-bold mb-6 mt-8 text-gray-900">Optimization Strategies for Maximum Conversions</h2>
        
        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-800">1. Craft Irresistible Headlines</h3>
        <p class="mb-4">80% of people read headlines, but only 20% read the rest. Your headline must:</p>
        <ul class="list-disc pl-8 mb-6 space-y-2">
          <li>Include numbers or lists (e.g., "7 Ways to...")</li>
          <li>Create urgency or curiosity</li>
          <li>Promise a clear benefit</li>
          <li>Be specific and actionable</li>
        </ul>
        
        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-800">2. Use Strategic CTAs</h3>
        <p class="mb-4">Every piece of content needs a clear call-to-action. Best practices:</p>
        <ul class="list-disc pl-8 mb-6 space-y-2">
          <li>Place CTAs above the fold and at the end of content</li>
          <li>Use action-oriented language ("Get Started", "Download Now", "Claim Your Free Trial")</li>
          <li>Create visual contrast with buttons</li>
          <li>Test different CTA copy and placements</li>
        </ul>
        
        <h3 class="text-2xl font-semibold mb-4 mt-6 text-gray-800">3. Leverage Social Proof</h3>
        <p class="mb-4">Include testimonials, case studies, and social proof throughout your content. People trust other people more than they trust brands.</p>
        
        <h2 class="text-3xl font-bold mb-6 mt-8 text-gray-900">Content Distribution Strategy</h2>
        <p class="mb-4">Creating great content is only half the battle. You need a distribution strategy:</p>
        
        <ol class="list-decimal pl-8 mb-6 space-y-4">
          <li class="leading-relaxed">
            <strong>Email Marketing:</strong> Share your content with your email subscribers. Email has an average ROI of $42 for every $1 spent.
          </li>
          <li class="leading-relaxed">
            <strong>Social Media:</strong> Share on platforms where your audience hangs out. Repurpose content into multiple formats.
          </li>
          <li class="leading-relaxed">
            <strong>SEO Optimization:</strong> Optimize for search engines to attract organic traffic over time.
          </li>
          <li class="leading-relaxed">
            <strong>Paid Promotion:</strong> Use paid ads to amplify your best-performing content.
          </li>
          <li class="leading-relaxed">
            <strong>Guest Posting:</strong> Reach new audiences by contributing to other authoritative sites.
          </li>
        </ol>
        
        <h2 class="text-3xl font-bold mb-6 mt-8 text-gray-900">Measuring Content Marketing Success</h2>
        <p class="mb-4">Track these key metrics to measure your content marketing ROI:</p>
        
        <div class="bg-gray-50 p-6 rounded-lg my-6">
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-orange-500 font-bold mr-3">→</span>
              <div>
                <strong>Traffic Metrics:</strong> Page views, unique visitors, time on page, bounce rate
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 font-bold mr-3">→</span>
              <div>
                <strong>Engagement Metrics:</strong> Social shares, comments, scroll depth, video watch time
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 font-bold mr-3">→</span>
              <div>
                <strong>Conversion Metrics:</strong> Lead generation, email signups, demo requests, sales
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 font-bold mr-3">→</span>
              <div>
                <strong>SEO Metrics:</strong> Keyword rankings, backlinks, domain authority, organic traffic growth
              </div>
            </li>
          </ul>
        </div>
        
        <h2 class="text-3xl font-bold mb-6 mt-8 text-gray-900">Common Content Marketing Mistakes to Avoid</h2>
        
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <h4 class="font-bold text-lg mb-4 text-red-800">❌ Avoid These Pitfalls:</h4>
          <ul class="space-y-3">
            <li><strong>Being too promotional:</strong> Focus on value first, selling second</li>
            <li><strong>Inconsistent publishing:</strong> Create and stick to a content calendar</li>
            <li><strong>Ignoring SEO:</strong> Optimize every piece for search engines</li>
            <li><strong>Not repurposing content:</strong> Turn one blog post into multiple content pieces</li>
            <li><strong>Neglecting analytics:</strong> Use data to inform your content strategy</li>
          </ul>
        </div>
        
        <h2 class="text-3xl font-bold mb-6 mt-8 text-gray-900">Conclusion: Start Creating Content That Converts</h2>
        <p class="mb-4 text-lg">Content marketing isn't just about creating content – it's about creating content with a purpose. Every piece should move your audience closer to becoming a customer.</p>
        
        <p class="mb-4">Start by understanding your audience deeply, mapping content to their journey, and optimizing every element for conversions. Test, measure, refine, and repeat.</p>
        
        <p class="mb-6">Remember: <strong class="text-orange-600">The best content marketing doesn't feel like marketing at all. It feels like helpful, valuable information that just happens to lead to your product or service as the perfect solution.</strong></p>
        
        <div class="bg-orange-500 text-white p-8 rounded-lg my-8 text-center">
          <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Content Marketing?</h3>
          <p class="mb-6">Let's create a content strategy that drives real results for your business.</p>
          <a href="/contact" class="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">Get Started Today</a>
        </div>
      </div>
    `,
    category: "Content Marketing",
    tags: "Content, Marketing, Conversions, Strategy",
    featuredImage: "/images/blog/blog-03.jpg",
    authorName: "Emma Williams",
    authorImage: "/images/blog/author-03.png",
    authorDesignation: "Content Strategist & Copywriter",
    createdAt: new Date("2025-12-13T14:20:00Z"),
    updatedAt: new Date("2025-12-13T14:20:00Z"),
    slug: "content-marketing-guide",
    views: 1450,
    metaTitle: "Content Marketing That Converts: A Complete Guide | BizonDigital",
    metaDescription: "Master the art of creating compelling content that attracts visitors and converts them into loyal customers with proven strategies.",
    keywords: "content marketing, conversion optimization, content strategy, copywriting, lead generation",
    ogTitle: "Content Marketing That Converts: A Complete Guide",
    ogDescription: "Transform your content into a powerful conversion tool.",
    ogImage: "/images/blog/blog-03.jpg",
    ogUrl: "/blog-details/content-marketing-guide",
    ogType: "article",
    articleSchemaJson: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Content Marketing That Converts: A Complete Guide",
      "image": "/images/blog/blog-03.jpg",
      "author": {
        "@type": "Person",
        "name": "Emma Williams"
      },
      "datePublished": "2025-12-13"
    }),
    organizationSchemaJson: null,
    comment: null,
    images: "/images/blog/blog-03.jpg",
    highlightPoints: "Content Strategy, Conversion Optimization, Lead Generation, Storytelling",
    notes: null,
    content: null
  }
];

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Try to fetch from database
    const blog = await prisma.blog.findUnique({
      where: { slug },
    });

    if (blog) {
      return NextResponse.json(blog, { status: 200 });
    }

    // If not found in database, check dummy data
    const dummyBlog = dummyBlogs.find(b => b.slug === slug);
    
    if (dummyBlog) {
      return NextResponse.json(dummyBlog, { status: 200 });
    }

    // If not found anywhere, return 404
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });

  } catch (error: any) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
