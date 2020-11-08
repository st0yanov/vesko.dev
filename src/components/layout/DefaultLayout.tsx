import React, { ReactNode } from 'react';

import { Footer } from '../footer/Footer';
import { Sidebar } from '../sidebar/Sidebar';

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = (props: DefaultLayoutProps) => (
  <div className="antialiased w-full text-gray-700">
    <div className="lg:max-w-5xl mx-auto mt-6 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 p-4 md:p-0">
          <Sidebar />
        </div>
        <div className="col-span-2 p-4 md:pl-6">{props.children}</div>
      </div>

      <Footer className="block md:hidden" />
    </div>
  </div>
);

export { DefaultLayout };
