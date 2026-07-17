import { LayoutSeo } from './layoutSeo';

export interface Temp2 {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  seo?: LayoutSeo | null;
};
