import { LayoutSeo } from './layoutSeo';

export interface Homepage {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  description?: string;
  sections?: any;
  seo?: LayoutSeo | null;
};
