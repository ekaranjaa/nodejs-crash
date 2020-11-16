const fs = require('fs');

// Streams and Buffers
/**
 * Streams allows us to take advantage of data before it's completely
 * loaded. eg Streaming videos on YouTube or Netlflix.
 *
 * Buffers refers to small chunks of data.
 */
const readStream = fs.createReadStream(`${__dirname}/docs/file3.txt`, {
  encoding: 'utf-8',
});
const writeStream = fs.createWriteStream(`${__dirname}/docs/file4.txt`);

// readStream.on('data', chunk => {
//   writeStream.write('\n---NEW CHUNK---\n');
//   writeStream.write(chunk);
// });

// Piping
/**
 * Piping is an easier, more convenient way to write streams of data
 * strictly from a readable to writable.
 */
readStream.pipe(writeStream);
