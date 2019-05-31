module.exports = {
  siteMetadata: {
    title: `AR Wehrman`,
    description: `Amanda R. Wehrman's portfolio site`,
    author: `Amanda R. Wehrman`,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: './data'
      }
    },
    'gatsby-transformer-json',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "GatsbyJS",
          short_name: "GatsbyJS",
          start_url: "/",
          background_color: "#6b37bf",
          theme_color: "#6b37bf",
          display: "standalone",
          icon: "src/images/icon.png", 
        },
      },
    ],
}
