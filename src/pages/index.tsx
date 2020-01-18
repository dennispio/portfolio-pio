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

interface HomepageData {
  fields: {
    slug: string
  }
  frontmatter: {
    pageKey: string
    localeSwitch: string
    pathLink: string
    locale: string
    seo_title: string
    seo_desc: string
    title: string
    text: string
    bio: {
      text: string
    }
    start: {
      text: string
    }
    projekte: {
      projektetext1: string
      projektetext2: string
      projektetext3: string
      projektetext4: string
    }
    timeline: {
      timelinetext1: string
      timelinetext2: string
      timelinetext3: string
      timelinetext4: string
      timelinetext5: string
    }
  }
}

interface IndexProps {
  pageContext: {
    [locale: string]: string
  }
  data: {
    homePageData: HomepageData
  }
}

interface StartProps {
  startview: boolean
  newValue: boolean
}

const IndexPage = ({ pageContext: { locale }, ...props }: IndexProps): ReactElement => {
  const { homePageData: data } = props.data
  const [startview, setStartview] = useState(false)

  const startviewhandler = ({ newValue }: StartProps): void => {
    setTimeout((): void => {
      setStartview(newValue)
    }, 8000)
  }

  return (
    <Layout locale={locale}>
      {startview == false ? (
        <Start startData={data.frontmatter.start} onChange={startviewhandler} />
      ) : (
        <div>
          <Navigation locale={data.frontmatter.pathLink} localeSwitch={data.frontmatter.localeSwitch} />
          <Bio biodata={data.frontmatter.bio} />
          <div className="md:h-32 h-16" />
          <Timeline timelineData={data.frontmatter.timeline} />
          <div className="md:h-8 h-16" />
          <Project projekteData={data.frontmatter.projekte} />
          <Kontakt />
          <div className="md:h-32 h-16" />
        </div>
      )}
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
        localeSwitch
        pathLink
        seo_title
        seo_desc
        title
        start {
          text
        }
        bio {
          text
        }
        timeline {
          timelinetext1
          timelinetext3
          timelinetext4
          timelinetext5
          timelinetext2
        }
        projekte {
          projektetext1
          projektetext2
          projektetext3
          projektetext4
        }
      }
    }
  }
`
