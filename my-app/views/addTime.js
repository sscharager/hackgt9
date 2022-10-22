import * as React from 'react';
import Button from '@mui/material/Button';

import ButtonGroup from '@mui/material/ButtonGroup';

export default function TimeMenu(props){
  return(
    <div>
<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>30</Button>
  <Button>45</Button>
  <Button>60</Button> // buttons should automatically add time to the total
</ButtonGroup>
<Button> End Reservation</Button>
<h6> {props.text} minutes left </h6>
</div> );
}
