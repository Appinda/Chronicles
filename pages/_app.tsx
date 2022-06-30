import React, { useState } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MenuAppBar from "../components/MenuAppBar";
import AppDrawer from "../components/AppDrawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material";

const THEMES: Record<string, Theme> = {
  light: createTheme({
    palette: {
      mode: 'light',
    }
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
    }
  })
}

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState("light");

  function onThemeChange(theme: string) {
    setTheme(theme);
  }

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES.light}>
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <MenuAppBar theme={theme} onThemeChange={onThemeChange} />
      <AppDrawer />
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default MyApp;
