import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, PaginationProps } from './Pagination';

export type PostItems = {
  [key: string]: string;
};

export type BlogFeedProps = {
  posts: PostItems[];
  pagination: PaginationProps;
};

const BlogFeed = (props: BlogFeedProps) => (
  <>
    {props.posts.map((post) => (
      <div className="pb-6" key={post.slug}>
        <div>
          <time className="uppercase text-gray-700 text-sm font-semibold">
            {format(Date.parse(post.date_published), 'LLLL yyyy')}
          </time>
        </div>
        <h2 className="text-2xl font-bold">
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a className="text-gray-900">{post.title}</a>
          </Link>
        </h2>
        <p className="py-4">{post.description}</p>
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a>Read</a>
        </Link>
      </div>
    ))}

    <Pagination previous={props.pagination.previous} next={props.pagination.next} />
  </>
);

export { BlogFeed };
