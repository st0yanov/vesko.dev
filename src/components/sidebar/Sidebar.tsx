import React from 'react';

import settings from '../../../_meta/settings.json';
import { Copyright } from '../footer/Copyright';
import { Navigation } from './Navigation';
import { SocialContacts } from './SocialContacts';

const Sidebar = () => (
  <div className="w-full border-r-0 border-b md:border-r md:border-b-0 border-gray-300">
    <img
      src={settings.blogger_photo}
      alt="Blogger"
      className="w-20 h-20 rounded-full mx-auto md:mx-0"
    />
    <h2 className="text-xl font-bold mt-4 text-center md:text-left">{settings.blogger_name}</h2>
    <div className="text-gray-500 my-4 sm:pr-4 text-center md:text-left">
      {settings.blogger_description}
    </div>
    <Navigation />
    <SocialContacts />
    <Copyright className="hidden md:block" />
  </div>
);

export { Sidebar };
