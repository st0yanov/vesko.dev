import fs from 'fs';
import path from 'path';

// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';
import matter from 'gray-matter';
// @ts-ignore
import renderToString from 'next-mdx-remote/render-to-string';
import readingTime from 'reading-time';

const readPostFiles = () => fs.readdirSync('_posts');

const getPosts = () => {
  const files = readPostFiles();

  return files
    .map((filename) => {
      const markdownWithMetadata = fs.readFileSync(path.join('_posts', filename)).toString();
      const { data } = matter(markdownWithMetadata);

      return {
        ...data,
        date_published: data.date_published.toString(),
        date_modified: data.date_modified.toString(),
      };
    })
    .sort((post1, post2) => (post1.date_published < post2.date_published ? -1 : 1));
};

export type PostProps = {
  source: string;
  frontMatter: { [key: string]: any };
};

const getPost = async (slug: string): Promise<PostProps> => {
  const markdownWithMetadata = fs
    .readFileSync(path.join('_posts', `${slug}.mdx`))
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
      reading_time: readingTime(content),
    },
  };
};

export { readPostFiles, getPosts, getPost };
