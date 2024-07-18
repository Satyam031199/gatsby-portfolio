import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Hero = () => {
  return <StaticImage src="../images/banner.png" alt="Hero-image" style={{maxWidth: '100%'}}/>
}

export default Hero