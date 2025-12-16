import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export const revalidate = 60;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mode = (searchParams.get("mode") || "full").toLowerCase();
    const limitParam = parseInt(searchParams.get("limit") || "0", 10);
    const take = !Number.isNaN(limitParam) && limitParam > 0 && limitParam <= 100 ? limitParam : (mode === 'lite' ? 20 : undefined);

    if (mode === "lite") {
      const blogsLite = await prisma.blog.findMany({
        orderBy: { createdAt: "desc" },
        take,
        select: {
          id: true,
          title: true,
          slug: true,
          featuredImage: true,
          metaTitle: true,
          metaDescription: true,
          tags: true,
          category: true,
          createdAt: true,
        },
      });

      return NextResponse.json(blogsLite, { status: 200 });
    }

    // Fetch all blog data
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      take,
    });

    return NextResponse.json(blogs, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching blogs:", error);
    // Return empty array instead of error object to prevent frontend crashes
    return NextResponse.json([], { status: 200 });
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
