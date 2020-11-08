import React from 'react';

import Link from 'next/link';

export type PaginationProps = {
  previous?: string;
  next?: string;
};

const paginationHref = (url: string) => {
  if (url === '/') {
    return '/';
  }

  return '/blog/[page]';
};

const Pagination = (props: PaginationProps) => (
  <div className="text-2xl uppercase font-bold flex justify-between">
    {props.previous && (
      <div>
        <Link href={paginationHref(props.previous)} as={props.previous}>
          <a className="text-orange-600 hover:text-blue-600">← Newer Posts</a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="text-right ml-auto">
        <Link href={paginationHref(props.next)} as={props.next}>
          <a className="text-orange-500 hover:text-blue-500 hover:no-underline">Older Posts →</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
