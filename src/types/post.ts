import { PortableTextBlock } from "sanity";

export type SanityAuthor = {
  name: string;
  image?: unknown;
};

export type RelatedPost = {
  title: string;
  slug: string;
  publishedAt?: string;
};



export type SanityPost = {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  _updatedAt?: string;
  category?: string;
  mainImage?: unknown;
  body: PortableTextBlock[];

  related?: RelatedPost[];
};