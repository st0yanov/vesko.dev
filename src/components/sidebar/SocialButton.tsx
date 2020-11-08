import React from 'react';

import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, fas);

type SocialButtonProps = {
  icon: [IconPrefix, IconName];
  link: string;
};

const SocialButton = (props: SocialButtonProps) => (
  <li className="box-border w-8 h-8 leading-8 border border-gray-400 rounded-full text-center inline-block mb-2 ml-0">
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="text-gray-900 hover:text-blue-500 hover:border-transparent"
    >
      <FontAwesomeIcon icon={props.icon} />
    </a>
  </li>
);

export { SocialButton };
