import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import { header, btn } from '../styles/home.module.css'
import Hero from "../components/Hero"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>MERN stack developer based in India.</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <Hero />
      </section>
    </Layout>
  )
}
