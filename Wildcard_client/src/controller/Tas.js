const fetch = require('node-fetch');

const Model = {
  async updateModel(msg) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(msg),
    };
    let res = await fetch('http://localhost:3000/api/v1/tas/updateModel', requestOptions);
    res = res.json();
    return res;
  },
};

export default Model;

