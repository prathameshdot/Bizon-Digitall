-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "subtitle" TEXT,
    "category" TEXT,
    "comment" TEXT,
    "views" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT,
    "images" TEXT,
    "highlightPoints" TEXT,
    "notes" TEXT,
    "content" TEXT,
    "authorName" TEXT,
    "authorImage" TEXT,
    "authorDesignation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "articleSchemaJson" TEXT,
    "blogContent" TEXT,
    "featuredImage" TEXT,
    "keywords" TEXT,
    "metaDescription" TEXT,
    "metaTitle" TEXT,
    "ogDescription" TEXT,
    "ogImage" TEXT,
    "ogTitle" TEXT,
    "ogType" TEXT DEFAULT 'article',
    "ogUrl" TEXT,
    "organizationSchemaJson" TEXT,
    "slug" TEXT,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blog_slug_key" ON "Blog"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
