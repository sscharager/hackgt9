import * as React from "react";
import { Grid, Button, InputLabel, TextField } from "@mui/material/";
//import { JSHash, JSHmac, CONSTANTS } from "react-native-hash";

export default function signUp() {

  return (
    <form>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: 64 }}
      >
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" />

        <Button type="submit" variant="contained" onClick={sendInfo}>
          {" "}
          Submit{" "}
        </Button>
      </Grid>
    </form>
  );
}
