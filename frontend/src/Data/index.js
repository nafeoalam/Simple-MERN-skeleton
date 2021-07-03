
import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000' });
const nasaAPI = axios.create({ baseURL: 'https://api.nasa.gov' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


//PHOTO
//const demoKey = 'fUQlDFM4UWdHt0QI2ikVhFfAYIVUCS8hHYeEDYvD';
const demoKey = process.env.REACT_APP_NASA_DEMO_KEY;
const photos = `/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${demoKey}`;
export const fetchPhotos = () => nasaAPI.get(photos);


//AUTH
const auth = '/auth';
export const register = (formData) => API.post(`${auth}/register`, formData);
export const login = (formData) => API.post(`${auth}/login`, formData);

