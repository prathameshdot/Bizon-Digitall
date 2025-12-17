import { NextRequest, NextResponse } from 'next/server';
import prisma from "../../../../../lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json(
        { error: 'Blog slug is required' },
        { status: 400 }
      );
    }

    const blog = await prisma.blog.findUnique({
      where: { slug },
      select: {
        likes: true,
        shares: true,
      },
    });

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      likes: blog.likes || 0,
      shares: blog.shares || 0,
    });
  } catch (error) {
    console.error('Error fetching blog interactions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch interactions' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { slug, type } = await request.json();

    if (!slug || !type) {
      return NextResponse.json(
        { error: 'Blog slug and interaction type are required' },
        { status: 400 }
      );
    }

    if (type !== 'like' && type !== 'share') {
      return NextResponse.json(
        { error: 'Invalid interaction type. Must be "like" or "share"' },
        { status: 400 }
      );
    }

    const updateData = type === 'like' 
      ? { likes: { increment: 1 } }
      : { shares: { increment: 1 } };

    const updatedBlog = await prisma.blog.update({
      where: { slug },
      data: updateData,
      select: {
        likes: true,
        shares: true,
      },
    });

    return NextResponse.json({
      success: true,
      likes: updatedBlog.likes || 0,
      shares: updatedBlog.shares || 0,
    });
  } catch (error: any) {
    console.error('Error updating blog interactions:', error);
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to update interactions' },
      { status: 500 }
    );
  }
}
