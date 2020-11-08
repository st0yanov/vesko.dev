/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

import { SEO } from '../../next-seo.config';
import { CookieConsent } from '../components/layout/CookieConsent';
import { Favicon } from '../components/layout/Favicon';

import '../styles/tailwind.scss';
import '../styles/style.scss';
import '../styles/prism-a11y-dark.scss';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />
    <Favicon />
    <CookieConsent />
    <Component {...pageProps} />
  </>
);

export default CustomApp;
