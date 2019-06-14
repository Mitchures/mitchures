module.exports = {
  siteMetadata: {
    title: `Mitchures`,
    description: `I'm Mitchell Hollander, an exuberant software developer & creative photographer based in Nashville, Tennessee.`,
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
        summary: `A photo of mine was featured in Apple's "Shot On iPhone 6s" World Gallery campaign for the iPhone 6s. The photo was posted on billboards and print publications all around the world in over 26 countries.`
      },
      {
        name: `Water Journal`,
        summary: `Water Journal is an exploration of all things water and life, celebrating its undeniable beauty and complexity. Several photos of mine from one of my trips to Iceland are featured in Volume 3 including a short story written by me.`
      },
      {
        name: `Parkland`,
        summary: `Established in 2015, Parkland Design & Manufacturing creates sustainable bags and accessories for everyday life. I was commissioned by Parkland to take promotional photos of their products.`
      },
      {
        name: `Rucksack Magazine`,
        summary: `Rucksack Magazine is an online journal and printed bi-annual publication for both written & visual storytelling through adventure and photography. I was fortunate enough to be interviewed and featured on Rucksack Mag's online journal.`
      },
      {
        name: `Welly Merck`,
        summary: `Welly Merck was founded on the true story of Merck and Welly, lovers who established a timeless identity by facing adversity and overcoming it. Welly Merck watches are evidence of their journey. I was commissioned by Welly Merck to take promotional photos of their wrist watches.`
      },
      {
        name: `Unsplash`,
        summary: `Unsplash is a tool for creatives to access beautiful, free images gifted by the world’s most generous community of photographers. I was hired by Unsplash to take free professional photos of guests at the Makers to Merchants event hosted by Weebly.`
      },
      {
        name: `Mahabis`,
        summary: `Mahabis is an award-winning range of slippers designed for comfort. I was commissioned by Mahabis to take promotional photos of their footwear. My Wife still wears her gifted pair to this day.`
      },
      {
        name: `Trade Coffee`,
        summary: `Shop the best specialty coffee subscription from the nation's best roasters on Trade, fresh coffee roasted to order and delivered right to your door. I was commissioned by Trade to take promotional photos of a few select coffee blends.`
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
