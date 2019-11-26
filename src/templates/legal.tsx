import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/main/Layout'
import SEO from '../components/util/seo/Seo'
import Navigation from '../components/shared/navigation/navigation'

interface LegalProps {
  pageContext: {
    locale: string
  }
  data: {
    markdownRemark: {
      id: string
      html: string
      frontmatter: {
        date: Date
        title: string
        description: string
        localeSwitch: string
      }
    }
  }
}

const Legal = ({ pageContext: { locale }, data }: LegalProps): JSX.Element => {
  const { markdownRemark: post } = data
  return (
    <Layout locale={locale}>
      <SEO title="SEO Title Home" metaDescription="SEO Desc Home" />
      <Navigation locale={'/'} localeSwitch="de" />
      <div className="container">
        <div className="pt-20" />
        <div className="container-normal ">
          <div className="w-100 bg-black text-white border-solid border-white border-2 py-10 lg:px-20 px-5">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Legal

export const pageQuery = graphql`
  query LegalPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        localeSwitch
      }
    }
  }
`
