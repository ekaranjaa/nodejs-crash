const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // res.setHeader('Content-Type', 'text/plain');
  // res.write('Hello, World!');

  // Set header content type
  res.setHeader('Content-Type', 'text/html');

  // Return response to browser.
  res.write('<h1>Hello, World!</h1>');

  // End the response
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('Server started on http//localhost:3000');
});
