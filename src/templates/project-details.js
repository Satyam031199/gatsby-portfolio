import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { details, featured, hmtlData } from '../styles/project-details.module.css'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const ProjectDetails = ({data}) => {
  const {html} = data.markdownRemark;
  const {title,stack,featuredImg} = data.markdownRemark.frontmatter;
  return (
    <Layout>
        <div className={details}>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={featured}>
                <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData}/> 
            </div>
            <div dangerouslySetInnerHTML={{__html: html}} className={hmtlData} />
        </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectsDetailsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`