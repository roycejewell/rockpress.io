import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import Seo from "../components/seo"
import InfoTable from "../components/comparison-info-table"
import ConclusionTable from "../components/comparison-conclusion-table"
import PageIntro from "../components/page-intro"
import PricingTable from "../components/comparison-pricing-table"
import FeaturesTable from "../components/comparison-features-table"

const Comparison = ({ pageContext }) => {
  const { productA, productB, site, title, intro, domain, slug } = pageContext;

  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    "name": title,
    "description": intro,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": productA.name,
          "operatingSystem": "All",
          "applicationCategory": site.niche,
          "description": productA.intro,
          "url": `${pageContext.site.domain}/${slug}`,
          "featureList": productA.features.map(feature => ({
            "@type": "CreativeWork",
            "name": feature,
          })),
          "publisher": {
            "@type": "Organization",
            "name": site.org,
            "url": pageContext.site.domain
          },
          "datePublished": productA.published,
          "dateModified": productA.modified
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "SoftwareApplication",
          "name": productB.name,
          "operatingSystem": "All",
          "applicationCategory": site.niche,
          "description": productB.intro,
          "url": `${pageContext.site.domain}/${slug}`,
          "featureList": productB.features.map(feature => ({
            "@type": "CreativeWork",
            "name": feature,
          })),
          "publisher": {
            "@type": "Organization",
            "name": site.org,
            "url": pageContext.site.domain
          },
          "datePublished": productB.published,
          "dateModified": productB.modified
        }
      }
    ]
  };

  return (
    <Layout pageContext={pageContext}>

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>

      <Seo
      description={pageContext.intro}
      title={pageContext.title}
      metaImage={pageContext.site.domain + pageContext.site.metaImage}
      favicon={pageContext.site.domain + pageContext.site.favicon}
      slug={pageContext.site.domain +'/'+ pageContext.slug}
      datePublished={pageContext.site.published}
      dateModified={pageContext.site.modified}
    />
      <PageIntro img={'/meta.png'} title={pageContext.title} text={pageContext.intro} />


      <InfoTable productA={productA} productB={productB} />
      <FeaturesTable productA={productA} productB={productB} />
      <PricingTable productA={productA} productB={productB} />
      <ConclusionTable productA={productA} productB={productB} />
    </Layout>
  );
};

export default Comparison;


