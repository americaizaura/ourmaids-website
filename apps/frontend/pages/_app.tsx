import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/hero.css";
import "../styles/index.css";
import Layout from "../components/layaout";
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Our maids</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */

          colorScheme: "light",
          primaryColor: "primary",
          colors: {
            primary: ["#FADCEA"],
            primaryVariant: ["#3C42BF"],
            secondary: ["#720012"],
            secondaryVariant: ["#3700CB"],
            toolbar: ["#49A2D3"],
            navigationBar: ["#3B82B2"],
            background: ["#EDF0F3"],
            surface: ["#FFFFFF"],
            success: ["#4CAF50"],
            info: ["#03A9F4"],
            warning: ["#FFC107"],
            error: ["#B00020"],
            danger: ["#F44336"],
            onError: ["#FFFFFF"],
            onPrimary: ["#FFFFFF"],
            onSecondary: ["#FFFFFF"],
            onSurface: ["#292929"],
            onBackground: ["#292929"],
            onToolbar: ["#FFFFFF"],
            textPrimary: ["#292929"],
            textSecondary: ["#575757"],
            divider: ["#C6C6C6"],
            textTrack: ["#959595"],
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
