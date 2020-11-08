/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { GetStaticProps } from 'next';
import { BlogJsonLd } from 'next-seo';

import { pagination_size as paginationSize } from '../../_meta/settings.json';
import { BlogJsonLdDefaults } from '../../next-seo.config';
import { BlogFeed, BlogFeedProps } from '../components/BlogFeed';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import { PaginationProps } from '../components/Pagination';
import { getPosts } from '../utils/PostUtils';

const Index = (props: BlogFeedProps) => (
  <DefaultLayout>
    <BlogJsonLd {...BlogJsonLdDefaults} />
    <BlogFeed posts={props.posts} pagination={props.pagination} />
  </DefaultLayout>
);

export const getStaticProps: GetStaticProps<BlogFeedProps> = async () => {
  const posts = getPosts();

  const pagination: PaginationProps = {};

  if (posts.length > paginationSize) {
    pagination.next = '/blog/2';
  }

  return {
    props: {
      posts: posts.slice(0, paginationSize),
      pagination,
    },
  };
};

export default Index;
