const http = require('http');
const axios = require('axios');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    const jokeResponse = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const joke = jokeResponse.data;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>${joke.setup}</h1><p>${joke.punchline}</p>`);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error fetching joke');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
