import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routers/post.js';
import useRoutes from './routers/user.js';
const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', useRoutes);
const CONNECTION_URL = 'mongodb+srv://hung:!23456@cluster0.yptzo9p.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
app.get('/', (req,res) =>{
    res.send('APP IS RUNNING');
})
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology: true })
    .then(()=>app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) =>console.log(error.message));

// mongoose.set('useFindAndModify', false);