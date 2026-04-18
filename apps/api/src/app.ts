import express, { type Request, type Response } from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello from express!');
});

export default app;
