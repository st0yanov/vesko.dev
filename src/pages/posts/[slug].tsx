/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
// @ts-ignore
import hydrate from 'next-mdx-remote/hydrate';
import { ArticleJsonLd, NextSeo } from 'next-seo';

import { ArticleJsonLdDefaults } from '../../../next-seo.config';
import { Content } from '../../components/Content';
import { ArticleLayout } from '../../components/layout/ArticleLayout';
import { PostProps, getPost, readPostFiles } from '../../utils/PostUtils';
import { absoluteUrl } from '../../utils/UrlUtils';

type PostUrl = {
  slug: string;
};

const DisplayPost = (props: PostProps) => (
  <ArticleLayout>
    <NextSeo
      title={props.frontMatter.title}
      description={props.frontMatter.description}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: props.frontMatter.seo_keywords,
        },
      ]}
      openGraph={{
        title: props.frontMatter.title,
        description: props.frontMatter.description,
        type: 'article',
        article: {
          publishedTime: props.frontMatter.date_published,
          modifiedTime: props.frontMatter.date_modified,
          tags: props.frontMatter.seo_keywords,
        },
        images: [{ url: absoluteUrl(props.frontMatter.seo_image) }],
      }}
    />
    <ArticleJsonLd
      {...ArticleJsonLdDefaults}
      url={absoluteUrl(`/posts/${props.frontMatter.slug}`)}
      title={props.frontMatter.title}
      description={props.frontMatter.description}
      images={[absoluteUrl(props.frontMatter.seo_image)]}
      datePublished={props.frontMatter.date_published}
      dateModified={props.frontMatter.date_modified}
    />

    <h1 className="text-center font-bold text-3xl md:text-4xl text-gray-900 mb-4">
      {props.frontMatter.title}
    </h1>
    <div className="text-center text-sm mb-8">
      {format(Date.parse(props.frontMatter.date_published), 'LLLL d, yyyy')}
      &nbsp; • &nbsp;
      {props.frontMatter.reading_time.text}
    </div>
    <Content>{hydrate(props.source)}</Content>
  </ArticleLayout>
);

export const getStaticPaths: GetStaticPaths<PostUrl> = async () => {
  const files = readPostFiles();

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps, PostUrl> = async ({ params }) => {
  const post = await getPost(params!.slug);

  return {
    props: {
      ...post,
    },
  };
};

export default DisplayPost;
