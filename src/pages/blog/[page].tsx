/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { BlogJsonLd } from 'next-seo';

import { pagination_size as paginationSize } from '../../../_meta/settings.json';
import { BlogJsonLdDefaults } from '../../../next-seo.config';
import { BlogFeed, BlogFeedProps } from '../../components/BlogFeed';
import { DefaultLayout } from '../../components/layout/DefaultLayout';
import { PaginationProps } from '../../components/Pagination';
import { getPosts, readPostFiles } from '../../utils/PostUtils';

type PageUrl = {
  page: string;
};

const PaginatePosts = (props: BlogFeedProps) => (
  <DefaultLayout>
    <BlogJsonLd {...BlogJsonLdDefaults} />
    <BlogFeed posts={props.posts} pagination={props.pagination} />
  </DefaultLayout>
);

const paginate = <T extends {}>(elements: T[], pageSize: number) => {
  const pages: T[][] = [];

  elements.forEach((element, index) => {
    if (index % pageSize === 0) {
      pages.push([element]);
    } else {
      pages[pages.length - 1].push(element);
    }
  });

  return pages;
};

export const getStaticPaths: GetStaticPaths<PageUrl> = async () => {
  const postFiles = readPostFiles();
  const pages = paginate(postFiles, paginationSize);

  return {
    paths: pages.slice(1).map((_, index) => ({
      params: {
        page: `${index + 2}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogFeedProps, PageUrl> = async ({ params }) => {
  const posts = getPosts();
  const pages = paginate(posts, paginationSize);
  const currentPage = Number(params!.page);
  const pagination: PaginationProps = {};

  if (currentPage < pages.length) {
    pagination.next = `blog/${currentPage + 1}`;
  }

  if (currentPage === 2) {
    pagination.previous = '/';
  } else {
    pagination.previous = `blog/${currentPage - 1}`;
  }

  return {
    props: {
      posts: pages[currentPage - 1],
      pagination,
    },
  };
};

export default PaginatePosts;
