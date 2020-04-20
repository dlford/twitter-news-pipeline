module.exports = {
  siteMetadata: {
    title: `News Pipeline`,
    description: `Automated Twitter news pipeline`,
    author: `@dlford`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `News Pipeline`,
        /* eslint-disable camelcase */
        short_name: `News`,
        start_url: `/`,
        background_color: `#4a4a4a`,
        theme_color: `#4a4a4a`,
        /* eslint-enable camelcase */
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
