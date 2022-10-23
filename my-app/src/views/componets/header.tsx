import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import BackpackIcon from "@mui/icons-material/Backpack";

export default function header() {
  return (
    <div style={{ paddingTop: 64 }}>
      <AppBar>
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap>
            Study QR
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
