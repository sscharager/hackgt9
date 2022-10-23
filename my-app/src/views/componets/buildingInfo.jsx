import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import data from "./testData.json";

export default function BuildingInfo() {
  useState(data);
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" component="h2">
        Building: {data.buildingName}
      </Typography>
      <Typography variant="h4" component="h2">
        Room: {data.roomNumber}
      </Typography>
      <Typography variant="h4" component="h2">
        Seats Available: {data.seatsAvailable}
      </Typography>
    </Grid>
  );
}
