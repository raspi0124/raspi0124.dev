import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();
interface MainPage extends AppProps {
  emotionCache?: EmotionCache;
}

function MainPage(props: MainPage) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <html lang="ja" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:title" content="raspi0124.dev" />
        <meta property="og:description" content="raspi0124の謎サイト" />
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:url" content="https://raspi0124.dev/" />
        <meta property="og:type" content="website" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MainPage;
