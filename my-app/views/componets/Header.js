import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import BackpackIcon from '@mui/icons-material/Backpack';

export default function header(){
  return (
      <AppBar position="relative">
            <Toolbar>
              <BackpackIcon sx={{ mr: 2 }} />
              <Typography variant="h6" color="inherit" noWrap>
                Idk App Name
              </Typography>
            </Toolbar>
      </AppBar>
    )
}
