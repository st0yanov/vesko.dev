import fs from 'fs';
import path from 'path';

// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';
import matter from 'gray-matter';
// @ts-ignore
import renderToString from 'next-mdx-remote/render-to-string';

const readPageFiles = () => fs.readdirSync('_pages');

const getPage = async (slug: string) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join('_pages', `${slug}.mdx`))
    .toString();
  const { data, content } = matter(markdownWithMetadata);
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    source: mdxSource,
    frontMatter: {
      ...data,
      date_published: data.date_published.toISOString(),
      date_modified: data.date_modified.toISOString(),
    },
  };
};

export { readPageFiles, getPage };
