import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Photo from './Photo/Photo'
import { useDispatch } from 'react-redux'
import useStyles from './styles';

import { getPhotos } from '../../../Store/actions/dashboardActions'


const Photos = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const { data } = useSelector((state) => state.photoReducer);
  const classes = useStyles();
  if (!data?.photos?.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {data.photos.map((photo) => (
          <Grid key={photo.id} item xs={12} sm={12} md={12} lg={12}>
            <Photo photoItem={photo} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Photos;
