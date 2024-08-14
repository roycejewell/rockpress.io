import React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductIntro from "../components/product-intro"
import PageIntro from "../components/page-intro"
const slugify = require(`slugify`);



const Home = ({pageContext}) => {

const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    "itemListElement": pageContext.products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": product.name,
        "operatingSystem": "All",
        "applicationCategory": pageContext.site.niche,
        "description": product.intro,
        "url": pageContext.site.domain + '/' + slugify(product.name).toLowerCase(),
        "featureList": product.features.map((feature) => ({
          "@type": "CreativeWork",
          "name": feature,
        })),
        "publisher": {
          "@type": "Organization",
          "name": pageContext.site.org,
          "url": pageContext.site.domain
        },
        "datePublished": product.published,
        "dateModified": product.modified
      }
    }))
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
      
      { pageContext.products.map((product, i) => <ProductIntro key={i} product={product} urls={pageContext.urls}/> )}
    </Layout>
	)

}

export default Home


