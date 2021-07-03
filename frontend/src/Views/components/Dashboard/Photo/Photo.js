import React, { useState, useEffect } from 'react';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Dish = ({ photoItem }) => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch();


  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            <img src={photoItem.img_src} alt="" />
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {photoItem.earth_date}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dish;
