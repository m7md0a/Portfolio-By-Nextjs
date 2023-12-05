import Head from "next/head.js"
import Layout from "../layouts/Layout.jsx"
import '@/styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Mohamed Abdelrahman</title>
        <meta name="description" className="meta_description" content="I am Mohamed Abdelrahman, a web developer focusing on designing websites with a beautiful interface design - Mohamed Abdelrahman - m7md0a" />
        <meta name="twitter:image:src" content="https://avatars.githubusercontent.com/u/54208900" />
        <meta name="twitter:site" content="@m7md_0a" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mohamed Abdelrahman" />
        <meta name="twitter:description" className="meta_description" content="I am Mohamed Abdelrahman, a web developer focusing on designing websites with a beautiful interface design - Mohamed Abdelrahman - m7md0a" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/54208900" />
        <meta property="og:image:alt" className="meta_description" content="I am Mohamed Abdelrahman, a web developer focusing on designing websites with a beautiful interface design - Mohamed Abdelrahman - m7md0a" />
        <meta property="og:site_name" content="m7md0a" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="m7md0a - Overview" />
        <meta property="og:url" content="https://mohamed-abdelrahman.surge.sh" />
        <meta property="og:description" className="meta_description" content="I am Mohamed Abdelrahman, a web developer focusing on designing websites with a beautiful interface design - Mohamed Abdelrahman - m7md0a" />
        <meta property="profile:username" content="m7md0a" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
