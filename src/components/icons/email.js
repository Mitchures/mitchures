import React from 'react'

const Email = ({ address }) => {
  return (
    <a href={"mailto:" + address}>
      Contact
    </a>
  )
}

export default Email