import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import { useRouter } from 'next/router';
import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }: { Component: React.FC, pageProps: any }): JSX.Element {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <Head>
          <link rel="icon" href="/Tux.png" />
		  <title>Switch to Linux</title>
        </Head>
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
}
