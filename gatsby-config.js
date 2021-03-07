module.exports = {
  siteMetadata: {
    title: `three_seulhee`,
    name: `seulhee`,
    siteUrl: `https://hanseulhee.github.io`,
    description: `Learning every moment`,
    hero: {
      heading: `Welcome to seulhee's blog :D`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: ``,
      },
      {
        name: `github`,
        url: `https://github.com/hanseulhee`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/sh_hyi/`,
      },
      {
        name: `linkedin`,
        url: ``,
      },
      {
        name: `dribbble`,
        url: ``,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
