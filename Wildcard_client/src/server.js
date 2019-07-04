// server.js
import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import Model from './controller/Tas';

const mqtt = require('mqtt');

const config = {
  host: 'test.mosquitto.org',
  port: 8080,
  clientId: 'db_client',
};


dotenv.config();
// const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
const app = express();

app.use(express.json());

const client = mqtt.connect(`mqtt://${config.host}`, { clientId: config.clientId });

client.subscribe('ctc/pta/bky/indications', { qos: 1 });

// handle incoming messages
client.on('message', (topic, message) => {
  const msg = JSON.parse(message.toString());
  Model.updateModel(msg)
    .then(
      () => {
        console.log({ message: 'Wildcard client updated model', data: msg });
      },
      (res) => {
        console.log(res);
      },
    );
});

app.listen(3010);
console.log('app running on port ', 3010);
