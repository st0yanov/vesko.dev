import React from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { menu_items } from '../../../_meta/navigation.json';

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="mb-4">
      <ul className="list-style-none text-center md:text-left">
        {menu_items.map((item) => {
          const linkClass = item.link === router.asPath ? 'active' : '';

          return (
            <li key={item.link}>
              <Link href={item.link}>
                <a className={linkClass}>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <style jsx>
        {`
          nav :global(a) {
            @apply text-gray-800;
          }

          nav :global(a:hover),
          nav :global(a.active) {
            @apply text-blue-500 border-b border-blue-500;
          }

          nav :global(ul li) {
            @apply ml-0 py-1 list-none;
          }
        `}
      </style>
    </nav>
  );
};

export { Navigation };
