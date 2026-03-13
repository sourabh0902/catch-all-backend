import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturedBlogSections extends Struct.ComponentSchema {
  collectionName: 'components_featured_blog_sections';
  info: {
    displayName: 'sections';
    icon: 'file';
  };
  attributes: {};
}

export interface SectionsImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_blocks';
  info: {
    displayName: 'image-block';
    icon: 'picture';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SectionsQuote extends Struct.ComponentSchema {
  collectionName: 'components_sections_quotes';
  info: {
    displayName: 'quote';
    icon: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Tracey Wilson'>;
    text: Schema.Attribute.Text;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'rich-text';
    icon: 'alien';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'featured-blog.sections': FeaturedBlogSections;
      'sections.image-block': SectionsImageBlock;
      'sections.quote': SectionsQuote;
      'sections.rich-text': SectionsRichText;
    }
  }
}
