const http = require('http');
const fs = require('fs');

/**
 * Status codes
 *
 * 100 Range - Informational responses for the browser.
 * 200 Range - Success codes.
 * 300 Range - Used for redirects.
 * 400 Range - User or client error codes.
 * 500 Range - Server error codes.
 */

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = `${__dirname}/views/`;
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      /**
       * `res.end()` is used to end a response and alternatively
       * to send single dataset whereas `res.write()` can be used
       * to pass multiple datasets.
       */
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Server started on http//localhost:3000');
});
