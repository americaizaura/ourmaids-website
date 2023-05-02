import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
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
          headings: {
            sizes: {
              h1: {
                fontSize: "48px",
                lineHeight: "100%",
                fontWeight: 700,
              },
              h2: {
                fontSize: "36px",
                lineHeight: "100%",
                fontWeight: 700,
              },
              h3: {
                fontSize: "24px",
                lineHeight: "100%",
                fontWeight: 700,
              },
              h4: {
                fontSize: "20px",
                lineHeight: "100%",
                fontWeight: 700,
              },
              h5: {
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: 700,
              },
              h6: {
                fontSize: "16px",
                lineHeight: "100%",
                fontWeight: 700,
              },
            },
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
