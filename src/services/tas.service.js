export const tasService = {
  getCtcs,
};

function getCtcs() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ id, password }),
  };

  return fetch(`${process.env.ROOT_API}/tas/getctcs`, requestOptions);
}

