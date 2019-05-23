export const tasService = {
  getCtcs,
  getSystems,
  getStations,
  getObjects,
};

function getCtcs() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${process.env.ROOT_API}/tas/getctcs`, requestOptions)
    .then(response => response.json());
}

function getSystems(ctc) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ctc }),
  };

  return fetch(`${process.env.ROOT_API}/tas/getsystems`, requestOptions)
    .then(response => response.json());
}

function getStations(ctc, system) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ctc, system }),
  };

  return fetch(`${process.env.ROOT_API}/tas/getstations`, requestOptions)
    .then(response => response.json());
}

function getObjects(ctc, system, station) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ctc, system, station }),
  };

  return fetch(`${process.env.ROOT_API}/tas/getObjects`, requestOptions);
}
