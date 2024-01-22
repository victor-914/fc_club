import "../styles/globals.css";
import Head from "next/head";
import { Helmet } from "react-helmet";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../theme";
import Layout from "../layouts/Layout";
import store, { persistor } from "../state/store";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Router from "next/router";
import NProgress from "nprogress";
import "./page-loader.css"

NProgress.configure({ easing: "ease", speed: 500 });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rangers International</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="En" />
      </Helmet>

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <ToastContainer />
            {/* <MaintenanceSign /> */}
            <CssBaseline />
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
