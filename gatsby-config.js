module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Technology Firm",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    { resolve: "gatsby-plugin-global-context",
      options: {
        context: {
          pagesWithBg: [
            '/',
            '/contact'
          ]
        }
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-transition-link",
  ],
};
