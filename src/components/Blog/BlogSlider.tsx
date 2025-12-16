"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogCard {
  id: number;
  title: string;
  slug?: string;
  paragraph: string;
  image: string;
  author: { name: string; image: string; designation: string };
  tags: string[];
  publishDate: string;
}

export default function BlogSlider() {
  const [items, setItems] = useState<BlogCard[]>([]);
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs?mode=lite&limit=6`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load blogs");

        const data = await res.json();

        const mapped = data.map((b: any) => ({
          id: b.id,
          title: b.title ?? "",
          slug: b.slug,
          paragraph: (b.metaDescription ?? "").replace(/<[^>]+>/g, ""),
          image: b.featuredImage || "/images/blog/blog-01.jpg",
          author: {
            name: b.authorName ?? "Team Bizon",
            image: b.authorImage || "/images/blog/author-01.png",
            designation: b.authorDesignation ?? "Contributor",
          },
          tags: Array.isArray(b.tags) ? b.tags : [],
          publishDate: b.createdAt ? new Date(b.createdAt).getFullYear().toString() : "",
        }));

        setItems(mapped);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % items.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [items.length]);

  const getSlide = (offset: number) => items[(current + offset + items.length) % items.length];

  if (error) {
    return (
      <div className="p-6 text-center text-red-600 bg-red-100 rounded-md my-16">
        <p>{error}</p>
        <button onClick={() => location.reload()} className="mt-4 px-4 py-2 bg-[#FF7A00] text-white rounded hover:bg-[#E66A00]">
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden mt-16 py-20 bg-gradient-to-r from-black via-gray-900 to-black px-6 md:px-10">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF7A00]">Best Blogs Today</h2>
            <p className="mt-4 text-gray-300">Discover the latest insights and trends in digital marketing.</p>
            <Link
              href="/blog#for-you"
              className="inline-block mt-6 px-6 py-3 bg-[#FF7A00] text-white rounded-full font-semibold hover:bg-[#E66A00] transition-colors"
            >
              See All Blogs
            </Link>
          </div>

          <div className="lg:col-span-8">
            {loading && items.length === 0 && <div className="text-white">Loading blogs...</div>}

            {items.length > 0 && (
              <div className="flex gap-4 justify-center">
                {[-1, 0, 1].map((offset) => {
                  const item = getSlide(offset);

                  return (
                    <article key={`${item.id}-${current}-${offset}`} className="bg-white rounded-xl overflow-hidden shadow-xl w-[230px]">
                      <Link href={`/blog-details/${item.slug}`} className="relative block h-[200px]">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                        {item.tags[0] && (
                          <span className="absolute top-3 right-3 z-10 inline-flex items-center justify-center rounded-full bg-[#FF7A00]/90 px-3 py-1 text-xs font-semibold text-white capitalize">
                            {item.tags[0]}
                          </span>
                        )}
                      </Link>
                      <div className="p-4">
                        <h3 className="font-bold mb-2 text-black line-clamp-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{item.paragraph}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{item.publishDate}</span>
                        </div>
                        <Link
                          href={`/blog-details/${item.slug}`}
                          className="mt-3 inline-block text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-[#FF7A00] transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
