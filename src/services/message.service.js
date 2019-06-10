import paho from 'paho-mqtt';

import store from '../store';

export const messageService = {
  connect,
};


function connect({ host, port, clientId }, topic) {
  return new Promise((resolve, reject) => {
    // Create a client instance
    const client = new paho.Client(host, port, clientId);
    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    // connect the client
    client.connect({
      onSuccess: () => {
        console.log(topic);
        client.subscribe(topic);
        resolve();
      },
      onFailure: () => {
        setTimeout(() => reject(Error('Could not connect to broker')), 1500);
      },
    });
  });
}


function onConnectionLost() {
  store.commit('network/disconnect');
}

function onMessageArrived(message) {
  store.commit('network/newMessage', message);
}
