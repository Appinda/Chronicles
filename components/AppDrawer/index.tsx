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

import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const menuItems = ["Inbox", "Starred", "Send email", "Drafts"];

function ClippedDrawer() {
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
              <ListItemButton>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/settings">
            <ListItem disablePadding>
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
