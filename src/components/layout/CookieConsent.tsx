import React, { useEffect } from 'react';

// @ts-ignore
import window from 'global';
import Head from 'next/head';

const CookieConsent = () => {
  useEffect(() => {
    const config = {
      acceptAll: true,
      htmlTexts: true,
      translations: {
        zz: {
          privacyPolicyUrl: '/privacy-policy',
        },
        en: {
          consentNotice: {
            description:
              'We use cookies to improve user experience. Choose what cookies you allow us to use. You can read more in our <a href="/privacy-policy">Privacy Policy</a>.',
            learnMore: 'Show Details',
          },
          purposes: {
            security: 'Security',
            analytics: 'Analytics',
          },
          ok: 'Accept All',
          decline: 'Decline All',
        },
      },
      services: [
        {
          name: 'googleAnalytics',
          title: 'Google Analytics',
          purposes: ['analytics'],
        },
        {
          name: 'cloudflare',
          title: 'Cloudflare',
          purposes: ['security'],
          required: true,
        },
      ],
    };

    // we assign the Klaro module to the window, so that we can access it in JS
    // window.klaro = Klaro;
    window.klaroConfig = config;

    // we set up Klaro with the config
    window.klaro.setup(config);
  }, []);

  return (
    <div>
      <Head>
        <script defer src="/static/klaro.js" />
        <script async type="text/plain" data-type="text/javascript" data-name="googleAnalytics" data-src="https://www.googletagmanager.com/gtag/js?id=G-NMWL75LG5L"></script>
        <script
          type="text/plain"
          data-type="text/javascript"
          data-name="googleAnalytics"
          dangerouslySetInnerHTML={{ __html:
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-NMWL75LG5L');`
          }}>
        </script>
      </Head>
    </div>
  );
};

export { CookieConsent };
