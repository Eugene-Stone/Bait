import { Media } from './media';

export interface LayoutSeo {
  id?: number;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: Media | null;
  structuredData?: string;
  noindex?: boolean;
  nofollow?: boolean;
};
