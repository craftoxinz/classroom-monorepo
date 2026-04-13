import app from './app.ts';
import { env } from './config/env.ts';

let message;

const startServer = () => {
  app.listen(env.PORT, () => {
    console.log(`Server listening on port ${env.PORT}`);
  });
};

startServer();
