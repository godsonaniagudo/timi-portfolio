import Layout from "../components/Layout/layout";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
     
    )
  }