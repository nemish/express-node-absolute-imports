import express from 'express';
import log from "@src/lib/utils/log";

const PORT = 3000;

const run = () => {
  const app = express();
  app.get('/', (req, res) => res.send('Hello world!'))
  app.listen(PORT, () => {
    log(`express server listening on port ${PORT}`);
  });
  log('core/run was called');
}

export default run;
