import paho from 'paho-mqtt';

export const messageService = {
  connect,
};


function connect({ host, port, clientId }) {
  return new Promise((resolve, reject) => {
    // Create a client instance
    const client = new paho.Client(host, port, clientId);
    // set callback handlers
    // client.onConnectionLost = onConnectionLost;
    // client.onMessageArrived = onMessageArrived;
    // connect the client
    client.connect({
      onSuccess: () => {
        console.log('on success');
        resolve('Success');
      },
      onFailure: () => {
        setTimeout(() => reject(Error('Could not connect to broker')), 1500);
      },
    });
  });
}

// function onConnectionLost() {
//   console.log('connection has been lost');
// }

// function onMessageArrived() {
//   console.log('A gift from the gods?');
// }
