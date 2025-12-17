import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export const revalidate = 60;

// Comprehensive dummy blog data with all fields populated
const dummyBlogsData = [
  {
    id: 1,
    title: "SEO Strategies to Boost Your Website Traffic in 2025",
    description: "Discover the latest SEO techniques and strategies that will help increase your website's organic traffic and improve search engine rankings.",
    subtitle: "Master Modern SEO Techniques for Maximum Visibility",
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
    comment: null,
    images: "/images/blog/blog-01.jpg",
    highlightPoints: "Core Web Vitals, AI Content, Voice Search, Schema Markup, Mobile-First",
    notes: null,
    content: null,
    blogContent: "<div>Full SEO content...</div>",
    ogTitle: "SEO Strategies to Boost Your Website Traffic in 2025",
    ogDescription: "Master modern SEO techniques to increase organic traffic and improve your search engine rankings.",
    ogImage: "/images/blog/blog-01.jpg",
    ogUrl: "/blog-details/seo-strategies-2025",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  },
  {
    id: 2,
    title: "Social Media Marketing: Best Practices for 2025",
    description: "Learn how to leverage social media platforms effectively to build brand awareness, engage your audience, and drive conversions.",
    subtitle: "Build Your Brand Through Strategic Social Media",
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
    comment: null,
    images: "/images/blog/blog-02.jpg",
    highlightPoints: "Platform Strategy, Content Creation, Engagement, Advertising, Analytics",
    notes: null,
    content: null,
    blogContent: "<div>Full social media content...</div>",
    ogTitle: "Social Media Marketing: Best Practices for 2025",
    ogDescription: "Build your brand through strategic social media marketing and engagement.",
    ogImage: "/images/blog/blog-02.jpg",
    ogUrl: "/blog-details/social-media-marketing-2025",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  },
  {
    id: 3,
    title: "Content Marketing That Converts: A Complete Guide",
    description: "Master the art of creating compelling content that not only attracts visitors but also converts them into loyal customers.",
    subtitle: "Turn Your Content Into a Conversion Machine",
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
    comment: null,
    images: "/images/blog/blog-03.jpg",
    highlightPoints: "Content Strategy, Conversion Optimization, Lead Generation, Storytelling",
    notes: null,
    content: null,
    blogContent: "<div>Full content marketing guide...</div>",
    ogTitle: "Content Marketing That Converts: A Complete Guide",
    ogDescription: "Transform your content into a powerful conversion tool.",
    ogImage: "/images/blog/blog-03.jpg",
    ogUrl: "/blog-details/content-marketing-guide",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  },
  {
    id: 4,
    title: "Email Marketing Automation: Increase ROI by 300%",
    description: "Explore powerful email marketing automation strategies that can significantly boost your return on investment and customer engagement.",
    subtitle: "Automate Your Way to Email Marketing Success",
    category: "Email Marketing",
    tags: "Email, Automation, ROI, Marketing",
    featuredImage: "/images/blog/blog-01.jpg",
    authorName: "David Martinez",
    authorImage: "/images/blog/author-02.png",
    authorDesignation: "Email Marketing Expert & Automation Specialist",
    createdAt: new Date("2025-12-12T11:45:00Z"),
    updatedAt: new Date("2025-12-12T11:45:00Z"),
    slug: "email-marketing-automation",
    views: 876,
    metaTitle: "Email Marketing Automation: Increase ROI by 300% | BizonDigital",
    metaDescription: "Learn powerful email marketing automation strategies to boost ROI, increase engagement, and nurture leads effectively.",
    keywords: "email marketing, automation, ROI, email campaigns, drip campaigns, lead nurturing",
    comment: null,
    images: "/images/blog/blog-01.jpg",
    highlightPoints: "Automation Workflows, Segmentation, Personalization, A/B Testing",
    notes: null,
    content: null,
    blogContent: "<div>Full email marketing automation guide...</div>",
    ogTitle: "Email Marketing Automation: Increase ROI by 300%",
    ogDescription: "Automate your email marketing for maximum ROI and engagement.",
    ogImage: "/images/blog/blog-01.jpg",
    ogUrl: "/blog-details/email-marketing-automation",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  },
  {
    id: 5,
    title: "PPC Advertising: Maximize Your Ad Spend Efficiency",
    description: "Learn advanced PPC strategies to optimize your advertising budget, increase click-through rates, and maximize conversions.",
    subtitle: "Get More Results from Every Dollar Spent",
    category: "Paid Advertising",
    tags: "PPC, Advertising, Google Ads, Facebook Ads",
    featuredImage: "/images/blog/blog-02.jpg",
    authorName: "Lisa Anderson",
    authorImage: "/images/blog/author-03.png",
    authorDesignation: "PPC Specialist & Paid Media Strategist",
    createdAt: new Date("2025-12-11T16:00:00Z"),
    updatedAt: new Date("2025-12-11T16:00:00Z"),
    slug: "ppc-advertising-guide",
    views: 1120,
    metaTitle: "PPC Advertising: Maximize Your Ad Spend Efficiency | BizonDigital",
    metaDescription: "Learn advanced PPC strategies to optimize your advertising budget, increase CTR, and maximize conversions across all platforms.",
    keywords: "PPC advertising, Google Ads, Facebook Ads, paid advertising, ad optimization, ROAS",
    comment: null,
    images: "/images/blog/blog-02.jpg",
    highlightPoints: "Campaign Optimization, Keyword Strategy, Ad Copy, Budget Management",
    notes: null,
    content: null,
    blogContent: "<div>Full PPC advertising guide...</div>",
    ogTitle: "PPC Advertising: Maximize Your Ad Spend Efficiency",
    ogDescription: "Optimize your PPC campaigns for maximum ROI and conversions.",
    ogImage: "/images/blog/blog-02.jpg",
    ogUrl: "/blog-details/ppc-advertising-guide",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  },
  {
    id: 6,
    title: "Influencer Marketing: Building Authentic Partnerships",
    description: "Discover how to collaborate with influencers effectively to expand your brand reach and build authentic connections with your target audience.",
    subtitle: "Leverage Influencer Power for Brand Growth",
    category: "Influencer Marketing",
    tags: "Influencer, Branding, Partnerships, Marketing",
    featuredImage: "/images/blog/blog-03.jpg",
    authorName: "James Brown",
    authorImage: "/images/blog/author-02.png",
    authorDesignation: "Brand Strategist & Influencer Relations",
    createdAt: new Date("2025-12-10T13:30:00Z"),
    updatedAt: new Date("2025-12-10T13:30:00Z"),
    slug: "influencer-marketing-guide",
    views: 1340,
    metaTitle: "Influencer Marketing: Building Authentic Partnerships | BizonDigital",
    metaDescription: "Learn how to collaborate with influencers effectively to expand brand reach and create authentic connections with your audience.",
    keywords: "influencer marketing, brand partnerships, influencer collaboration, social media influencers, brand awareness",
    comment: null,
    images: "/images/blog/blog-03.jpg",
    highlightPoints: "Finding Influencers, Partnership Strategies, Campaign Management, ROI Tracking",
    notes: null,
    content: null,
    blogContent: "<div>Full influencer marketing guide...</div>",
    ogTitle: "Influencer Marketing: Building Authentic Partnerships",
    ogDescription: "Build powerful influencer partnerships for authentic brand growth.",
    ogImage: "/images/blog/blog-03.jpg",
    ogUrl: "/blog-details/influencer-marketing-guide",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  },
  {
    id: 7,
    title: "Video Marketing Trends Dominating 2025",
    description: "Stay ahead of the curve with the latest video marketing trends, from short-form content to live streaming and interactive videos.",
    subtitle: "Master the Art of Video Marketing",
    category: "Video Marketing",
    tags: "Video Marketing, Content Creation, Video Strategy",
    featuredImage: "/images/blog/blog-01.jpg",
    authorName: "Rachel Green",
    authorImage: "/images/blog/author-03.png",
    authorDesignation: "Video Marketing Specialist",
    createdAt: new Date("2025-12-09T10:15:00Z"),
    updatedAt: new Date("2025-12-09T10:15:00Z"),
    slug: "video-marketing-trends-2025",
    views: 2100,
    metaTitle: "Video Marketing Trends Dominating 2025 | BizonDigital",
    metaDescription: "Discover the latest video marketing trends including short-form content, live streaming, and interactive videos that drive engagement.",
    keywords: "video marketing, video trends 2025, short-form video, live streaming, video content",
    comment: null,
    images: "/images/blog/blog-01.jpg",
    highlightPoints: "Short-Form Video, Live Streaming, Interactive Content, Video SEO",
    notes: null,
    content: null,
    blogContent: "<div>Full video marketing trends...</div>",
    ogTitle: "Video Marketing Trends Dominating 2025",
    ogDescription: "Stay ahead with the latest video marketing trends and strategies.",
    ogImage: "/images/blog/blog-01.jpg",
    ogUrl: "/blog-details/video-marketing-trends-2025",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  },
  {
    id: 8,
    title: "Conversion Rate Optimization: Double Your Sales",
    description: "Learn proven CRO techniques to optimize your website and landing pages for maximum conversions and revenue growth.",
    subtitle: "Turn More Visitors Into Paying Customers",
    category: "Conversion Optimization",
    tags: "CRO, Conversion, Landing Pages, Optimization",
    featuredImage: "/images/blog/blog-02.jpg",
    authorName: "Tom Wilson",
    authorImage: "/images/blog/author-02.png",
    authorDesignation: "CRO Expert & UX Specialist",
    createdAt: new Date("2025-12-08T15:20:00Z"),
    updatedAt: new Date("2025-12-08T15:20:00Z"),
    slug: "conversion-rate-optimization",
    views: 1580,
    metaTitle: "Conversion Rate Optimization: Double Your Sales | BizonDigital",
    metaDescription: "Master CRO techniques to optimize your website and landing pages for maximum conversions and revenue growth.",
    keywords: "conversion rate optimization, CRO, landing page optimization, A/B testing, conversion funnel",
    comment: null,
    images: "/images/blog/blog-02.jpg",
    highlightPoints: "A/B Testing, User Experience, Funnel Optimization, Analytics",
    notes: null,
    content: null,
    blogContent: "<div>Full CRO guide...</div>",
    ogTitle: "Conversion Rate Optimization: Double Your Sales",
    ogDescription: "Optimize your conversion rate and double your sales.",
    ogImage: "/images/blog/blog-02.jpg",
    ogUrl: "/blog-details/conversion-rate-optimization",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  },
  {
    id: 9,
    title: "Marketing Analytics: Data-Driven Decision Making",
    description: "Master marketing analytics to make informed decisions, measure campaign performance, and optimize your marketing ROI.",
    subtitle: "Harness the Power of Data for Marketing Success",
    category: "Marketing Analytics",
    tags: "Analytics, Data, Marketing, ROI, Metrics",
    featuredImage: "/images/blog/blog-03.jpg",
    authorName: "Daniel Lee",
    authorImage: "/images/blog/author-02.png",
    authorDesignation: "Marketing Analytics Expert",
    createdAt: new Date("2025-12-07T09:45:00Z"),
    updatedAt: new Date("2025-12-07T09:45:00Z"),
    slug: "marketing-analytics-guide",
    views: 1680,
    metaTitle: "Marketing Analytics: Data-Driven Decision Making | BizonDigital",
    metaDescription: "Learn how to use marketing analytics for data-driven decisions, measure campaign performance, and optimize marketing ROI.",
    keywords: "marketing analytics, data analytics, marketing metrics, ROI measurement, campaign analytics",
    comment: null,
    images: "/images/blog/blog-03.jpg",
    highlightPoints: "Key Metrics, Google Analytics, Attribution Models, Reporting",
    notes: null,
    content: null,
    blogContent: "<div>Full marketing analytics guide...</div>",
    ogTitle: "Marketing Analytics: Data-Driven Decision Making",
    ogDescription: "Make smarter marketing decisions with powerful analytics.",
    ogImage: "/images/blog/blog-03.jpg",
    ogUrl: "/blog-details/marketing-analytics-guide",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  },
  {
    id: 10,
    title: "Brand Building Strategies for Digital Success",
    description: "Create a memorable brand that resonates with your audience and stands out in the crowded digital marketplace.",
    subtitle: "Build a Brand That Customers Love",
    category: "Branding",
    tags: "Branding, Brand Strategy, Digital Marketing",
    featuredImage: "/images/blog/blog-01.jpg",
    authorName: "Sophie Martinez",
    authorImage: "/images/blog/author-03.png",
    authorDesignation: "Brand Strategy Director",
    createdAt: new Date("2025-12-06T14:00:00Z"),
    updatedAt: new Date("2025-12-06T14:00:00Z"),
    slug: "brand-building-strategies",
    views: 1920,
    metaTitle: "Brand Building Strategies for Digital Success | BizonDigital",
    metaDescription: "Learn how to create a memorable brand that resonates with your audience and stands out in the digital marketplace.",
    keywords: "brand building, brand strategy, brand identity, brand positioning, digital branding",
    comment: null,
    images: "/images/blog/blog-01.jpg",
    highlightPoints: "Brand Identity, Positioning, Storytelling, Consistency",
    notes: null,
    content: null,
    blogContent: "<div>Full brand building guide...</div>",
    ogTitle: "Brand Building Strategies for Digital Success",
    ogDescription: "Create a memorable brand that customers love.",
    ogImage: "/images/blog/blog-01.jpg",
    ogUrl: "/blog-details/brand-building-strategies",
    ogType: "article",
    articleSchemaJson: null,
    organizationSchemaJson: null
  }
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mode = (searchParams.get("mode") || "full").toLowerCase();
    const limitParam = parseInt(searchParams.get("limit") || "0", 10);
    const take = !Number.isNaN(limitParam) && limitParam > 0 && limitParam <= 100 ? limitParam : (mode === 'lite' ? 20 : undefined);

    // Try to fetch from database first
    let blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      take,
      select: mode === "lite" ? {
        id: true,
        title: true,
        slug: true,
        featuredImage: true,
        metaTitle: true,
        metaDescription: true,
        tags: true,
        category: true,
        createdAt: true,
      } : undefined
    });

    // If no blogs in database, return dummy data
    if (!blogs || blogs.length === 0) {
      return NextResponse.json(dummyBlogsData, { status: 200 });
    }

    return NextResponse.json(blogs, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching blogs:", error);
    // Return dummy data on error
    return NextResponse.json(dummyBlogsData, { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const norm = {
      title: data.title,
      slug: data.slug,
      blogContent: data.blogContent ?? data.blog_content,
      featuredImage: data.featuredImage ?? data.featured_image,
      category: data.category ?? data.category_id ?? data.category_name,
      metaTitle: data.metaTitle ?? data.meta_title,
      metaDescription: data.metaDescription ?? data.meta_description,
      keywords: Array.isArray(data.keywords) ? data.keywords.join(", ") : data.keywords,
      tags: Array.isArray(data.tags) ? data.tags.join(", ") : data.tags,
      ogTitle: data.ogTitle ?? data.og_title,
      ogDescription: data.ogDescription ?? data.og_description,
      ogImage: data.ogImage ?? data.og_image,
      ogUrl: data.ogUrl ?? data.og_url,
      ogType: data.ogType ?? data.og_type ?? "article",
      articleSchemaJson: data.articleSchemaJson ?? data.article_schema_json,
      organizationSchemaJson: data.organizationSchemaJson ?? data.organization_schema_json,
      description: data.description,
      subtitle: data.subtitle,
      comment: data.comment,
      views: parseInt(data.views) || 0,
      images: data.images,
      highlightPoints: data.highlightPoints,
      notes: data.notes,
      content: data.content,
      authorName: data.authorName,
      authorImage: data.authorImage,
      authorDesignation: data.authorDesignation,
      updatedAt: new Date().toISOString(),
    } as const;

    const newBlog = await prisma.blog.create({
      data: { ...norm },
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();

    const norm = {
      title: data.title,
      slug: data.slug,
      blogContent: data.blogContent ?? data.blog_content,
      featuredImage: data.featuredImage ?? data.featured_image,
      category: data.category ?? data.category_id ?? data.category_name,
      metaTitle: data.metaTitle ?? data.meta_title,
      metaDescription: data.metaDescription ?? data.meta_description,
      keywords: Array.isArray(data.keywords) ? data.keywords.join(", ") : data.keywords,
      tags: Array.isArray(data.tags) ? data.tags.join(", ") : data.tags,
      ogTitle: data.ogTitle ?? data.og_title,
      ogDescription: data.ogDescription ?? data.og_description,
      ogImage: data.ogImage ?? data.og_image,
      ogUrl: data.ogUrl ?? data.og_url,
      ogType: data.ogType ?? data.og_type ?? "article",
      articleSchemaJson: data.articleSchemaJson ?? data.article_schema_json,
      organizationSchemaJson: data.organizationSchemaJson ?? data.organization_schema_json,
      description: data.description,
      subtitle: data.subtitle,
      comment: data.comment,
      views: parseInt(data.views) || 0,
      images: data.images,
      highlightPoints: data.highlightPoints,
      notes: data.notes,
      content: data.content,
      authorName: data.authorName,
      authorImage: data.authorImage,
      authorDesignation: data.authorDesignation,
    } as const;

    const updatedBlog = await prisma.blog.update({
      where: { id: data.id },
      data: { ...norm },
    });

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id") || "0");

    await prisma.blog.delete({ where: { id } });

    return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
