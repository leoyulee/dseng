import Head from 'next/head'
import Nav from './Nav'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>dseng{title && ` | ${title}`}</title>
        <meta description="dunwoody software engineering" />
        <meta author="david magnuson" />
      </Head>

      <main className="w-screen h-screen overflow-scroll flex flex-col-reverse md:flex-row">
        <Nav />
        {children}
      </main>
    </>
  )
}

export default Layout
