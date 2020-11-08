import React from 'react';

import { Copyright } from './Copyright';

type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps) => (
  <footer className={`border-t border-gray-300 text-center py-4 mt-4 ${props.className}`}>
    <Copyright />
  </footer>
);

export { Footer };
