import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../images/logo.png';

export const query = graphql`
  query SeoQuery {
    site {
      id
      children {
        id
      }
      siteMetadata {
        title
        description
        siteUrl
        facebook
        updateTime
        googleVerification
        bingVerification
        yandexVerification
        version
      }
    }
  }
`;

const Seo: React.FC<any> = () => {
  const data = useStaticQuery(query);
  const lang = 'it_IT';

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
    >
      <title>{data.site.siteMetadata.title}</title>
      <meta content={data.site.siteMetadata.description} name="description" />

      <meta content={data.site.siteMetadata.version} name="version" />

      <link rel="canonical" href={data.site.siteMetadata.siteUrl} />

      <meta property="og:locale" content={lang} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:description" content={data.site.siteMetadata.description} />
      <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:image" content={`${data.site.siteMetadata.siteUrl}${Logo}`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="287" />
      <meta property="article:publisher" content={data.site.siteMetadata.facebook} />
      <meta property="article:modified_time" content={data.site.siteMetadata.updateTime} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta name="twitter:description" content={data.site.siteMetadata.description} />
      <meta name="twitter:image" content={`${data.site.siteMetadata.siteUrl}${Logo}`} />
      <meta name="twitter:label1" content="Tempo di lettura stimato" />
      <meta name="twitter:data1" content="4 minuti" />
      {data.site.siteMetadata.googleVerification && (
        <meta name="google-site-verification" content={data.site.siteMetadata.googleVerification} />
      )}
      {data.site.siteMetadata.bingVerification && (
        <meta name="msvalidate.01" content={data.site.siteMetadata.bingVerification} />
      )}
      {data.site.siteMetadata.yandexVerification && (
        <meta name="yandex-verification" content={data.site.siteMetadata.yandexVerification} />
      )}
    </Helmet>
  );
};

export default Seo;
