module.exports = {
  siteMetadata: {
    title: `Mitchures`,
    description: `Hello, I'm Mitchell Hollander. An exuberant Software Developer based in Nashville, Tennessee.`,
    author: `Mitchell Hollander`,
    email: `MitchellSHollander@gmail.com`,
    phrases: [
      "Full-Stack Development",
      "JavaScript, Ruby, Java",
      "VueJS, Vuex, React, jQuery",
      "GatsbyJS, Jekyll",
      "PostgreSQL, MySQL, MongoDB",
      "GraphQL, REST, Firebase",
      "SASS, LESS, CSS Modules",
      "Ruby on Rails, NodeJS, ExpressJS",
      "Git, Subversion",
      "Thymeleaf, Spring",
    ],
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
        url: `https://github.com/mitchures`
      },{
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/mitchell-hollander-93737893`
      },{
        name: `VSCO`,
        url: `https://vsco.co/mitchures/`
      }
    ],
    clients: [
      {
        name: `Apple`,
        url: `https://brentwoodhomepage.com/franklin-residents-iphone-shot-ends-up-on-billboards-all-over-the-world/`,
        summary: `In 2016, a photo of mine was selected to be featured in Apple's "Shot On iPhone 6s" World Gallery campaign for the iPhone 6s. The photo was then posted on billboards and print publications all around the world in over 26 countries.`
      },
      {
        name: `Water Journal`,
        url: `https://waterjournal.co/shop/volume-three`,
        summary: `Water Journal is an exploration of all things water and life, celebrating its undeniable beauty and complexity. Several photos of mine from one of my trips to Iceland are featured in Volume 3 including a short story written by me.`
      },
      {
        name: `Parkland`,
        url: `https://parklandmfg.com/`,
        summary: `Established in 2015, Parkland Design & Manufacturing creates sustainable bags and accessories for everyday life. I was commissioned by Parkland to take promotional photos of their products.`
      },
      {
        name: `Rucksack Magazine`,
        url: `https://rucksackmag.com/journal/mitchell-hollander`,
        summary: `Rucksack Magazine is an online journal and printed bi-annual publication for both written & visual storytelling through adventure and photography. I was fortunate enough to be interviewed and featured on Rucksack Mag's online journal.`
      },
      {
        name: `Welly Merck`,
        url: `https://www.wellymerck.com/`,
        summary: `Welly Merck was founded on the true story of Merck and Welly, lovers who established a timeless identity by facing adversity and overcoming it. Welly Merck watches are evidence of their journey. I was commissioned by Welly Merck to take promotional photos of their wrist watches.`
      },
      {
        name: `Unsplash`,
        url: `https://medium.com/unsplash/makers-to-merchants-weebly-unsplash-at-wework-nashville-ee03fb9d7b79`,
        summary: `Unsplash is a tool for creatives to access beautiful, free images gifted by the world’s most generous community of photographers. I was hired by Unsplash to take free professional photos of guests at the Makers to Merchants event hosted by Weebly.`
      },
      {
        name: `Mahabis`,
        url: `https://mahabis.com/`,
        summary: `Mahabis is an award-winning range of slippers designed for comfort. I was commissioned by Mahabis to take promotional photos of their footwear. My Wife still wears her gifted pair to this day.`
      },
      {
        name: `Trade Coffee`,
        url: `https://www.drinktrade.com/`,
        summary: `Shop the best specialty coffee subscription from the nation's best roasters on Trade, fresh coffee roasted to order and delivered right to your door. I was commissioned by Trade to take promotional photos of a few select coffee blends.`
      }
    ],
    projects: [
      {
        name: `Sakura Performance Manager`,
        description: `Sakura Performance Manager utilizes both React and Ruby on Rails in order to create a user experience that provides Managers with the ability to submit employee performance reviews.`,
        url: `https://sakura-performance-manager.herokuapp.com/`,
        cover: `otaku`
      },
      {
        name: `Cryptocurrency Dashboard`,
        description: `Cryptocurrency Dashboard app built with Ruby on Rails using the CryptoCompare API.`,
        url: `https://crypto-comparison-dashboard.herokuapp.com/`,
        cover: `crypto`
      },
      {
        name: `Otaku Ipsum`,
        description: `Otaku-themed placeholder text generator built with Gatsby.js and React.`,
        url: `https://otakuipsum.netlify.com/`,
        cover: `otaku`
      },
      {
        name: `Crypto Comparison`,
        description: `Cryptocurrency comparison app built with Gatsby.js & React using the CoinMarketCap API.`,
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
        name: `mitchures`,
        short_name: `mitchures`,
        start_url: `/`,
        display: `standalone`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        icon: `src/images/mitchures-favicon-transparent.png`,
      }
    },
    `gatsby-plugin-offline`
  ],
}
