import React from 'react'

import { graphql, StaticQuery } from "gatsby"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SiteSocialQuery {
        site {
          siteMetadata {
            social {
              name
              url
            }
          }
        }
      }
    `}
    render={data => (
      <footer>
        <div className="container">
          <div className="grid">
            <div className="col-xs-12">
              <ul className="social">
                {
                  data.site.siteMetadata.social.map((link, i) => {
                   return (
                     <li key={i}>
                       <a className="link"
                         href={link.url}
                         title={link.name}
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                         {link.name}
                       </a>
                     </li>
                   )
                  })
                }
              </ul>
              <p className="copyright">&copy; {new Date().getFullYear()} Mitchell Hollander</p>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)

export default Footer