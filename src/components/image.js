import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Image = () => {
    const data = useStaticQuery(graphql `
    query {
      logoImage: file(relativePath: { eq: "m-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

    return <Img fluid = {
        data.logoImage.childImageSharp.fluid
    }
    />
}

export default Image