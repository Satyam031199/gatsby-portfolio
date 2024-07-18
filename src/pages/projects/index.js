import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, projects } from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image'

const Projects = ({ data }) => {
  console.log(data);
  const projectsList = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {projectsList.map((project) => {
            return (
              <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
                <div>
                  <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt="thumb-image"/>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>Like what you see? Email me at - {contact} for a quote!</p>
      </div>
    </Layout>
  );
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    contact: site {
      siteMetadata {
        contact
      }
    }
    projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
        id
      }
    }
  }
`