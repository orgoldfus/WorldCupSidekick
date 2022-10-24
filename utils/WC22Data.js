const WC22_API_HOST = 'http://api.cup2022.ir';
const cache = {};
let token;

async function makeWC22DataAPICall(method, path, payload) {
  try {
    if (!token) {
      await login();
    }

    const requestParams = {
      method,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    if (method === 'POST') {
      requestParams.body = payload;
    }

    const response = await fetch(`${WC22_API_HOST}${path}`, requestParams);

    return await response.json();
  } catch (err) {
    console.error('Failed getting data from WC22 data API', { url }, err);
    // if invalid token - login and retry
    // else throw
  }
}

async function login() {
  try {
    const response = await fetch(`${WC22_API_HOST}/api/v1/user/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: process.env.WC22_API_USER,
        password: process.env.WC22_API_PASSWORD
      })
    });

    const resData = await response.json();

    token = resData.data.token;
  } catch (err) {
    console.error('Failed login to WC22 data API', err);
  }
}

async function getWC22AllMatches() {
  if (cache.allMatches) return cache.allMatches;

  const response = await makeWC22DataAPICall('GET', '/api/v1/match');

  cache.allMatches = response.data;

  return response.data;
}

async function getWC22AllTeams() {
  if (cache.allTeams) return cache.allTeams;

  const response = await makeWC22DataAPICall('GET', '/api/v1/team');

  cache.allTeams = response.data;

  return response.data;
}

module.exports = {
  getWC22AllMatches,
  getWC22AllTeams
};
