import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout } from "antd";
const { Content } = Layout;

import { Header, Footer } from "../components";
import Head from "next/head";
//import Document, { Html, Head, Main, NextScript } from "next/document";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Research Gateway</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
