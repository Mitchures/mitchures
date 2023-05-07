/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mitchures`,
    description: `Hello, I'm Mitchell Hollander. An exuberant software developer based in Oahu, Hawaii.`,
    author: `Mitchell Hollander`,
    email: `create@mitchures.co`,
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
      "Typescript",
    ],
    social: [
      {
        name: `Instagram`,
        url: `https://www.instagram.com/mitchures.co/`,
      },
      {
        name: `Github`,
        url: `https://github.com/mitchures`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/mitchell-hollander-93737893`,
      },
      {
        name: `VSCO`,
        url: `https://vsco.co/mitchures/`,
      },
    ],
    clients: [
      {
        name: `Apple`,
        url: `https://brentwoodhomepage.com/franklin-residents-iphone-shot-ends-up-on-billboards-all-over-the-world/`,
        summary: `In 2016, a photo of mine was selected to be featured in Apple's "Shot On iPhone 6s" World Gallery campaign for the iPhone 6s. The photo was then posted on billboards and print publications all around the world in over 26 countries.`,
      },
      {
        name: `Water Journal`,
        url: `https://waterjournal.co/shop/volume-three`,
        summary: `Water Journal is an exploration of all things water and life, celebrating its undeniable beauty and complexity. Several photos of mine from one of my trips to Iceland are featured in Volume 3 including a short story written by me.`,
      },
      {
        name: `Parkland`,
        url: `https://parklandmfg.com/`,
        summary: `Established in 2015, Parkland Design & Manufacturing creates sustainable bags and accessories for everyday life. I was commissioned by Parkland to take promotional photos of their products.`,
      },
      {
        name: `Rucksack Magazine`,
        url: `https://rucksackmag.com/journal/mitchell-hollander`,
        summary: `Rucksack Magazine is an online journal and printed bi-annual publication for both written & visual storytelling through adventure and photography. I was fortunate enough to be interviewed and featured on Rucksack Mag's online journal.`,
      },
      {
        name: `Welly Merck`,
        url: `https://www.wellymerck.com/`,
        summary: `Welly Merck was founded on the true story of Merck and Welly, lovers who established a timeless identity by facing adversity and overcoming it. Welly Merck watches are evidence of their journey. I was commissioned by Welly Merck to take promotional photos of their wrist watches.`,
      },
      {
        name: `Unsplash`,
        url: `https://medium.com/unsplash/makers-to-merchants-weebly-unsplash-at-wework-nashville-ee03fb9d7b79`,
        summary: `Unsplash is a tool for creatives to access beautiful, free images gifted by the world’s most generous community of photographers. I was hired by Unsplash to take free professional photos of guests at the Makers to Merchants event hosted by Weebly.`,
      },
      {
        name: `Mahabis`,
        url: `https://mahabis.com/`,
        summary: `Mahabis is an award-winning range of slippers designed for comfort. I was commissioned by Mahabis to take promotional photos of their footwear. My Wife still wears her gifted pair to this day.`,
      },
      {
        name: `Trade Coffee`,
        url: `https://www.drinktrade.com/`,
        summary: `Shop the best specialty coffee subscription from the nation's best roasters on Trade, fresh coffee roasted to order and delivered right to your door. I was commissioned by Trade to take promotional photos of a few select coffee blends.`,
      },
    ],
    projects: [
      {
        name: `Animitchures`,
        description: `Animitchures is a full featured anime tracking application built using React, Typescript, Firebase, and the Anilist.co GraphQL API. It also includes user authentication that features "Sign in with" Apple and Google providers. As a passion project of mine, its still currently a work in progress as I add new features when ever I have time. `,
        url: `https://github.com/Mitchures/animitchures`,
        cover: `animitchures`,
      },
      {
        name: `Mitchures Pictures`,
        description: `Mitchures Pictures is a photo gallery app displaying my photography work built in Vue.js and using Firebase for photo storage.`,
        url: `https://mitchures.pictures/`,
        cover: `mitchures-pictures`,
      },
      {
        name: `Apple Media Explorer`,
        description: `An Apple Music UI inspired iTunes media finder built using Typescript, React, React Context API, and Apple's iTunes Search API.`,
        url: `https://apple-media-explorer.firebaseapp.com/`,
        cover: `apple-media-explorer`,
      },
      {
        name: `Mitchstachat`,
        description: `Mitchstachat is a re-imagined version of one of my earlier chat room app projects built using Firebase and static JavaScript. In this iteration, I use TypeScript along with the MERN (MongoDB, Express, React, NodeJS) stack and Pusher to enhance MongoDB for realtime database extraction.`,
        url: `https://mitchstachat.firebaseapp.com/`,
        cover: `mitchstachat`,
      },
      {
        name: `Mitchstagram`,
        description: `Mitchstagram is a lightweight re-imagined clone of Instagram built with React and Firebase. Users are able to sign up, login, post photos, comment on posts, delete posts, and update their avatars all in realtime.`,
        url: `https://mitchstagram.firebaseapp.com/`,
        cover: `mitchstagram`,
      },
      {
        name: `Mitchoogle`,
        description: `Mitchoogle is a lightweight clone of Google built using React, React Router, React Context API, Material UI, and a custom hook for Google's Custom Search API.`,
        url: `https://mitchoogle-aae25.firebaseapp.com/`,
        cover: `mitchoogle`,
      },
      {
        name: `Hulu`,
        description: `A lightweight clone of Hulu built using React, React Flip Move, React Text Truncate, Ant Design (for icons), Axios, and The Movie Database API.`,
        url: `https://mitchures-hulu.firebaseapp.com/`,
        cover: `hulu`,
      },
      {
        name: `Mitchures Slack`,
        description: `Mitchures Slack is a lightweight Slack clone built using React, React Context API, and Firebase for authentication and data storage.`,
        url: `https://mitchures-slack.firebaseapp.com/`,
        cover: `mitchures-slack-alt`,
      },
      {
        name: `Cryptocurrency Dashboard`,
        description: `Cryptocurrency Dashboard app built with Ruby on Rails using the CryptoCompare API.`,
        url: `https://crypto-comparison-dashboard.herokuapp.com/`,
        cover: `crypto-dashboard-alt`,
      },
      {
        name: `Otaku Ipsum`,
        description: `Otaku-themed placeholder text generator built with Gatsby.js and React.`,
        url: `https://otakuipsum.netlify.com/`,
        cover: `otaku-ipsum-alt`,
      },
      {
        name: `Maku`,
        description: `A Rails 5 Movie Search app that utilizes the Movie Database API.`,
        url: `https://maku.herokuapp.com/`,
        cover: `maku-alt`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `mitchures`,
        short_name: `mitchures`,
        start_url: `/`,
        display: `standalone`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        icon: `src/images/mitchures-favicon.png`,
      },
    },
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-offline`,
  ],
}
