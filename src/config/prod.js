console.log('NODE_ENV: ' + process.env.NODE_ENV);
console.log('API_HOST: ' + process.env.API_HOST);
const apiHost = 'https://' + process.env.API_HOST;
module.exports = {
  apiHost: apiHost,
};
