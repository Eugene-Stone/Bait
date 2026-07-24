import { Media } from './media';
import { Direction } from './direction';
import { CourseComment } from './courseComment';
import { Level } from './level';
import { Format } from './format';
import { LayoutSeo } from './layoutSeo';

export interface Course {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  slug?: string;
  description?: string;
  image?: Media | null;
  text?: any;
  price?: number;
  duration?: string;
  direction?: Direction | null;
  course_comments?: CourseComment[] | null;
  level?: Level | null;
  formats?: Format[] | null;
  seo?: LayoutSeo | null;
};
