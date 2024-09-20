import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ description, title, metaImage, favicon, domain, slug }) => {
  return (
    <Helmet htmlAttributes={{ lang: 'en-us' }}>
      <meta http-equiv="content-language" content="en-us" />
      <title lang="en-us">{title}</title>
      <meta name='description' content={description} />

      <link rel="icon" type="image/ico" href={favicon} />
      <meta name="robots" content="index, follow"/>
      <link rel="canonical" href={domain}/>
      <link rel="alternate" href={domain} hreflang="en" />

      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={slug} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link rel='canonical' href={slug} />

      <meta property="twitter:card" content={'summary_large_image'} />
      <meta property="twitter:image" content={metaImage} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:site" content={slug} />
      <meta property="twitter:description" content={description} />
      <script src="https://cdn.usefathom.com/script.js" data-site="HSLDYFUV" defer></script>
      <script async src="https://tally.so/widgets/embed.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16709232055"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16709232055');
        `}
      </script>
    </Helmet>
  );
};

export default Seo;