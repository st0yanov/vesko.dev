import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Footer } from '../footer/Footer';

type ArticleProps = {
  children: ReactNode;
};

const ArticleLayout = (props: ArticleProps) => (
  <div className="antialiased w-full text-gray-700">
    <div className="text-center mt-6">
      <Link href="/">
        <a className="sm:fixed sm:top-1 sm:left-1 border border-gray-300 hover:border-gray-300 rounded-full py-1 px-4 text-gray-700 hover:text-blue-500">
          ← Back to Blog
        </a>
      </Link>
    </div>

    <div className="lg:max-w-2xl mx-auto mt-6 px-4 lg:px-0 prose">
      {props.children}

      <Footer />
    </div>
  </div>
);

export { ArticleLayout };
