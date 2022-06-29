import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MenuAppBar from "../components/MenuAppBar";
import AppDrawer from "../components/AppDrawer";
import Box from "@mui/material/Box";
import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MenuAppBar />
      <AppDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Box>
  );
}

export default MyApp;
