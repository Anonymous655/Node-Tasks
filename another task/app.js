const http = require('http');

const requests = require('./requests');


const server = http.createServer(requests);

server.listen(3000);
