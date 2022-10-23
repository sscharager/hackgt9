import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import data from "./testData.json";

import Typography from "@mui/material/Typography";

export default function linkPop(props) {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        {" "}
        <Button>Confirm Reservation </Button>
      </Grid>
      <Grid item>
        <Typography> {data.seatsTotal} seats in this room</Typography>
      </Grid>
      <Grid item>
        <Button> Cancel </Button>
      </Grid>
    </Grid>
  );
}
