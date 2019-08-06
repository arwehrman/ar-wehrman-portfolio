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
      },
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'jobs',
          path: './data'
        }
    },
    'gatsby-transformer-json',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "AR Wehrman Portfolio",
          short_name: "ARWehrman",
          start_url: "/",
          background_color: "#f6019d",
          theme_color: "#f6019d",
          display: "browser",
          icon: "src/images/icon.png", 
          icons: [
            {
              src: `/favicons/android-chrome-192x192.png`,
              sizes: `192x192`,
              type: `image/png`,
            },
            {
              src: `/favicons/android-chrome-512x512.png`,
              sizes: `512x512`,
              type: `image/png`,
            },
          ]
        },
      },
      'gatsby-plugin-offline'
    ],
}
