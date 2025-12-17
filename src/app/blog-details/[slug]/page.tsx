import { headers } from "next/headers";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EmailSubscribe from "@/components/EmailSubscribe";
import BlogInteraction from "@/components/Blog/BlogInteraction";

interface BlogData {
  id: number;
  title: string;
  paragraph?: string;
  image?: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  description?: string;
  keywords?: string;
  featuredImage?: string;
  images?: string;
  blogContent?: string;
  content?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  createdAt?: string;
  authorName?: string;
  authorImage?: string;
  authorDesignation?: string;
  articleSchemaJson?: string;
  organizationSchemaJson?: string;
  comment?: number;
  tags?: string[] | string;
  likes?: number;
  shares?: number;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic metadata generation
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;

  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto =
    h.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");

  const base = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;
  const url = `${base}/api/blogs/${slug}`;

  let blog: BlogData | null = null;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (res.ok) blog = await res.json();
  } catch {}

  if (!blog) {
    return {
      title: "Blog Not Found | Bizon Digital",
      description: "Blog post not found",
    };
  }

  return {
    metadataBase: new URL(base),
    title: blog.metaTitle || blog.title || "Blog Post | Bizon Digital",
    description:
      blog.metaDescription || blog.description || "Read our latest blog post",
    keywords: blog.keywords || "",
    openGraph: {
      title: blog.ogTitle || blog.metaTitle || blog.title,
      description:
        blog.ogDescription || blog.metaDescription || blog.description,
      images: blog.ogImage ? [{ url: blog.ogImage }] : [],
      url: blog.ogUrl || `${base}/blog-details/${blog.slug || blog.id}`,
      type: (blog.ogType as any) || "article",
    },
  };
}

const BlogDetailsPage = async (props: PageProps) => {
  const { slug } = await props.params;

  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto =
    h.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");

  const base = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;
  const url = `${base}/api/blogs/${slug}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    return (
      <section className="pt-[150px] pb-[120px] bg-white text-black">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
            <p className="text-gray-600 mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              href="/blog"
              className="inline-block rounded-full bg-[#FF7A00] px-6 py-3 text-white font-semibold hover:bg-[#E66A00] transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const blogData: BlogData = await res.json();

  const blog = {
    ...blogData,
    blogContent: blogData.blogContent || blogData.content || "",
    featuredImage:
      blogData.featuredImage ||
      blogData.ogImage ||
      (blogData.images?.startsWith("http")
        ? blogData.images
        : `/images/blog/${blogData.images || "default.jpg"}`),
    tags: Array.isArray(blogData.tags)
      ? blogData.tags
      : String(blogData.tags || "")
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
    publishDate: new Date(blogData.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: {
      name: blogData.authorName || "Anonymous",
      image: blogData.authorImage?.startsWith("http")
        ? blogData.authorImage
        : `/images/blog/${blogData.authorImage || "default-author.jpg"}`,
      designation: blogData.authorDesignation || "Writer",
    },
  };

  return (
    <>
      {/* Structured Data (Schema.org) */}
      {blog.articleSchemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: blog.articleSchemaJson }}
        />
      )}
      {blog.organizationSchemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: blog.organizationSchemaJson }}
        />
      )}

      <section className="bg-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-10/12 xl:w-8/12">
              <div>
                {/* Title as H1 */}
                <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-black">
                  {blog.title}
                </h1>

                {/* Featured Image */}
                {blog.featuredImage && (
                  <div className="relative mb-6 sm:mb-8 h-64 sm:h-80 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-lg sm:rounded-xl shadow-lg">
                    <Image
                      src={blog.featuredImage}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Meta Info */}
                <div className="border-b border-gray-200 mb-6 sm:mb-8 md:mb-10 flex flex-wrap items-center gap-4 sm:gap-6 pb-4 sm:pb-6">
                  <div className="flex items-center">
                    <p className="text-gray-600 flex items-center text-sm sm:text-base font-medium">
                      <span className="mr-2 sm:mr-3">
                        <svg
                          width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        {blog.publishDate}
                      </p>
                  </div>
                </div>

                {/* Tags */}
                {blog.tags.length > 0 && (
                  <div className="mb-6 sm:mb-8 md:mb-10 flex flex-wrap gap-2 sm:gap-3">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-[#FF7A00]/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#FF7A00] border border-[#FF7A00]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Blog Content */}
                <div
                  className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-8 sm:mb-10 md:mb-12"
                  dangerouslySetInnerHTML={{ __html: blog.blogContent }}
                />

                {/* Like and Share Buttons */}
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <BlogInteraction 
                    slug={blog.slug || String(blog.id)} 
                    variant="full"
                  />
                </div>

                {/* Back to Blog Button */}
                <div className="mt-8 sm:mt-10 md:mt-12">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold hover:bg-[#FF7A00] transition-colors shadow-md hover:shadow-lg"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Subscribe Section */}
      <EmailSubscribe />
    </>
  );
};

export default BlogDetailsPage;
