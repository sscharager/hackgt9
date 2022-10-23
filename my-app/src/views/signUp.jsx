import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function signUp() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <TextField id="outlined-basic" label="name" variant="outlined" />
      <Button> Submit</Button>
    </Grid>
  );
}
