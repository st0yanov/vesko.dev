import React from 'react';

import Link from 'next/link';

import { copyright_text } from '../../../_meta/settings.json';

type CopyrightProps = {
  className?: string;
};

const Copyright = (props: CopyrightProps) => (
  <div className={`text-gray-500 text-sm ${props.className}`}>
    {copyright_text}
    <br />
    <small>
      <Link href="/terms-of-service">
        <a>Terms of Service</a>
      </Link>
      &nbsp;⋅&nbsp;
      <Link href="/privacy-policy">
        <a>Privacy Policy</a>
      </Link>
    </small>
  </div>
);

export { Copyright };
