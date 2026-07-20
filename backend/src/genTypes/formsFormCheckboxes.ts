import { FormsFormCheckboxesList } from './formsFormCheckboxesList';

export interface FormsFormCheckboxes {
  id?: number;
  label?: string;
  name: string;
  type?: "checkbox" | "radio";
  items?: FormsFormCheckboxesList[] | null;
};
