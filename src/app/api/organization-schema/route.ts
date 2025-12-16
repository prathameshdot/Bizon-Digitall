import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const blogWithSchema = await prisma.blog.findFirst({
      where: {
        organizationSchemaJson: {
          not: null,
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
      select: {
        organizationSchemaJson: true,
      },
    });

    if (blogWithSchema && blogWithSchema.organizationSchemaJson) {
      const schema = JSON.parse(blogWithSchema.organizationSchemaJson);
      return NextResponse.json(schema, { status: 200 });
    }

    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bizon Digital",
      "url": "https://www.bizondigital.com",
      "logo": "https://www.bizondigital.com/images/logo/logo.png",
      "description": "Digital marketing and business solutions",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@bizondigital.com"
      }
    };

    return NextResponse.json(defaultSchema, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching organization schema:", error);
    return NextResponse.json(
      { error: "Failed to fetch organization schema" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const schemaData = await req.json();
    const schemaJson = JSON.stringify(schemaData);

    const existingBlog = await prisma.blog.findFirst({
      where: {
        organizationSchemaJson: {
          not: null,
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    if (existingBlog) {
      await prisma.blog.update({
        where: { id: existingBlog.id },
        data: {
          organizationSchemaJson: schemaJson,
          updatedAt: new Date(),
        },
      });
    } else {
      await prisma.blog.create({
        data: {
          title: "Organization Schema Reference",
          slug: `org-schema-ref-${Date.now()}`,
          organizationSchemaJson: schemaJson,
          updatedAt: new Date(),
        },
      });
    }

    return NextResponse.json(
      { message: "Organization schema saved successfully", schema: schemaData },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error saving organization schema:", error);
    return NextResponse.json(
      { error: "Failed to save organization schema" },
      { status: 500 }
    );
  }
}
