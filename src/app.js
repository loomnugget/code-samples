const Server = require('./server.js');
const port = (process.env.PORT || 3000);
const app = Server.app();

app.listen(port);

// eslint-disable-next-line no-console
console.log(`Listening at http://localhost:${port}`);
