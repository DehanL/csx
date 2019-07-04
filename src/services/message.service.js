import paho from 'paho-mqtt';

import store from '../store';

let client = null;

export const messageService = {
  connect,
  sendControl,
};


function connect({ host, port, clientId }, topic) {
  return new Promise((resolve, reject) => {
    // Create a client instance
    client = new paho.Client(host, port, clientId);
    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    // connect the client
    client.connect({
      onSuccess: () => {
        client.subscribe(topic);
        resolve();
      },
      onFailure: () => {
        setTimeout(() => reject(Error('Could not connect to broker')), 1500);
      },
    });
  });
}

function sendControl({ element, bit }) {
  return new Promise((resolve, reject) => {
    // Create a client instance
    const message = new paho.Message(`${element}:${bit}`);
    message.destinationName = 'ctc/pta/bky/controls';
    if (client) {
      try {
        client.send(message);
      } catch (error) {
        reject('Could not send the message');
      }
    } else {
      reject('No valid MQTT conneciton found');
    }
    resolve();
  });
}


function onConnectionLost() {
  store.commit('network/disconnect');
}

function onMessageArrived(message) {
  store.dispatch('network/newMessage', message);
}
