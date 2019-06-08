module.exports = {
  siteMetadata: {
    title: `Mitchures`,
    description: `I'm Mitchell Hollander, a Software Developer & Photographer based in Nashville, Tennessee.`,
    author: `Mitchell Hollander`,
    social: [
      {
        name: `Instagram`,
        url: `https://www.instagram.com/mitchures.co/`
      },{
        name: `Facebook`,
        url: `https://www.facebook.com/profile.php?id=100008081385480`
      },{
        name: `Pinterest`,
        url: `https://www.pinterest.com/MitchellH07/`
      },{
        name: `Github`,
        url: `https://github.com/mitchellsh`
      },{
        name: `VSCO`,
        url: `https://vsco.co/mitchures/`
      },
    ],
    clients: [
      {
        name: `Apple`,
        summary: `Featured in Apple's Shot On iPhone 6s Campaign where one of my iPhone photos was displayed on billboards all around the world in over 26 countries.`
      },
      {
        name: `Water Journal`,
        summary: `Featured and Published in Water Journal Volume 3.`
      },
      {
        name: `Parkland`,
        summary: `Promotional photos & part of the Parkland Field Team.`
      },
      {
        name: `Rucksack Magazine`,
        summary: `Featured in an Interview on Rucksack Mag's website.`
      },
      {
        name: `Welly Merck`,
        summary: `Promotional photos for their wrist watches.`
      },
      {
        name: `Unsplash`,
        summary: `Promotional photos for Unsplash at the Makers to Merchants event hosted by Weebly.`
      },
      {
        name: `Mahabis`,
        summary: `Promotional photos for Mahabis footwear.`
      },
      {
        name: `Trade Coffee`,
        summary: `Promotional photos of coffee ordered from Trade Coffee.`
      },
      {
        name: `Fotog Magazine`,
        summary: `Featured in Volume 2 of Fotog Mag.`
      }
    ],
    projects: [
      {
        name: `Otaku Ipsum`,
        description: `Otaku-themed placeholder text generator built with Gatsby.js and React.`,
        url: `https://otakuipsum.netlify.com/`,
        cover: `otaku`
      },
      {
        name: `Cryptocurrency Comparison`,
        description: `Built with Gatsby.js & React using the CoinMarketCap API.`,
        url: `https://cryptocompare.netlify.com/`,
        cover: `crypto`
      },
      {
        name: `Maku`,
        description: `A Rails 5 Movie Search app that utilizes the Movie Database API.`,
        url: `https://maku.herokuapp.com/`,
        cover: `maku`
      }
    ]
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    }
  ],
}
