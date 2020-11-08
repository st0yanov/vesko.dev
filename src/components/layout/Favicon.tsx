import React from 'react';

import Head from 'next/head';

const Favicon = () => (
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/static/favicon/android-chrome-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/static/favicon/android-chrome-512x512.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
  </Head>
);

export { Favicon };
