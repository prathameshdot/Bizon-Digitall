"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import EmailSubscribe from "@/components/EmailSubscribe";

interface Blog {
  id: number;
  title: string;
  description?: string;
  category?: string;
  tags?: string;
  featuredImage?: string;
  authorName?: string;
  authorImage?: string;
  authorDesignation?: string;
  createdAt: string;
  slug?: string;
  views?: number;
  shareCount?: number;
}

// Dummy digital marketing blogs
const dummyBlogs: Blog[] = [
  {
    id: 1,
    title: "SEO Strategies to Boost Your Website Traffic in 2025",
    description: "Discover the latest SEO techniques and strategies that will help increase your website's organic traffic and improve search engine rankings.",
    category: "Digital Marketing",
    tags: "SEO, Marketing",
    featuredImage: "/images/blog/blog-01.jpg",
    authorName: "Sarah Johnson",
    authorDesignation: "SEO Specialist",
    createdAt: "2025-12-15T10:00:00Z",
    slug: "seo-strategies-2025",
    views: 1250,
    shareCount: 85
  },
  {
    id: 2,
    title: "Social Media Marketing: Best Practices for 2025",
    description: "Learn how to leverage social media platforms effectively to build brand awareness, engage your audience, and drive conversions.",
    category: "Digital Marketing",
    tags: "Social Media, Marketing",
    featuredImage: "/images/blog/blog-02.jpg",
    authorName: "Mike Chen",
    authorDesignation: "Social Media Strategist",
    createdAt: "2025-12-14T09:30:00Z",
    slug: "social-media-marketing-2025",
    views: 980,
    shareCount: 62
  },
  {
    id: 3,
    title: "Content Marketing That Converts: A Complete Guide",
    description: "Master the art of creating compelling content that not only attracts visitors but also converts them into loyal customers.",
    category: "Content Marketing",
    tags: "Content, Marketing",
    featuredImage: "/images/blog/blog-03.jpg",
    authorName: "Emma Williams",
    authorDesignation: "Content Strategist",
    createdAt: "2025-12-13T14:20:00Z",
    slug: "content-marketing-guide",
    views: 1450,
    shareCount: 94
  },
  {
    id: 4,
    title: "Email Marketing Automation: Increase ROI by 300%",
    description: "Explore powerful email marketing automation strategies that can significantly boost your return on investment and customer engagement.",
    category: "Email Marketing",
    tags: "Email, Automation",
    featuredImage: "/images/blog/blog-01.jpg",
    authorName: "David Martinez",
    authorDesignation: "Email Marketing Expert",
    createdAt: "2025-12-12T11:45:00Z",
    slug: "email-marketing-automation",
    views: 876,
    shareCount: 53
  },
  {
    id: 5,
    title: "PPC Advertising: Maximize Your Ad Spend Efficiency",
    description: "Learn advanced PPC strategies to optimize your advertising budget, increase click-through rates, and maximize conversions.",
    category: "Paid Advertising",
    tags: "PPC, Advertising",
    featuredImage: "/images/blog/blog-02.jpg",
    authorName: "Lisa Anderson",
    authorDesignation: "PPC Specialist",
    createdAt: "2025-12-11T16:00:00Z",
    slug: "ppc-advertising-guide",
    views: 1120,
    shareCount: 71
  },
  {
    id: 6,
    title: "Influencer Marketing: Building Authentic Partnerships",
    description: "Discover how to collaborate with influencers effectively to expand your brand reach and build authentic connections with your target audience.",
    category: "Influencer Marketing",
    tags: "Influencer, Branding",
    featuredImage: "/images/blog/blog-03.jpg",
    authorName: "James Brown",
    authorDesignation: "Brand Strategist",
    createdAt: "2025-12-10T13:30:00Z",
    slug: "influencer-marketing-guide",
    views: 1340,
    shareCount: 88
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleBlogs, setVisibleBlogs] = useState(10);
  const [blogs, setBlogs] = useState<Blog[]>(dummyBlogs);

  const categories = [
    "All",
    "Digital Marketing",
    "Content Marketing",
    "Email Marketing",
    "Paid Advertising",
    "Influencer Marketing",
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        if (data && data.length > 0) {
          setBlogs(data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // Keep dummy data on error
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs by category
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category?.toLowerCase() === selectedCategory.toLowerCase());

  // Featured blog (first one)
  const featuredBlog = filteredBlogs[0];
  
  // Grid blogs (next 3)
  const gridBlogs = filteredBlogs.slice(1, 4);
  
  // Scrollable blogs (remaining - starting from index 4)
  const scrollableBlogs = filteredBlogs.slice(4);

  const handleShowMore = () => {
    setVisibleBlogs(prev => prev + 10);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (!featuredBlog) {
    return (
      <div className="bg-black min-h-screen pt-20 md:pt-24 lg:pt-28 flex items-center justify-center">
        <div className="text-white text-xl">No blogs available</div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-20 md:pt-24 lg:pt-28">
      {/* Section 1: Featured Blog with Categories */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Blog */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left: Image */}
            <div className="relative aspect-[16/12] lg:aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src={featuredBlog.featuredImage || "/images/blog/blog-01.jpg"}
                alt={featuredBlog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Right: Content */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {featuredBlog.title}
              </h1>
              <p className="text-gray-400 text-base sm:text-lg line-clamp-4">
                {featuredBlog.description || featuredBlog.title}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base">
                <div>
                  <span className="text-[#FF7A00] font-semibold">Category</span>
                  <p className="text-white capitalize">{featuredBlog.category || "General"}</p>
                </div>
                <div>
                  <span className="text-[#FF7A00] font-semibold">Publication Date</span>
                  <p className="text-white">{formatDate(featuredBlog.createdAt)}</p>
                </div>
                <div>
                  <span className="text-[#FF7A00] font-semibold">Author</span>
                  <p className="text-white">{featuredBlog.authorName || "Admin"}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{featuredBlog.views || 0}</span>
                </button>
                <button className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span className="text-sm">204</span>
                </button>
              </div>

              <Link
                href={`/blog-details/${featuredBlog.slug || featuredBlog.id}`}
                className="inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#FF7A00] hover:text-white transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Grid of 3 Blogs */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#FF7A00]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {gridBlogs.map((blog) => (
              <div key={blog.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#FF7A00]/50 transition-all duration-500 shadow-lg hover:shadow-2xl">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-t-2xl overflow-hidden">
                  <Image
                    src={blog.featuredImage || "/images/blog/blog-01.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 group-hover:text-[#FF7A00] transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 capitalize mb-5 text-sm">{blog.category || "General"}</p>

                  <div className="flex items-center gap-6 mb-5">
                    <button className="flex items-center gap-2 text-gray-700 hover:text-[#FF7A00] transition-colors text-sm">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{blog.views || 0}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-700 hover:text-[#FF7A00] transition-colors text-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span>{blog.shareCount || 0}</span>
                    </button>
                  </div>

                  <Link
                    href={`/blog-details/${blog.slug || blog.id}`}
                    className="inline-flex items-center gap-2 bg-white border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-[#FF7A00] hover:border-[#FF7A00] hover:text-white transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Scrollable Blog Grid with Gradient Header */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden" style={{backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 2px, transparent 2px)', backgroundSize: '40px 40px'}}>
        {/* Gradient Overlay for Title - Orange to Black */}
        <div className="absolute top-0 left-0 right-0 h-64 sm:h-80 md:h-96 bg-gradient-to-b from-[#FF7A00] via-[#FF7A00]/60 to-transparent opacity-50 pointer-events-none"></div>
        
        {/* Decorative Gradient Circles */}
        <div className="absolute top-20 -left-32 w-64 h-64 bg-gradient-to-br from-[#FF7A00]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-bl from-[#FF7A00]/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Curve Lines Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q 50 50 100 0' stroke='white' stroke-width='0.5' fill='none'/%3E%3Cpath d='M0 50 Q 50 100 100 50' stroke='white' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`}}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="mb-8 sm:mb-12">
            <span className="inline-block bg-[#FF7A00] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
              Featured Blogs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Latest Insights &amp; Articles
            </h2>
          </div>

          {/* Scrollable Blog Grid (2x10) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {scrollableBlogs.slice(0, visibleBlogs).map((blog, index) => (
              <div key={blog.id} className="group bg-gradient-to-br from-gray-900/50 via-black to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FF7A00]/50 transition-all duration-500 shadow-2xl hover:shadow-[#FF7A00]/20 backdrop-blur-sm">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={blog.featuredImage || "/images/blog/blog-01.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                </div>

                {/* Content - More spacing */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#FF7A00] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {blog.description || blog.title}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="text-gray-500 capitalize">{blog.category || "General"}</span>
                    <span className="text-gray-500">{formatDate(blog.createdAt)}</span>
                  </div>

                  <Link
                    href={`/blog-details/${blog.slug || blog.id}`}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-[#FF7A00] hover:text-white transition-all duration-300 text-sm shadow-lg hover:shadow-xl"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleBlogs < scrollableBlogs.length && (
            <div className="text-center">
              <button
                onClick={handleShowMore}
                className="bg-white text-black px-12 sm:px-16 py-4 sm:py-5 rounded-full font-bold hover:bg-[#FF7A00] hover:text-white transition-all duration-300 text-base sm:text-lg shadow-2xl hover:shadow-[#FF7A00]/50 hover:scale-105"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Email Subscribe Section */}
      <EmailSubscribe />
    </div>
  );
};

export default Blog;
