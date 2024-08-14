import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductIntro from "../components/product-intro"
import PageIntro from "../components/page-intro"


const Single = ({pageContext}) => {

const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "SoftwareApplication",
    "name": pageContext.products[0].name,
    "operatingSystem": "All",
    "applicationCategory": pageContext.site.niche,
    "description": pageContext.products[0].intro,
    "url": pageContext.site.domain + '/' + pageContext.slug,
    "featureList": pageContext.products[0].features.map((feature) => ({
      "@type": "CreativeWork",
      "name": feature,
    })),
    "publisher": {
      "@type": "Organization",
      "name": pageContext.site.org,
      "url": pageContext.site.domain 
    },
    "datePublished": pageContext.site.published,
    "dateModified": pageContext.site.modified
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

	  	<ProductIntro product={pageContext.products[0]} urls={pageContext.urls}/>
	  </Layout>
	)

}

export default Single


