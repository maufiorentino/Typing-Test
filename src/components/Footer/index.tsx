import * as React from 'react';
import { useDispatch } from "react-redux";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { setReplay } from "../../redux/typingSpeedSlice";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';

const useStyles = makeStyles(theme => ({
  iconButtonLabel: {
    display: 'flex',
    flexDirection: 'column',
  },
}));


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));


function Footer() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const correctEntriesOfCorrectWords = useSelector((state: RootState) => state.typingSpeed.correctEntriesOfCorrectWords);

  return (
    <Box sx={{ flexGrow: 1, marginTop: '10px' }}>
      <Grid container spacing={2} >
        <Grid xs>


        </Grid>
        <Grid xs={8}>
          <Item>
            <IconButton
              classes={{ label: classes.iconButtonLabel }}
              onClick={() => dispatch(setReplay())}>
              <RestartAltIcon />
              <div>
                Restart Game
              </div>
            </IconButton>
          </Item>
        </Grid>
        <Grid xs >
          <Item style={{ marginRight: '10px' }}>Corrected CPM: {correctEntriesOfCorrectWords}</Item>
          <Item style={{ marginRight: '10px', marginTop: '25px' }}>WPM: {Math.round(correctEntriesOfCorrectWords / 5)}</Item>

        </Grid>
      </Grid>
    </Box >
  );
}

export default Footer;
