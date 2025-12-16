"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  "All",
  "Technology",
  "Marketing",
  "Business",
  "Design",
  "More",
] as const;

const ReadMoreLink = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const href = `/blog-details/${slug}`;
  return (
    <Link
      prefetch
      href={href}
      onMouseEnter={() => router.prefetch(href)}
      className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white hover:bg-[#FF7A00] transition-colors"
    >
      Read More
    </Link>
  );
};

const ForYou = () => {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/blogs?mode=lite&limit=20`, {
          signal: controller.signal,
          cache: 'no-store',
          headers: { 'Accept': 'application/json' },
        });
        if (!res.ok) throw new Error(`Blogs request failed (${res.status})`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('Unexpected blogs payload');
        
        const mapped = data.map((b: any) => ({
          id: b.id,
          title: (b.title || '').trim(),
          slug: b.slug,
          paragraph: (b.metaDescription || b.description || '').replace(/<[^>]+>/g, ''),
          image: b.featuredImage && typeof b.featuredImage === 'string' && b.featuredImage.trim().length > 0
            ? b.featuredImage
            : (b.images && typeof b.images === 'string' && b.images.trim().length > 0
              ? (b.images.startsWith('http') ? b.images : `/images/blog/${b.images}`)
              : '/images/blog/blog-01.jpg'),
          tags: Array.isArray(b.tags)
            ? b.tags
            : String(b.tags || '').split(',').map((t) => t.trim()).filter(Boolean),
          publishDate: b.createdAt ? new Date(b.createdAt).toLocaleDateString() : '',
        }));
        setBlogs(mapped);
      } catch (e: any) {
        if (e.name === 'AbortError') return;
        console.error('Error fetching blogs:', e);
        setError(e.message || 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, []);

  const trending = blogs.slice(0, 4);
  const basePosts = blogs;

  const posts = useMemo(() => {
    const tagIncludes = (tags: string[], keys: string[]) =>
      tags.some((t) => keys.includes(t.toLowerCase()));

    const applyQuery = (arr: typeof basePosts) =>
      arr.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

    if (active === "All" || active === "More") return applyQuery(basePosts);
    if (active === "Technology")
      return applyQuery(
        basePosts.filter((p) =>
          tagIncludes(p.tags, ["tech", "computer", "technology"]),
        ),
      );
    if (active === "Marketing")
      return applyQuery(
        basePosts.filter((p) =>
          tagIncludes(p.tags, ["marketing", "seo", "digital"]),
        ),
      );
    if (active === "Business")
      return applyQuery(
        basePosts.filter((p) => tagIncludes(p.tags, ["business"])),
      );
    if (active === "Design")
      return applyQuery(
        basePosts.filter((p) => tagIncludes(p.tags, ["design", "ui", "ux"])),
      );
    return applyQuery(basePosts);
  }, [active, basePosts, query]);

  if (error) {
    return (
      <section className="relative bg-white py-10 md:py-14">
        <div className="container px-8 md:px-16 xl:px-20">
          <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-red-700">
            <h2 className="text-xl font-semibold mb-2">Blogs unavailable</h2>
            <p className="text-sm mb-4">{error}</p>
            <button
              onClick={() => { setError(null); setBlogs([]); }}
              className="rounded-full bg-[#FF7A00] px-4 py-2 text-sm font-semibold text-white hover:bg-[#E66A00]"
            >Retry</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="for-you" className="relative bg-white py-10 md:py-14">
      <div className="container px-8 md:px-16 xl:px-20">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-black md:text-4xl">
              For You
            </h2>
            <p className="text-gray-600">
              Personalized blog recommendations
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search blogs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-gray-300 bg-white px-6 py-2 pr-10 text-sm text-black placeholder-gray-500 focus:border-[#FF7A00] focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 md:w-64"
            />
            <svg
              className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-[#FF7A00] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Content - 8 columns */}
          <div className="lg:col-span-8">
            {loading && blogs.length === 0 && (
              <div className="py-10 text-center text-gray-500">
                Loading blogs...
              </div>
            )}

            {posts.length === 0 && !loading && (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
                <p className="text-gray-600">No blogs found matching your criteria.</p>
              </div>
            )}

            {/* Featured Blog - First One Large */}
            {posts.length > 0 && (
              <article className="mb-8 overflow-hidden rounded-2xl bg-white shadow-lg">
                <Link href={`/blog-details/${posts[0].slug}`} className="relative block h-[300px] md:h-[400px]">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {posts[0].tags[0] && (
                    <span className="absolute top-4 right-4 rounded-full bg-[#FF7A00] px-4 py-2 text-sm font-semibold text-white capitalize shadow-md">
                      {posts[0].tags[0]}
                    </span>
                  )}
                </Link>
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-black hover:text-[#FF7A00] transition-colors">
                    <Link href={`/blog-details/${posts[0].slug}`}>
                      {posts[0].title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-gray-600 line-clamp-2">
                    {posts[0].paragraph}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {posts[0].publishDate}
                    </span>
                    <ReadMoreLink slug={posts[0].slug} />
                  </div>
                </div>
              </article>
            )}

            {/* Rest of Blogs - Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts.slice(1, visibleCount).map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  <Link href={`/blog-details/${post.slug}`} className="relative block h-[200px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    {post.tags[0] && (
                      <span className="absolute top-3 right-3 rounded-full bg-[#FF7A00]/90 px-3 py-1 text-xs font-semibold text-white capitalize">
                        {post.tags[0]}
                      </span>
                    )}
                  </Link>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-bold text-black line-clamp-2 hover:text-[#FF7A00] transition-colors">
                      <Link href={`/blog-details/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                      {post.paragraph}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {post.publishDate}
                      </span>
                      <ReadMoreLink slug={post.slug} />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < posts.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="rounded-full bg-[#FF7A00] px-8 py-3 font-semibold text-white hover:bg-[#E66A00] transition-colors shadow-md"
                >
                  Load More
                </button>
              </div>
            )}
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="lg:col-span-4">
            {/* Trending */}
            <div className="mb-8 rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-black">
                Trending Now
              </h3>
              <div className="space-y-4">
                {trending.map((post, idx) => (
                  <Link
                    key={post.id}
                    href={`/blog-details/${post.slug}`}
                    className="group flex gap-3 rounded-lg p-2 hover:bg-gray-100 transition-colors"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1 text-sm font-semibold text-black line-clamp-2 group-hover:text-[#FF7A00]">
                        {post.title}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {post.publishDate}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            {blogs.length > 0 && (
              <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(
                    new Set(blogs.flatMap((b) => b.tags).slice(0, 10))
                  ).map((tag) => (
                    <span
                      key={tag}
                      className="cursor-pointer rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-[#FF7A00] hover:text-white hover:border-[#FF7A00] transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
