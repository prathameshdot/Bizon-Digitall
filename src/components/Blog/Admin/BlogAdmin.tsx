"use client";

import { useState, useEffect } from "react";
import { slugify } from "@/utils/slugify";
import RichTextEditor from "./RichTextEditor";  
import Image from "next/image";

type Blog = {
  id: number;
  title: string;
  slug?: string;
  blogContent?: string;
  featuredImage?: string;
  category?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  tags?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  articleSchemaJson?: string;
  organizationSchemaJson?: string;
  createdAt?: string;
  updatedAt?: string;
  description?: string;
  subtitle?: string;
  comment?: string;
  views?: string;
  images?: string;
  highlightPoints?: string;
  notes?: string;
  content?: string;
  authorName?: string;
  authorImage?: string;
  authorDesignation?: string;
};

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [savedOrgSchema, setSavedOrgSchema] = useState<string>("");
  const [featuredImageFile, setFeaturedImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [category, setCategory] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tags, setTags] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [ogUrl, setOgUrl] = useState("");
  const [ogType, setOgType] = useState("article");
  const [articleSchemaJson, setArticleSchemaJson] = useState("");
  const [organizationSchemaJson, setOrganizationSchemaJson] = useState("");
  
  const [description, setDescription] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [comment, setComment] = useState("");
  const [views, setViews] = useState("");
  const [images, setImages] = useState("");
  const [highlightPoints, setHighlightPoints] = useState("");
  const [notes, setNotes] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [authorDesignation, setAuthorDesignation] = useState("");

  useEffect(() => {
    fetchBlogs();
    loadSavedOrgSchema();
  }, []);

  useEffect(() => {
    if (title && !ogTitle) setOgTitle(title);
    if (metaDescription && !ogDescription) setOgDescription(metaDescription);
    if (featuredImage && !ogImage) setOgImage(featuredImage);
    if (slug && !ogUrl) setOgUrl(`${window.location.origin}/blog-details/${slug}`);
  }, [title, ogTitle, metaDescription, ogDescription, featuredImage, ogImage, slug, ogUrl]);

  const loadSavedOrgSchema = async () => {
    try {
      const res = await fetch("/api/organization-schema");
      const data = await res.json();
      setSavedOrgSchema(JSON.stringify(data, null, 2));
      setOrganizationSchemaJson(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Failed to load organization schema:", error);
    }
  };

  const saveOrganizationSchema = async () => {
    try {
      const schemaObj = JSON.parse(organizationSchemaJson);
      const res = await fetch("/api/organization-schema", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(schemaObj),
      });
      if (res.ok) {
        alert("Organization Schema saved successfully! It will be used for future blogs.");
        setSavedOrgSchema(organizationSchemaJson);
      }
    } catch (error) {
      alert("Error saving schema. Please check JSON format.");
    }
  };

  const handleFeaturedImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setFeaturedImage(imageUrl);
        if (!ogImage) setOgImage(imageUrl);
      };
      reader.readAsDataURL(file);
      setFeaturedImageFile(file);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs?mode=full");
      const data = await res.json();
      
      // Ensure data is an array
      if (Array.isArray(data)) {
        setBlogs(data);
      } else {
        console.error("API did not return an array:", data);
        setBlogs([]);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      setBlogs([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const blogData = {
        title,
        slug,
        blogContent,
        featuredImage,
        category,
        metaTitle,
        metaDescription,
        keywords,
        tags,
        ogTitle,
        ogDescription,
        ogImage,
        ogUrl,
        ogType,
        articleSchemaJson,
        organizationSchemaJson,
        description,
        subtitle,
        comment,
        views: views ? parseInt(views) : 0,
        images,
        highlightPoints,
        notes,
        content,
        authorName,
        authorImage,
        authorDesignation
      };

      let response;
      if (editId !== null) {
        response = await fetch("/api/blogs", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editId, ...blogData }),
        });
        setEditId(null);
      } else {
        response = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blogData),
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save blog');
      }

      alert(editId !== null ? 'Blog updated successfully!' : 'Blog published successfully!');
      await fetchBlogs();

      // Reset form
      setTitle("");
      setSlug("");
      setBlogContent("");
      setFeaturedImage("");
      setFeaturedImageFile(null);
      setCategory("");
      setMetaTitle("");
      setMetaDescription("");
      setKeywords("");
      setTags("");
      setOgTitle("");
      setOgDescription("");
      setOgImage("");
      setOgUrl("");
      setOgType("article");
      setArticleSchemaJson("");
      setOrganizationSchemaJson("");
      setDescription("");
      setSubtitle("");
      setComment("");
      setViews("");
      setImages("");
      setHighlightPoints("");
      setNotes("");
      setContent("");
      setAuthorName("");
      setAuthorImage("");
      setAuthorDesignation("");
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Error: ' + (error instanceof Error ? error.message : 'Failed to save blog'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditId(blog.id);
    setTitle(blog.title || "");
    setSlug(blog.slug || "");
    setBlogContent(blog.blogContent || "");
    setFeaturedImage(blog.featuredImage || "");
    setCategory(blog.category || "");
    setMetaTitle(blog.metaTitle || "");
    setMetaDescription(blog.metaDescription || "");
    setKeywords(blog.keywords || "");
    setTags(blog.tags || "");
    setOgTitle(blog.ogTitle || "");
    setOgDescription(blog.ogDescription || "");
    setOgImage(blog.ogImage || "");
    setOgUrl(blog.ogUrl || "");
    setOgType(blog.ogType || "article");
    setArticleSchemaJson(blog.articleSchemaJson || "");
    setOrganizationSchemaJson(blog.organizationSchemaJson || "");
    setDescription(blog.description || "");
    setSubtitle(blog.subtitle || "");
    setComment(blog.comment || "");
    setViews(blog.views || "");
    setImages(blog.images || "");
    setHighlightPoints(blog.highlightPoints || "");
    setNotes(blog.notes || "");
    setContent(blog.content || "");
    setAuthorName(blog.authorName || "");
    setAuthorImage(blog.authorImage || "");
    setAuthorDesignation(blog.authorDesignation || "");
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/blogs?id=${id}`, { method: "DELETE" });
    fetchBlogs();
  };

  return (
    <div className="mt-15 min-h-screen bg-white p-6 text-black">
      <h1 className="mb-4 text-2xl font-bold text-black">📝 Blog Admin Panel</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4 rounded-md border border-gray-300 bg-white p-6 shadow-md text-black">
        <h2 className="text-2xl font-bold mb-6 text-black">Create Blog</h2>
        
        <div>
          <label className="block mb-2 font-semibold text-black">
            Title <span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            placeholder="Enter blog title" 
            value={title} 
            onChange={(e) => {
              setTitle(e.target.value);
              if (!slug || editId === null) {
                setSlug(slugify(e.target.value));
              }
            }} 
            className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
            required 
            autoComplete="off" 
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-black">
            Slug <span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            placeholder="url-friendly-slug" 
            value={slug} 
            onChange={(e) => setSlug(e.target.value)} 
            className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
            required
            autoComplete="off" 
          />
          <p className="text-xs text-gray-500 mt-1">Auto-generated from title, but editable.</p>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-black">SEO Title</label>
          <input 
            type="text" 
            placeholder="Enter SEO title" 
            value={metaTitle} 
            onChange={(e) => setMetaTitle(e.target.value)} 
            className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
            autoComplete="off" 
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-black">Tags</label>
          <input 
            type="text" 
            placeholder="Enter tags separated by commas (e.g. tag1, tag2)" 
            value={tags} 
            onChange={(e) => setTags(e.target.value)} 
            className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
            autoComplete="off" 
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-black">Industry</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="w-full rounded-md border border-gray-300 p-3 text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
          >
            <option value="">Select</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Retail">Retail</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <RichTextEditor 
          label="Blog Content" 
          value={blogContent} 
          onChange={setBlogContent}
          required={true}
        />

        <div>
          <label className="block mb-2 font-semibold text-black">Featured Image</label>
          <div className="space-y-2">
            <input 
              type="text" 
              placeholder="Enter image URL" 
              value={featuredImage} 
              onChange={(e) => {
                setFeaturedImage(e.target.value);
                if (!ogImage) setOgImage(e.target.value);
              }} 
              className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
              autoComplete="off" 
            />
            <div className="text-center text-gray-500 text-sm">OR</div>
            <label className="cursor-pointer w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 block text-center">
              📤 Upload from Device
              <input 
                type="file" 
                className="hidden" 
                accept="image/*" 
                onChange={handleFeaturedImageUpload}
              />
            </label>
          </div>
          {featuredImage && (
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-1">Preview:</p>
              <div className="relative h-40 w-full rounded border border-gray-300 overflow-hidden">
                <Image 
                  src={featuredImage} 
                  alt="Featured Preview"
                  fill
                  className="h-full w-full object-cover relative z-10" 
                  onLoad={(e) => {
                    const loadingDiv = e.currentTarget.nextElementSibling as HTMLElement;
                    if (loadingDiv) {
                      loadingDiv.style.display = 'none';
                    }
                  }}
                  onError={(e) => {
                    const loadingDiv = e.currentTarget.nextElementSibling as HTMLElement;
                    if (loadingDiv) {
                      loadingDiv.innerHTML = '<div class="flex items-center justify-center h-full text-red-500"><span>❌ Failed to load image</span></div>';
                      loadingDiv.classList.remove('animate-pulse', 'bg-gray-200');
                      loadingDiv.classList.add('bg-red-50');
                    }
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-0">
                  <span className="text-gray-500">Loading...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-2 border-[#FF7A00] rounded-lg p-4 bg-orange-50">
          <h3 className="text-lg font-bold text-black mb-4">🔍 SEO Settings</h3>
          
          <div className="mb-3">
            <label className="block mb-2 font-semibold text-black">SEO Meta Title</label>
            <input 
              type="text" 
              placeholder="Enter SEO title for search engines" 
              value={metaTitle} 
              onChange={(e) => setMetaTitle(e.target.value)} 
              className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] bg-white" 
              autoComplete="off" 
            />
            <p className="text-xs text-gray-600 mt-1">Recommended: 50-60 characters</p>
          </div>

          <div className="mb-3">
            <label className="block mb-2 font-semibold text-black">SEO Meta Description</label>
            <textarea 
              placeholder="Enter SEO description for search engines" 
              value={metaDescription} 
              onChange={(e) => {
                setMetaDescription(e.target.value);
                if (!ogDescription) setOgDescription(e.target.value);
              }} 
              className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] bg-white" 
              rows={3} 
              autoComplete="off" 
            />
            <p className="text-xs text-gray-600 mt-1">Recommended: 150-160 characters</p>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-black">SEO Keywords</label>
            <input 
              type="text" 
              placeholder="keyword1, keyword2, keyword3" 
              value={keywords} 
              onChange={(e) => setKeywords(e.target.value)} 
              className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] bg-white" 
              autoComplete="off" 
            />
            <p className="text-xs text-gray-600 mt-1">Separate keywords with commas</p>
          </div>
        </div>

        <details className="mt-6 border border-gray-300 rounded-md">
          <summary className="cursor-pointer bg-gray-50 p-4 font-semibold text-black hover:bg-gray-100">
            Advanced Settings (Open Graph & Schema)
          </summary>
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-bold text-black mb-3">Open Graph Tags</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-black">OG Title</label>
                <input 
                  type="text" 
                  placeholder="Social media title" 
                  value={ogTitle} 
                  onChange={(e) => setOgTitle(e.target.value)} 
                  className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
                  autoComplete="off" 
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-black">OG Image URL</label>
                <input 
                  type="text" 
                  placeholder="Social media image URL" 
                  value={ogImage} 
                  onChange={(e) => setOgImage(e.target.value)} 
                  className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
                  autoComplete="off" 
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-black">OG Description</label>
              <textarea 
                placeholder="Social media description" 
                value={ogDescription} 
                onChange={(e) => setOgDescription(e.target.value)} 
                className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
                rows={2} 
                autoComplete="off" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-black">OG URL</label>
                <input 
                  type="text" 
                  placeholder="Canonical URL" 
                  value={ogUrl} 
                  onChange={(e) => setOgUrl(e.target.value)} 
                  className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
                  autoComplete="off" 
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-black">OG Type</label>
                <input 
                  type="text" 
                  placeholder="article" 
                  value={ogType} 
                  onChange={(e) => setOgType(e.target.value)} 
                  className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
                  autoComplete="off" 
                />
              </div>
            </div>

            <h3 className="text-lg font-bold text-black mb-3 mt-6">Schema JSON (Structured Data)</h3>

            <div>
              <label className="block mb-2 font-semibold text-black">Article Schema JSON</label>
              <textarea 
                placeholder='{"@context":"https://schema.org","@type":"Article",...}' 
                value={articleSchemaJson} 
                onChange={(e) => setArticleSchemaJson(e.target.value)} 
                className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
                rows={6} 
                autoComplete="off" 
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-black">Organization Schema JSON</label>
              <div className="flex gap-2 mb-2">
                <button 
                  type="button"
                  onClick={saveOrganizationSchema}
                  className="px-4 py-2 bg-[#FF7A00] text-white rounded hover:bg-[#E66A00] text-sm"
                >
                  💾 Save as Default
                </button>
                <button 
                  type="button"
                  onClick={() => setOrganizationSchemaJson(savedOrgSchema)}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm"
                >
                  📋 Load Saved
                </button>
              </div>
              <textarea 
                placeholder='{"@context":"https://schema.org","@type":"Organization",...}' 
                value={organizationSchemaJson} 
                onChange={(e) => setOrganizationSchemaJson(e.target.value)} 
                className="w-full rounded-md border border-gray-300 p-3 text-black placeholder-gray-400 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00]" 
                rows={6} 
                autoComplete="off" 
              />
              <p className="text-xs text-gray-500 mt-1">
                💡 Save this schema to reuse for all future blogs. Click &quot;Load Saved&quot; to use the default schema.
              </p>
            </div>
          </div>
        </details>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`rounded-md px-8 py-3 text-white font-semibold transition-colors ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#FF7A00] hover:bg-[#E66A00]'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {editId !== null ? "Updating..." : "Publishing..."}
              </span>
            ) : (
              editId !== null ? "Update" : "Publish"
            )}
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-4 text-black">All Blog Posts</h2>
        <table className="w-full border border-gray-300 text-black text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Slug</th>
              <th className="border border-gray-300 p-2">Content Preview</th>
              <th className="border border-gray-300 p-2">Featured Image</th>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Meta Title</th>
              <th className="border border-gray-300 p-2">Keywords</th>
              <th className="border border-gray-300 p-2">Tags</th>
              <th className="border border-gray-300 p-2">Created Date</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{blog.id}</td>
                <td className="border border-gray-300 p-2 max-w-xs truncate">{blog.title}</td>
                <td className="border border-gray-300 p-2 max-w-xs truncate">
                  {blog.slug ? (
                    <a 
                      href={`/blog-details/${blog.slug}`}
                      target="_blank"
                      className="text-[#FF7A00] hover:underline"
                    >
                      {blog.slug}
                    </a>
                  ) : '-'}
                </td>
                <td className="border border-gray-300 p-2 max-w-md">
                  <div className="line-clamp-2" dangerouslySetInnerHTML={{ __html: blog.blogContent || blog.description || '-' }}></div>
                </td>
                <td className="border border-gray-300 p-2">
                  {blog.featuredImage ? (
                    <Image 
                      src={blog.featuredImage}
                      width={48}
                      height={48}
                      alt="Featured"
                      className="object-cover rounded"
                      unoptimized
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  ) : '-'}
                </td>
                <td className="border border-gray-300 p-2">{blog.category || '-'}</td>
                <td className="border border-gray-300 p-2 max-w-xs truncate">{blog.metaTitle || '-'}</td>
                <td className="border border-gray-300 p-2 max-w-xs truncate">{blog.keywords || '-'}</td>
                <td className="border border-gray-300 p-2 max-w-xs truncate">{blog.tags || '-'}</td>
                <td className="border border-gray-300 p-2 whitespace-nowrap">
                  {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : '-'}
                </td>
                <td className="space-x-2 border border-gray-300 p-2 whitespace-nowrap">
                  <button className="rounded-md bg-[#FF7A00] px-2 py-1 text-white hover:bg-[#E66A00]" onClick={() => handleEdit(blog)}>✏️ Edit</button>
                  <button className="rounded-md bg-red-600 px-2 py-1 text-white hover:bg-red-700" onClick={() => handleDelete(blog.id)}>🗑️ Delete</button>
                  {blog.slug && (
                    <a 
                      href={`/blog-details/${blog.slug}`}
                      target="_blank"
                      className="inline-block rounded-md bg-black px-2 py-1 text-white hover:bg-gray-800"
                    >
                      👁️ View
                    </a>
                  )}
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan={11} className="p-4 text-center text-gray-500">No blogs added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
