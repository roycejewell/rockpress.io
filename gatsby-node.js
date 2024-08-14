const path = require(`path`);
const slugify = require(`slugify`);
const fs = require('fs');
const { siteMetadata } = require('./gatsby-config');

let pageCount = 0;

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const site = siteMetadata.site;

  const niche = siteMetadata.site.niche;

  const products = siteMetadata.products;
  
  const formats = siteMetadata.site.formats;

  const adjectives = siteMetadata.site.adjectives;

  const demographics = siteMetadata.site.demographics.sort();

  const features = Array.from(new Set(products.flatMap(product => product.features))).sort();


  // Helper function for product of arrays
  function product(...args) {
    return args.reduce((acc, val) => acc.flatMap(d => val.map(v => [...d, v])), [[]]);
  }

  function createPageForTemplate(template, context, section) {
      pageCount++; // Increment the page count here
    const slug = slugify(context.title, { lower: true });
    const url = `/${slug}`;
    createPage({
      path: url,
      component: path.resolve(`src/templates/${template}.js`),
      context: {
        niche,
        formats,
        adjectives,
        features,
        demographics,
        slug,
        urls,
        ...context
      }
    });
    if (!urls[section]) {
      urls[section] = [];
    }
    urls[section].push({ url, title: context.title });
  }

  const urls = {};

  // Template-specific page creation functions
  function createStandardListPages() {
    product([niche], formats).forEach(([niche, format]) => {
      createPageForTemplate('list',
      {
        site,
        products,
        title: `${niche} ${format}`,
        intro: `Check out a variety of ${niche} ${format}, helping you make smart choices with our detailed reviews.`
      }, 'Niche Format');
    });
  }

  function createStandardAdjectivePages() {
    product(adjectives, [niche], formats).forEach(([adjective, niche, format]) => {
      createPageForTemplate('list', 
        {
          site,
          products,
          title: `${adjective} ${niche} ${format}`,
          intro: `Listing the ${adjective} ${niche} ${format}, focusing on what matters most for your billing needs.`
        }, 'Adjective Niche Format');
    });
  }

  function createStandardFeaturePages() {
    product(adjectives, [niche], formats, features).forEach(([adjective, niche, format, feature]) => {
      createPageForTemplate('list', 
        {
          site,
          products: products.filter(product => product.features.includes(feature)),
          title: `${adjective} ${niche} ${format} for ${feature}`,
          intro: `Get the scoop on ${adjective} ${niche} ${format} for ${feature}, with our in-depth analysis.`
        }, 'Adjective Niche Format for Feature');
    });
  }

  function createStandardDemographicPages() {
    product(adjectives, [niche], formats, demographics).forEach(([adjective, niche, format, demographic]) => {
      createPageForTemplate('list',
        {
          site,
          products,
          title: `${adjective} ${niche} ${format} for ${demographic}`,
          intro: `Guidance on ${adjective} ${niche} ${format} for ${demographic}, compiled for clarity and relevance.`
        }, 'Adjective Niche Format for Demographic');
    });
  }

  function createAlternativesListPages() {
    product(products).forEach(([product]) => {
      createPageForTemplate('single',
        {
          site,
          products: products.filter(p => p.name === product.name),
          title: `${product.name}`,
          intro: `Take a look at ${product.name}, showcasing various features, pricing options, and comparisons to help you decide.`
        }, 'Product Single');
    });

    product(products).forEach(([product]) => {
      createPageForTemplate('list',
        {
          site,
          products: products.filter(p => p.name !== product.name),
          title: `${product.name} alternatives`,
          intro: `Explore alternatives to ${product.name}, offering plenty of choices for your billing needs.`
        }, 'Product Alternatives');
    });

    product(adjectives, products).forEach(([adjective, product]) => {
      createPageForTemplate('list',
        {
          site,
          products: products.filter(p => p.name !== product.name),
          title: `${adjective} ${product.name} alternatives`,
          intro: `Check out top alternatives to ${product.name}, selected for a thorough comparison.`
        }, 'Adjective Product Alternatives');
    });
  }

  function createAlternativesFeaturePages() {
    product(products, features).forEach(([product, feature]) => {
      createPageForTemplate('list',
        {
          site,
          products: products.filter(p => p.name !== product.name).filter(product => product.features.includes(feature)),
          title: `${product.name} alternatives for ${feature}`,
          intro: `Find alternatives to ${product.name} for ${feature}, laid out for easy comparison.`
        }, 'Product Alternatives for Feature');
    });

    product(adjectives, products, features).forEach(([adjective, product, feature]) => {
      createPageForTemplate('list',
        {
          site,
          products: products.filter(p => p.name !== product.name).filter(product => product.features.includes(feature)),
          title: `${adjective} ${product.name} alternatives for ${feature}`,
          intro: `Discover the ${adjective} alternatives to ${product.name} for ${feature}, detailed for quick comparison.`
        }, 'Adjective Product Alternatives for Feature');
    });
  }

  function createAlternativesDemographicPages() {
    product(products, demographics).forEach(([product, demographic]) => {
      createPageForTemplate('list',
        {
          site,
          products: products.filter(p => p.name !== product.name),
          title: `${product.name} alternatives for ${demographic}`,
          intro: `Alternatives to ${product.name} for ${demographic}, providing targeted options.`
        }, 'Product Alternatives for Demographic');
    });

    product(adjectives, products, demographics).forEach(([adjective, product, demographic]) => {
      createPageForTemplate('list',
        {
          site,
          products: products.filter(p => p.name !== product.name),
          title: `${adjective} ${product.name} alternatives for ${demographic}`,
          intro: `Alternatives to ${product.name} for ${demographic}, providing targeted options.`
        }, 'Adjective Product Alternatives for Demographic');
    });
  }

  function createComparisonPages() {
    products.forEach((productA, index) => {
      for (let j = index + 1; j < products.length; j++) {
        const productB = products[j];
        createPageForTemplate('comparison',
          {
            site,
            productA: productA,
            productB: productB,
            title: `${productA.name} vs ${productB.name}`,
            intro: `Comparing ${productA.name} vs ${productB.name}, highlighting key differences and features.`
          }, 'Comparison');
      }
    });
  }

  // Main function to create pages
  function createPageConfigs() {
    createStandardListPages();
    createStandardAdjectivePages();
    createStandardFeaturePages();
    // createStandardDemographicPages();

    createAlternativesListPages();
    createAlternativesFeaturePages();
    // createAlternativesDemographicPages();

    createComparisonPages();

    createPage({
      path: `/`,
      component: path.resolve(`src/templates/home.js`),
      context: {
        site,
        title: site.title,
        intro: site.intro,
        products,
        slug: '',
        urls,
        niche,
        formats,
        adjectives,
        features,
        demographics,
      }
    });

      // Create the 404 page
    createPage({
      path: '/404',
      component: path.resolve('src/templates/404.js'),
      context: {
        site,
        title: 'Nothing exists here...',
        intro: 'Cmon bud, check the footer for some real pages.',
        products,
        slug: '/404',
        urls,
        niche,
        formats,
        adjectives,
        features,
        demographics,
      }
    });


  }

  createPageConfigs();

};


exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // If the page is the 404 page, update the matchPath to wildcard
  if (page.path === '/404/') {
    const oldPage = { ...page };
    deletePage(oldPage);
    createPage({
      ...page,
      matchPath: '/*',
    });
  }
};

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
    reporter.info(`A total of ${pageCount} pages were created.`);

};
