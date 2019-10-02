import React, { ReactElement, useState, useContext, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layouts/main/Layout'
import { i18n } from '../constants/i18n'
import Start from '../components/start/start'
import Navigation from '../components/shared/navigation/navigation'
import Bio from '../components/bio/bio'
import Timeline from '../components/timeline/timeline'
import Project from '../components/projects/project'
import Kontakt from '../components/kontakt/kontakt'
import Footer from '../components/shared/footer/footer'

interface HomepageData {
  fields: {
    slug: string
  }
  frontmatter: {
    pageKey: string
    seo_title: string
    seo_desc: string
    title: string
    text: string
  }
}

interface BlogPosts {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      description: string
      date: string
    }
  }
}

interface IndexProps {
  pageContext: {
    [locale: string]: string
  }
  data: {
    homePageData: HomepageData
    blogPosts: {
      edges: BlogPosts[]
    }
  }
}

interface StartProps {
  startview: boolean
  newValue: boolean
}

const IndexPage = ({ pageContext: { locale }, ...props }: IndexProps): ReactElement => {
  const { homePageData: data } = props.data
  const { edges: posts } = props.data.blogPosts
  const [startview, setStartview] = useState(false)

  const startviewhandler = ({ newValue }: StartProps): void => {
    setTimeout((): void => {
      setStartview(newValue)
    }, 8000)
  }

  return (
    <Layout locale={locale}>
      {startview == false ? (
        <Start onChange={startviewhandler} />
      ) : (
        <div>
          <Navigation />
          <Bio />
          <div className="md:h-32 h-16" />
          <Timeline />
          <div className="md:h-8 h-16" />
          <Project />
          <div className="md:h-24 h-16" />
          <Kontakt />
          <div className="md:h-32 h-16" />
          <Footer />
        </div>
      )}
      {console.log(startview)}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeContent($locale: String) {
    homePageData: markdownRemark(frontmatter: { pageKey: { eq: "page_home" }, locale: { eq: $locale } }) {
      fields {
        slug
      }
      frontmatter {
        pageKey
        seo_title
        seo_desc
        title
        text
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_blogpost" }, locale: { eq: $locale } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
          }
        }
      }
    }
  }
`
