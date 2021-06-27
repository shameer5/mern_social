import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();
dotenv.config();

// this is to set up your body parser properly
//bodyParser.json with 30mb is set for when we send images which are large in size
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


/* process.env.PORT ->  once we push the application to herokou.
It will automatically populate the PORT varaible*/
const PORT = process.env.PORT|| 5000;

/* Connecting to the the DB
    If it connects then application will listen */
/* @param - 1st -> mention the connection url to the DB
   @param - 2nd -> just to avoid warnings in the console */
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

/* This is just to make sure we don't get any warnings */
mongoose.set('useFindAndModify', false);

/* we express middleware to connect the routes*/
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
