import * as React from "react";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";

export default function linkPop(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Grid
        container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center">
        <Button onClick={handleToggle}>Invite </Button>
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1> Link Copied!</h1>
          <h2 class="link"> {props.link}</h2>
        </Grid>
      </Backdrop>
    </div>
  );
}
