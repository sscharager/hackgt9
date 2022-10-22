import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";

export default function TimeMenu(props) {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>30</Button>
        <Button>45</Button>
        <Button>60</Button>
      </ButtonGroup>
      <Button> End Reservation</Button>

      <p> {props.text} minutes left </p>
    </Grid>
  );
}
