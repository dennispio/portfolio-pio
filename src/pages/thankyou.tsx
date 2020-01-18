import React, { ReactElement } from 'react'
import Layout from '../components/layouts/main/Layout'
import SEO from '../components/util/seo/Seo'
import { Link } from 'gatsby'

const NotFoundPage = (): ReactElement => (
  <Layout>
    <SEO title="Ich meld mich bei dir " metaDescription="SEO DESC - 404: Not found" />
    <h1>Thank you for your Message</h1>
    <p>I'll write back as soon as I can.</p>
    <Link className="underline-effect uppercase" to="/">
      Back to Page
    </Link>
  </Layout>
)

export default NotFoundPage
