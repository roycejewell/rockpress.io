import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"



const NotFoundPage = ({pageContext}) => {



  	return (
    <Layout pageContext={pageContext}>
      <Seo
      description={pageContext.intro}
      title={pageContext.title}
      metaImage={pageContext.site.domain + pageContext.site.metaImage}
      favicon={pageContext.site.domain + pageContext.site.favicon}
      slug={pageContext.site.domain +'/'+ pageContext.slug}
      datePublished={pageContext.site.published}
      dateModified={pageContext.site.modified}
    />


    </Layout>
	)

}

export default NotFoundPage


