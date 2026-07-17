import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutSeo extends Struct.ComponentSchema {
  collectionName: 'components_layout_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'layout.seo': LayoutSeo;
    }
  }
}
