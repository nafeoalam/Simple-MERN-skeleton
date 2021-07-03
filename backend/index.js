import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Expose-Headers', 'Content-Range');
    res.header('Content-Range', 'dishes 0-9/9');
    next();
}
app.use(allowCrossDomain);

//Routes

import AuthRoutes from './routes/_auth.router.js';
app.use('/auth', AuthRoutes);


//Mongo
const mongoUserName = 'nafeojoy';
const mongoPassword = '1234';
const mongoDbName = 'tuliptech'
const CONNECTION_URL = `mongodb+srv://${mongoUserName}:${mongoPassword}@cluster0.lq4xh.gcp.mongodb.net/${mongoDbName}?retryWrites=true&w=majority`; //Mongo Connection

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);