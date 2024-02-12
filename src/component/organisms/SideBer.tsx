import React from  "react";
import { Box, ListItemButton, ListItem, List, Drawer, ListItemText, Chip, Stack } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export default function SideBer() {
  const drawerWidth = 240;

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };


  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack direction="row"  spacing={1} sx={{ display: 'flex', flexWrap: 'wrap', m: 1}}>
          <Chip
            label="Clickable Deletable"
            onClick={handleClick}
            onDelete={handleDelete}
            sx={{mb: 1}}
          />
          <Chip
            label="2r32fewafea"
            onClick={handleClick}
            onDelete={handleDelete}
            sx={{mb: 1}}
          />
          <Chip
            label="43214"
            onClick={handleClick}
            onDelete={handleDelete}
            sx={{mb: 1}}
          />
        </Stack>
    </Drawer>
  );
}
