const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

function cpuWork() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
}

const server = http.createServer((req, res) => {
  const result = cpuWork();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <h1>CPU-belastningstest</h1>
    <p>Appen kördes korrekt och genererade CPU-arbete.</p>
    <p>Resultat av beräkning: ${result}</p>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
