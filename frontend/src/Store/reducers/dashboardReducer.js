import { FETCH_ALL_PHOTOS } from '../store-constants';

const photoReducer = (data = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PHOTOS:
      return {...data, data: action.payload };
    default:
      return data;
  }
};

export default photoReducer;