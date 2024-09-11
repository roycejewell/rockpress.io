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

  // const features = Array.from(new Set(products.flatMap(product => product.features))).sort();

  const features = siteMetadata.site.features;


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
      createPageForTemplate('landing',
      {
        site,
        title: `${niche} ${format}`,
        intro: `Expert ${niche} ${format} services tailored for your business needs.`
      }, 'Niche Format');
    });
  }

  function createStandardAdjectivePages() {
    product(adjectives, [niche], formats).forEach(([adjective, niche, format]) => {
      createPageForTemplate('landing', 
        {
          site,
          title: `${adjective} ${niche} ${format}`,
          intro: `Delivering ${adjective} ${niche} ${format} solutions to elevate your website.`
        }, 'Adjective Niche Format');
    });
  }

  function createStandardFeaturePages() {
    product(adjectives, [niche], formats, features).forEach(([adjective, niche, format, feature]) => {
      createPageForTemplate('landing', 
        {
          site,
          title: `${adjective} ${niche} ${format} for ${feature}`,
          intro: `Specialized ${adjective} ${niche} ${format} services focusing on ${feature} to boost your website performance.`
        }, 'Adjective Niche Format for Feature');
    });
  }

  function createStandardDemographicPages() {
    product(adjectives, [niche], formats, demographics).forEach(([adjective, niche, format, demographic]) => {
      createPageForTemplate('landing',
        {
          site,
          title: `${adjective} ${niche} ${format} for ${demographic}`,
          intro: `Tailored ${adjective} ${niche} ${format} solutions designed specifically for ${demographic} businesses.`
        }, 'Adjective Niche Format for Demographic');
    });
  }

  function createServicePages() {
    features.forEach((feature) => {
      createPageForTemplate('landing',
        {
          site,
          title: `${feature} Services for ${niche}`,
          intro: `Professional ${feature} services optimized for ${niche} websites.`
        }, 'Feature Services');
    });
  }

  function createLocationPages() {
    const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']; // Add more locations as needed
    product([niche], formats, locations).forEach(([niche, format, location]) => {
      createPageForTemplate('landing',
        {
          site,
          title: `${niche} ${format} in ${location}`,
          intro: `Top-tier ${niche} ${format} services for businesses in ${location}.`
        }, 'Location-based Services');
    });
  }

  // Main function to create pages
  function createPageConfigs() {
    createStandardListPages();
    createStandardAdjectivePages();
    createStandardFeaturePages();
    createStandardDemographicPages();
    createServicePages();
    createLocationPages();

    createPage({
      path: `/`,
      component: path.resolve(`src/templates/landing.js`),
      context: {
        site,
        title: 'World Class Wordpress Development. One Simple Subscription.',
        intro: 'The Solution to Expensive Agencies, Unreliable Freelancers, and Tedious Hiring.',
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
        title: 'Page Not Found',
        intro: 'The page youre looking for doesnt exist. Please check our menu for available services.',
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
