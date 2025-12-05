"use client";

import { useState } from "react";
import blogData from "@/components/Blog/blogData";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleBlogs, setVisibleBlogs] = useState(10);

  const categories = [
    "All",
    "Quantum Computing",
    "AI Ethics",
    "Space Exploration",
    "Biotechnology",
    "Renewable Energy",
  ];

  // Featured blog (first one)
  const featuredBlog = blogData[0];
  
  // Grid blogs (next 3)
  const gridBlogs = blogData.slice(1, 4);
  
  // Scrollable blogs (remaining - starting from index 4)
  const scrollableBlogs = blogData.slice(4);

  const handleShowMore = () => {
    setVisibleBlogs(prev => prev + 10);
  };

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
                src={featuredBlog.image}
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
                {featuredBlog.paragraph} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base">
                <div>
                  <span className="text-[#FF7A00] font-semibold">Category</span>
                  <p className="text-white capitalize">{featuredBlog.tags[0]}</p>
                </div>
                <div>
                  <span className="text-[#FF7A00] font-semibold">Publication Date</span>
                  <p className="text-white">{featuredBlog.publishDate}</p>
                </div>
                <div>
                  <span className="text-[#FF7A00] font-semibold">Author</span>
                  <p className="text-white">{featuredBlog.author.name}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">14k</span>
                </button>
                <button className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span className="text-sm">204</span>
                </button>
              </div>

              <Link
                href="/blog-details"
                className="inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#FF7A00] hover:text-white transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Grid of 3 Blogs */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" style={{backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#FF7A00]/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gridBlogs.map((blog) => (
              <div key={blog.id} className="group">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 sm:mb-6">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-[#FF7A00] transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 capitalize mb-4 text-sm sm:text-base">{blog.tags[0]}</p>

                <div className="flex items-center gap-4 mb-4">
                  <button className="flex items-center gap-2 text-black text-sm">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span>{Math.floor(Math.random() * 10) + 2}k</span>
                  </button>
                  <button className="flex items-center gap-2 text-black text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>{Math.floor(Math.random() * 100) + 20}</span>
                  </button>
                </div>

                <Link
                  href="/blog-details"
                  className="inline-flex items-center gap-2 bg-white border-2 border-black text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#FF7A00] hover:border-[#FF7A00] hover:text-white transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
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
              Featured Videos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Visual Insights for the<br />Modern Viewer
            </h2>
          </div>

          {/* Scrollable Blog Grid (2x10) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 sm:mb-12">
            {scrollableBlogs.slice(0, visibleBlogs).map((blog, index) => (
              <div key={blog.id} className="group bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-lg overflow-hidden border border-gray-700 hover:border-[#FF7A00] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FF7A00]/20">
                {/* Image with Play Button */}
                <div className="relative aspect-video">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                  
                  {/* Play Button */}
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>

                  {/* Duration */}
                  <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white px-1.5 py-0.5 rounded text-[10px]">
                    {Math.floor(Math.random() * 5) + 1}:3{Math.floor(Math.random() * 6)}min
                  </span>
                </div>

                {/* Content */}
                <div className="p-2.5">
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-1.5 line-clamp-2 group-hover:text-[#FF7A00] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] sm:text-xs mb-1.5 sm:mb-2 line-clamp-1">
                    {blog.paragraph}
                  </p>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-xs text-gray-500 capitalize">{blog.tags[0]}</span>
                    <span className="text-[10px] sm:text-xs text-gray-500">{blog.publishDate}</span>
                  </div>

                  <Link
                    href="/blog-details"
                    className="inline-flex items-center gap-1 bg-white text-black px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold hover:bg-[#FF7A00] hover:text-white transition-all duration-300 text-[11px] sm:text-xs shadow-sm hover:shadow-md"
                  >
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="bg-white text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold hover:bg-[#FF7A00] hover:text-white border-2 border-white hover:border-[#FF7A00] transition-all duration-300 text-sm sm:text-base shadow-xl hover:shadow-2xl"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
