import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static('dist/public'));

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
