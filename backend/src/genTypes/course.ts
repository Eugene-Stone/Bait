import { Media } from './media';

export interface Course {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  description?: string;
  image?: Media | null;
};
