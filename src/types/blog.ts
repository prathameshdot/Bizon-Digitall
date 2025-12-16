type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  // Additional fields from database
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
};

