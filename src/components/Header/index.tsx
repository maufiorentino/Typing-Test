import * as React from 'react';
import SelectLanguage from "../SelectLanguage";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));


function Header() {

  return (
    <Box sx={{ flexGrow: 1, marginTop: '10px' }}>
      <Grid container spacing={2} >
        <Grid xs>
        </Grid>
        <Grid xs={8}>
          <Item>
            <h1>Typing Speed Game</h1>
            <h4>How fast are your fingers? Do the one-minute typing test to find out! Press the space bar after each word. At the end, you'll get your typing speed in CPM and WPM. Good luck!</h4>
          </Item>
        </Grid>
        <Grid xs style={{ paddingTop: '10px', marginRight: '10px' }}>
          <SelectLanguage />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
