import { FETCH_ALL_PHOTOS } from '../store-constants';

import * as api from '../../Data/index';

export const getPhotos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPhotos();

    dispatch({ type: FETCH_ALL_PHOTOS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


