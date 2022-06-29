import * as React from "react";
import Link from "next/Link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from "next/router";

const drawerWidth = 240;

function ClippedDrawer() {

  const router = useRouter();

  function isCurrentPage(name: string, exact: boolean = false) {
    if(exact) return router.asPath == name;
    return router.asPath.startsWith(name);
  }

  console.log(router.asPath);
  

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <Link href="/">
            <ListItem disablePadding>
              <ListItemButton selected={isCurrentPage("/", true)}>
                <ListItemIcon>
                  <ViewModuleIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/logs">
            <ListItem disablePadding selected={isCurrentPage("/logs")}>
              <ListItemButton>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Logs" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/settings">
            <ListItem disablePadding selected={isCurrentPage("/settings")}>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
}

export default ClippedDrawer;
