const package = require('./package.json');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.avvocatoluisaparrotta.it',
    title: 'Avvocato Luisa Parrotta - Il tuo migliore avvocato',
    description:
      'Avvocato Luisa Parrotta - Studio Legale Luisa Parrotta, è aiutare il cliente in difficoltà, Richiedi una consulenza.',
    phone: '+39 380 189 2602',
    email: 'info@avvocatoluisaparrotta.it',
    facebook: 'https://www.facebook.com/avvocatoluisaparrotta',
    linkedin: 'https://www.linkedin.com/in/luisa-parrotta-779961137/',
    updateTime: new Date().toISOString(),
    googleVerification: process.env.GOOGLE_VERIFICATION || false,
    bingVerification: process.env.BING_VERIFICATION || false,
    yandexVerification: process.env.YANDEX_VERIFICATION || false,
    googleRecaptchaSitekey: process.env.GOOGLE_RECAPTCHA_SITEKEY || false,
    version: package.version
  },
  proxy: {
    prefix: '/scripts',
    url: 'http://localhost:8080'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: ['aos/']
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://www.avvocatoluisaparrotta.it']
      }
    },
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        disableOnDev: false,
        reportOnly: false
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          ...(process.env.GOOGLE_ANALYTICS ? [process.env.GOOGLE_ANALYTICS] : []),
          ...(process.env.GOOGLE_TAG_MANAGER ? [process.env.GOOGLE_TAG_MANAGER] : [])
        ],
        pluginConfig: {
          head: false
        }
      }
    },
    {
      resolve: require.resolve(`./cookiehub`),
      options: {
        disableOnDev: true,
        cookieHubId: process.env.COOKIEHUB_ID || '',
        categories: [
          {
            categoryName: 'analytics',
            cookieName: 'gdpr-enabled'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: './contents/'
      },
      __key: 'contents'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'scripts',
        path: `${__dirname}/scripts`
      },
      __key: 'scripts'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'vendor',
        path: `${__dirname}/vendor`
      },
      __key: 'vendor'
    },
    {
      resolve: 'gatsby-plugin-copy-files-enhanced',
      options: {
        source: `${__dirname}/scripts`,
        destination: '/scripts/',
        purge: true
      }
    },
    {
      resolve: 'gatsby-plugin-copy-files-enhanced',
      options: {
        source: `${__dirname}/vendor`,
        destination: '/vendor/',
        purge: true
      }
    }
  ]
};
