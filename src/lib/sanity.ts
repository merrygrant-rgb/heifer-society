// Sanity CMS Configuration
// You'll need to create a free Sanity account at sanity.io
// Then replace these values with your own

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// TODO: Replace with your actual Sanity project details after signing up
// Get these from your Sanity project dashboard: https://www.sanity.io/manage
export const sanityConfig = {
  projectId: 'your-project-id', // Replace with your project ID
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: true,
  token: undefined, // Only needed for write operations
};

export const sanityClient = createClient(sanityConfig);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// ============================================
// CONTENT TYPES (Schemas you'll create in Sanity)
// ============================================

export interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  price: number;
  compareAtPrice?: number;
  images: any[];
  category: 'apparel' | 'accessories' | 'digital';
  tags: string[];
  inStock: boolean;
  featured: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any[]; // Portable Text
  publishedAt: string;
  category: string;
  author: string;
  featuredImage?: any;
  tags: string[];
}

export interface CoachingService {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  fullDescription: any[]; // Portable Text
  price: string;
  duration: string;
  format: string;
  includes: string[];
  isAvailable: boolean;
  featured: boolean;
  bookingLink?: string;
}

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getProducts(): Promise<Product[]> {
  return sanityClient.fetch(`
    *[_type == "product"] | order(featured desc, title asc) {
      _id,
      title,
      slug,
      description,
      price,
      compareAtPrice,
      images,
      category,
      tags,
      inStock,
      featured
    }
  `);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return sanityClient.fetch(`
    *[_type == "product" && featured == true && inStock == true] | order(title asc) {
      _id,
      title,
      slug,
      description,
      price,
      compareAtPrice,
      images,
      category,
      tags,
      inStock,
      featured
    }
  `);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return sanityClient.fetch(`
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      price,
      compareAtPrice,
      images,
      category,
      tags,
      inStock,
      featured
    }
  `, { slug });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      author,
      featuredImage,
      tags
    }
  `);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      category,
      author,
      featuredImage,
      tags
    }
  `, { slug });
}

export async function getCoachingServices(): Promise<CoachingService[]> {
  return sanityClient.fetch(`
    *[_type == "coachingService"] | order(featured desc, title asc) {
      _id,
      title,
      slug,
      description,
      fullDescription,
      price,
      duration,
      format,
      includes,
      isAvailable,
      featured,
      bookingLink
    }
  `);
}

export async function getFeaturedServices(): Promise<CoachingService[]> {
  return sanityClient.fetch(`
    *[_type == "coachingService" && featured == true && isAvailable == true] | order(title asc) {
      _id,
      title,
      slug,
      description,
      price,
      duration,
      format,
      includes,
      isAvailable,
      featured,
      bookingLink
    }
  `);
}

// ============================================
// MOCK DATA (For development before Sanity is set up)
// ============================================

export const mockProducts: Product[] = [
  {
    _id: '1',
    title: 'The Composed Tee',
    slug: { current: 'the-composed-tee' },
    description: 'Premium cotton tee in bone white. Minimal branding. Maximum impact.',
    price: 68,
    images: [],
    category: 'apparel',
    tags: ['apparel', 'basics'],
    inStock: true,
    featured: true,
  },
  {
    _id: '2',
    title: 'Handle Your Own Journal',
    slug: { current: 'handle-your-own-journal' },
    description: 'Linen-bound journal for the woman who writes her own rules. 200 pages.',
    price: 42,
    images: [],
    category: 'accessories',
    tags: ['journal', 'stationery'],
    inStock: true,
    featured: true,
  },
  {
    _id: '3',
    title: 'Boundaries Without Apology',
    slug: { current: 'boundaries-without-apology' },
    description: 'Digital guide to setting limits that stick. Instant download.',
    price: 29,
    images: [],
    category: 'digital',
    tags: ['digital', 'guide'],
    inStock: true,
    featured: false,
  },
  {
    _id: '4',
    title: 'Quiet Power Hoodie',
    slug: { current: 'quiet-power-hoodie' },
    description: 'Oversized hoodie in charcoal. For composed rebellion.',
    price: 95,
    compareAtPrice: 120,
    images: [],
    category: 'apparel',
    tags: ['apparel', 'lounge'],
    inStock: true,
    featured: true,
  },
];

export const mockServices: CoachingService[] = [
  {
    _id: '1',
    title: 'The Clarity Session',
    slug: { current: 'clarity-session' },
    description: 'One intensive session to cut through the noise and find your direction.',
    fullDescription: [],
    price: '$350',
    duration: '90 minutes',
    format: 'Video call',
    includes: ['Pre-session questionnaire', '90-minute intensive', 'Action plan summary'],
    isAvailable: true,
    featured: true,
    bookingLink: '#',
  },
  {
    _id: '2',
    title: 'The Boundary Blueprint',
    slug: { current: 'boundary-blueprint' },
    description: 'Three sessions to build boundaries that hold without explanation.',
    fullDescription: [],
    price: '$900',
    duration: '3 sessions',
    format: 'Video calls',
    includes: ['Boundary assessment', '3 x 60-minute sessions', 'Custom boundary scripts'],
    isAvailable: true,
    featured: true,
    bookingLink: '#',
  },
  {
    _id: '3',
    title: 'The Ownership Intensive',
    slug: { current: 'ownership-intensive' },
    description: 'Six-month partnership for the woman ready to take up space.',
    fullDescription: [],
    price: '$4,500',
    duration: '6 months',
    format: 'Bi-weekly calls + Voxer support',
    includes: ['Full assessment', 'Bi-weekly 60-min sessions', 'Unlimited Voxer access', 'Custom resources'],
    isAvailable: true,
    featured: false,
    bookingLink: '#',
  },
];
