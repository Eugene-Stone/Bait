import { Media } from './media';
import { Category } from './category';
import { CourseComment } from './courseComment';

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
  categories?: Category[] | null;
  course_comments?: CourseComment[] | null;
};
