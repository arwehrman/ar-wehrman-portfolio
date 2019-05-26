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
    'gatsby-transformer-json' 
  ],
}
