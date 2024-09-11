module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        createLinkInHead: true,
      },
    },
  ],
  siteMetadata: {
    siteUrl: `https://rockpress.io`,
    site: {
      org: 'Rockpress.io',
      niche: 'Wordpress Development',
      published: new Date('2024-07-01').toISOString(),
      modified: new Date().toISOString(),
      domain: 'https://rockpress.io',
      logo: '/logo.svg',
      favicon: '/favicon.ico',
      metaImage: '/meta.png',
      title: 'Rockpress.io',
      intro: 'Rockpress.io is your premier Wordpress Development Agency, delivering top-tier solutions for businesses seeking robust, scalable, and secure web platforms. Our expert team combines cutting-edge technology with creative design to elevate your online presence and drive digital success.',
      adjectives: ['Best', 'Top',],
      formats: ['Agency', 'Shop', 'Group', 'Company', 'Subscription Service', 'Productized Agency'],
      demographics: ['fintech', 'ecommerce'],
      features: [
        'Marketing Sites', 'Landing Pages', 'Email Templates',
        'Knowledgebases', 'Content Sites', 'Microsites',
        'Content Management', 'Gated Content', 'Asset Downloads',
        'Webinars & Events', 'Marketing Integrations',
        'Analytics Integrations', 'Sales Integrations',
        'SEO Integrations'
      ],
    },
  },
}
