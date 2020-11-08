import settings from './_meta/settings.json';
import { absoluteUrl } from './src/utils/UrlUtils';

const SEO = {
  titleTemplate: 'Vesko.dev | %s',
  title: "Veselin Stoyanov's Personal Website",
  description: settings.blogger_description,
  additionalMetaTags: [
    {
      name: 'keywords',
      content: settings.meta_keywords,
    },
    {
      name: 'author',
      content: settings.blogger_name,
    },
  ],
  openGraph: {
    title: "Veselin Stoyanov's Personal Website",
    description: settings.blogger_description,
    locale: 'en',
    site_name: 'Vesko.dev',
    images: [{ url: absoluteUrl(settings.default_social_image) }],
  },
};

const BlogJsonLdDefaults = {
  url: 'https://www.vesko.dev/',
  title: "Veselin's Blog",
  description: settings.blogger_description,
  authorName: settings.blogger_name,
  images: [absoluteUrl(settings.default_social_image)],
  datePublished: '2020-11-01T00:00:00.000Z',
  dateModified: new Date().toISOString(),
};

const ArticleJsonLdDefaults = {
  url: 'https://www.vesko.dev/posts/',
  title: '',
  description: '',
  authorName: settings.blogger_name,
  images: [],
  datePublished: '',
  dateModified: '',
  publisherName: settings.blogger_name,
  publisherLogo: absoluteUrl(settings.blogger_photo),
};

export { SEO, BlogJsonLdDefaults, ArticleJsonLdDefaults };
