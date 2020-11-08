import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
// @ts-ignore
import hydrate from 'next-mdx-remote/hydrate';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { Content } from '../components/Content';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import { getPage, readPageFiles } from '../utils/PageUtils';
import { absoluteUrl } from '../utils/UrlUtils';

type PageUrl = {
  slug: string;
};

type PageProps = {
  source: string;
  frontMatter: { [key: string]: any };
};

const ShowPage = (props: PageProps) => (
  <DefaultLayout>
    <NextSeo
      title={props.frontMatter.title}
      description={props.frontMatter.seo_description}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: props.frontMatter.seo_keywords,
        },
      ]}
      openGraph={{
        title: props.frontMatter.title,
        description: props.frontMatter.seo_description,
        images: [{ url: absoluteUrl(props.frontMatter.seo_image) }],
      }}
    />
    <Content>
      <h2 className="text-2xl font-bold">
        <Link href="/[slug]" as={`/${props.frontMatter.slug}`}>
          <a className="text-gray-900">{props.frontMatter.title}</a>
        </Link>
      </h2>
      {hydrate(props.source)}
    </Content>
  </DefaultLayout>
);

export const getStaticPaths: GetStaticPaths<PageUrl> = async () => {
  const files = readPageFiles();

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

export const getStaticProps: GetStaticProps<PageProps, PageUrl> = async ({ params }) => {
  const page = await getPage(params!.slug);

  return {
    props: {
      ...page,
    },
  };
};

export default ShowPage;
