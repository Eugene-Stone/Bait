import { Review } from './review';

export interface SectionsReviews {
  id?: number;
  title?: string;
  description?: string;
  reviews?: Review[] | null;
};
