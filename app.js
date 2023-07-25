// Load the HTTP module to create an HTTP server.
const http = require('http');

// Create a server object.
const server = http.createServer((req, res) => {
  // Set the response header.
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response content.
  res.end('Hello, World!\n');
});

// Start the server and listen on port 3000.
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
