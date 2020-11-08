import React from 'react';

import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import { blogger_social_contacts } from '../../../_meta/settings.json';
import { SocialButton } from './SocialButton';

const SocialContacts = () => (
  <ul className="list-style-none mb-4 w-32 grid grid-flow-row grid-cols-3 mx-auto md:mx-0">
    {blogger_social_contacts.map((contact) => (
      <SocialButton
        icon={[contact.icon_prefix as IconPrefix, contact.icon_name as IconName]}
        link={contact.link}
        key={contact.link}
      />
    ))}
  </ul>
);

export { SocialContacts };
