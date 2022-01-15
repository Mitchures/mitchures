import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Card = ({ className, header, cover, description }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(cover)
  })

  const customClass = className || ""

  return (
    <div className={`card ${customClass}`}>
      <Img alt={cover} fluid={image.node.childImageSharp.fluid} />
      <div className="card-content">
        <h4>{header}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
