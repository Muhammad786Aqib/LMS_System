// src/components/InfoSection.tsx

import { Paper, Typography } from '@material-ui/core';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  infoSection: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(15),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
}
}));

const InfoSection = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.infoSection} elevation={3}>
      <Typography variant="h6">Today's Quote</Typography>
      <Typography variant="body1" gutterBottom>
        "There is more treasure in books than in all the pirate's loot on Treasure Island" - Walt Disney
      </Typography>

      <Typography variant="h6">Library Timing</Typography>
      <Typography variant="body1">Opening: 9:00 AM</Typography>
      <Typography variant="body1">Closing: 12:00 PM</Typography>

      <Typography variant="h6">What We Provide?</Typography>
      <Typography variant="body1">- AC Rooms</Typography>
      <Typography variant="body1">- Free Wi-Fi</Typography>
      <Typography variant="body1">- Learning Environment</Typography>
      <Typography variant="body1">- Discussion Room</Typography>
      <Typography variant="body1">- Free Electricity</Typography>
    </Paper>
  );
};

export default InfoSection;
