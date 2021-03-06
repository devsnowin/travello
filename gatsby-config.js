module.exports = {
  siteMetadata: {
    title: `Travello`,
    description: "Travel website, explore the new world with us!",
    siteUrl: `https://www.yourdomain.tld`,
    author: "DevSnow",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Travello`,
        short_name: `Travello`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f26a2e`,
        display: `standalone`,
        icon: `./src/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
};
