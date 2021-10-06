import * as React from "react"
import Layout from "../components/layout"
import PageSection from "../components/pageSection"


// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 - Page Not Found ">
      <PageSection>
        <h1>404 - Page Not Found</h1>
        <p>Oops, looks like the page you're looking for isn't here</p>
      </PageSection>
    </Layout>
  )
}

export default NotFoundPage
