// server.js
import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
// import ReflectionWithJsObject from './src/usingJSObject/controllers/Reflection';
// import Reflection from './src/controller/Reflection';
import User from './controller/User';
import Tas from './controller/Tas';
// import Auth from './src/middleware/Auth';
import cors from 'cors';


dotenv.config();
// const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>
  res.status(200).send({ message: 'Looks like the API is running!' }),
);

// app.post('/api/v1/reflections', Auth.verifyToken, Reflection.create);
// app.get('/api/v1/reflections', Reflection.getAll);
// app.get('/api/v1/reflections/:id', Auth.verifyToken, Reflection.getOne);
// app.put('/api/v1/reflections/:id', Auth.verifyToken, Reflection.update);
// app.delete('/api/v1/reflections/:id', Auth.verifyToken, Reflection.delete);
app.post('/api/v1/user/register', User.register);
app.post('/api/v1/user/login', User.login);
// app.post('/api/v1/users/login', UserWithDb.login);
// app.delete('/api/v1/users/me', Auth.verifyToken, UserWithDb.delete);

app.get('/api/v1/tas/getctcs', Tas.getCtcs);
app.post('/api/v1/tas/getsystems', Tas.getSystems);
app.post('/api/v1/tas/getstations', Tas.getStations);
app.post('/api/v1/tas/getobjects', Tas.getObjects);
app.post('/api/v1/tas/connect', Tas.connect);


app.listen(3000);
console.log('app running on port ', 3000);
