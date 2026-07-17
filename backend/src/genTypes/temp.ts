import { LayoutSeo } from './layoutSeo';

export interface Temp {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  seo?: LayoutSeo | null;
};
