module.exports = {
  siteMetadata: {
    title: `Dot Browser`,
    description: `Every 39 seconds, a hacker steals sensitive information online. Take back your privacy with Dot Browser, an aesthetically-pleasing web-browser with a built-in adblocker and privacy-tools to keep you safe online.`,
    author: `Dot HQ`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dotbrowser-site`,
        short_name: `dotbrowser`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: 'gatsby-remark-emojis',
          options: {
            active: true,
            class: 'emoji-icon',
            escapeCharacter : '',
            size: 16,
          }
        }]
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.8,
          once: true,
          disable: false,
          
          selector: '[data-sal]',
          animateClassName: 'sal-animate',
          disabledClassName: 'sal-disabled',
          rootMargin: '0% 50%',
          enterEventName: 'sal:in',
          exitEventName: 'sal:out',
      }
    }
  ],
}